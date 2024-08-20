<template>
  <div class="flex h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div class="flex h-full w-full flex-col items-center p-4">
      <div>
        <h1 class="text-[48px] font-medium">Whac-a-mole !</h1>
        <div class="flex justify-between text-[20px]">
          <h1>Timer {{ timer }}</h1>
          <h1>Score {{ score }}</h1>
        </div>
      </div>
      <div
        class="flex h-full w-full flex-col items-center justify-center gap-2"
      >
        <div
          class="flex aspect-square w-1/2 max-w-[600px] flex-wrap items-center justify-around gap-2"
        >
          <div
            v-for="(mole, index) in moles"
            class="relative aspect-square w-[30%] p-2"
            :key="index"
            @click="gameState === 'inactive' ? tapMoleInactive(index) : ''"
          >
            <div
              class="h-full w-full rounded-full bg-white"
              :style="{
                boxShadow: `0px 0px 4px 2px rgba(255,255,255,0.5), 
                                  inset 0px 0px 24px 8px rgba(0,0,0,0.25)`,
                transform: 'rotateX(60deg)',
              }"
            ></div>
            <div
              class="absolute -left-1/2 -top-[50%] flex h-[100%] w-full translate-x-1/2 items-center justify-center overflow-hidden p-2"
            >
              <div
                class="z-50 h-[100%] w-full translate-y-0 transition-all duration-1000"
                :class="mole['up'] ? 'mt-[50%]' : 'mt-[250%]'"
                @click="
                  mole['clickable'] && gameState === 'active'
                    ? tapMole(index)
                    : ''
                "
                :style="{
                  background: `url(${'../../public/mole3.png'})`,
                  backgroundPosition: '0% 0%',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                }"
              ></div>
            </div>
            <!-- <h1>{{ mole }}</h1> -->
          </div>
        </div>
        <!-- <button @click="resetMolesUp" class="m-4">reset</button> -->
        <div class="flex items-center justify-center gap-2">
          <button
            @click="startGame"
            v-if="gameState === 'inactive'"
            class="poppins rounded-[8px] border-2 border-[#f0f0f0] px-4 py-1 text-[20px] font-semibold"
          >
            Start
          </button>
          <button
            @click="restartGame"
            v-if="gameState === 'active'"
            class="poppins rounded-[8px] border-2 border-[#f0f0f0] px-4 py-1 text-[20px] font-semibold"
          >
            Restart
          </button>
          <button
            @click="endGame"
            v-if="gameState === 'active'"
            class="poppins rounded-[8px] border-2 border-[#f0f0f0] px-4 py-1 text-[20px] font-semibold"
          >
            End game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
const timer = ref(30);
const score = ref(0);
let moles = ref(Array(9).fill({ up: true, timeout: null, clickable: true }));
let interval = ref();
let interval2 = ref();
let timeout = ref();
let gameState = ref("inactive");

function tapMole(index: any) {
  console.log(index);

  let temp = [...moles.value];
  temp[index] = { up: false, timeout: null, clickable: false };
  moles.value = temp;
  if (gameState.value === "active") {
    score.value++;
  }
}
function tapMoleInactive(index: any) {
  console.log(index);

  let temp = [...moles.value];
  temp[index] = { up: !temp[index].up, timeout: null, clickable: true };
  moles.value = temp;
}
function resetMolesUp() {
  moles.value = Array(9).fill({ up: true, timeout: null, clickable: true });
}
function startGame() {
  moles.value = Array(9).fill({ up: false, timeout: null, clickable: false });

  gameState.value = "active";
  interval.value = setInterval(() => {
    if (timer.value > 0) {
      timer.value -= 1;
    } else {
      clearInterval(interval.value);
      endGame();
    }
  }, 1000);

  interval2.value = setInterval(() => {
    if (timer.value > 0) {
      let randomNumber = Math.floor(Math.random() * 8);
      console.log(randomNumber);

      let temp = [...moles.value];
      temp[randomNumber] = { up: true, timeout: null, clickable: true };
      moles.value = temp;
      timeout.value = setTimeout(() => {
        let temp = [...moles.value];
        temp[randomNumber] = { up: false, timeout: null, clickable: false };
        moles.value = temp;
      }, 1000);
    } else {
      clearInterval(interval2.value);
    }
  }, 1000);
}
function restartGame() {
  resetMolesUp();
  clearInterval(interval.value);
  clearInterval(interval2.value);

  clearTimeout(timeout.value);
  setTimeout(() => {
    startGame();
    timer.value = 30;
    score.value = 0;
  }, 1500);
}
function endGame() {
  clearInterval(interval.value);
  clearInterval(interval2.value);
  clearTimeout(timeout.value);
  timer.value = 30;
  score.value = 0;
  gameState.value = "inactive";
  resetMolesUp();
}
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
