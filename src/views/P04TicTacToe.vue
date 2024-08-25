<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 pt-[52px] text-start font-semibold"
    >
      <div
        class="relative box-border flex aspect-[1/1] w-[90%] max-w-[600px] flex-wrap items-center justify-center gap-[2%] border-[24px] border-white bg-white md:w-[50%]"
      >
        <div
          v-if="congrats"
          class="absolute flex h-full w-full items-center justify-center"
        >
          <img
            src="../../public/Tic-tac-toe/ConfettiAnimation.gif"
            class="h-full w-full"
          />
        </div>
        <div
          v-if="congrats"
          class="absolute flex h-full w-full items-center justify-center text-[32px] text-[#f1f1f1]"
          :style="{ textShadow: '1px 1px 4px black' }"
        >
          <h1>{{ winner }} win!</h1>
        </div>

        <div
          class="flex aspect-[1/1] w-[32%] items-center justify-center bg-violet-950 text-[16px] sm:text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px] 2xl:text-[96px]"
          @click="gameState === 'active' ? xOrO(Number(i)) : ''"
          v-for="(index, i) in table"
        >
          {{ index }}
        </div>
      </div>

      <div>
        <div class="flex items-center justify-center gap-4">
          <div class="flex flex-col gap-2" v-if="gameState === 'inactive'">
            <h1>Selected team</h1>
            <div class="flex w-full items-center justify-around">
              <h1
                @click="player = 'X'"
                class="flex size-8 cursor-pointer items-center justify-center rounded-full"
                :class="player === 'X' && 'border-2 border-blue-600'"
              >
                X
              </h1>
              <h1
                @click="player = 'O'"
                class="flex size-8 cursor-pointer items-center justify-center rounded-full"
                :class="player === 'O' && 'border-2 border-blue-600'"
              >
                O
              </h1>
            </div>
          </div>
          <button v-if="gameState === 'inactive'" @click="startGame">
            Start
          </button>
        </div>
        <button v-if="gameState === 'active'" @click="gameState = 'inactive'">
          End
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Navbar from "../components/Navbar.vue";
let table = ref(
  Array.from({ length: 9 }, () => {
    return "";
  }),
);
let player = ref("O");
let gameState = ref("inactive");
let winner = ref("");
let congrats = ref(false);
const winningCombinations = [
  [0, 1, 2], // first row
  [3, 4, 5], // second row
  [6, 7, 8], // third row
  [0, 3, 6], // first column
  [1, 4, 7], // second column
  [2, 5, 8], // third column
  [0, 4, 8], // diagonal from top-left to bottom-right
  [2, 4, 6], // diagonal from top-right to bottom-left
];

function xOrO(index: number) {
  if (gameState.value === "active" && winner.value === "") {
    if (table.value[index] === "") {
      table.value[index] = player.value;
      console.log(table.value);

      let tempDupes = [];
      let random = Math.floor(Math.random() * 9);
      if (table.value[random] === "") {
        table.value[random] = player.value === "O" ? "X" : "O";
      } else {
        for (let i = 0; i < 9; i++) {
          tempDupes.push(random);
          let random2 = Math.floor(Math.random() * 9);
          if (table.value[random2] === "") {
            table.value[random2] = player.value === "O" ? "X" : "O";
            break;
          } else {
            tempDupes.push(random2);
          }
        }
      }
    }
  }
}

function checkWinCon() {
  for (const combination of winningCombinations) {
    let [a, b, c] = combination;
    if (
      table.value[a] !== "" &&
      table.value[a] === table.value[b] &&
      table.value[a] === table.value[c]
    ) {
      winner.value = table.value[a];
      console.log("win");
      gameState.value = "inactive";
      resetGame();
      congrats.value = true;
      setTimeout(() => {
        congrats.value = false;
        winner.value = "";
      }, 1000);
      break;
    } else {
      console.log(
        table.value[a] !== "",
        table.value[a] === table.value[b],
        table.value[a] === table.value[c],
      );
    }
  }
}

function resetGame() {
  table.value = Array.from({ length: 9 }, () => {
    return "";
  });
}
function startGame() {
  gameState.value = "active";
  winner.value = "";
}
watch(
  table,
  () => {
    console.log("here");
    checkWinCon();
  },
  { deep: true },
);

watch(winner, () => {
  if (winner.value !== "") {
    console.log(`Player ${winner.value} wins!`);
  }
});
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
