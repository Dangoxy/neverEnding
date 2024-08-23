<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[52px] text-start font-semibold"
    >
      <div
        class="relative flex aspect-square w-1/2 max-w-[600px] flex-wrap gap-[2%] bg-white"
      >
        <div
          class="flex aspect-square w-[32%] items-center justify-center bg-emerald-600 text-[16px] sm:text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px] 2xl:text-[96px]"
          @click="xOrO(Number(i))"
          v-for="(index, i) in table"
        >
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
let table = ref(
  Array.from({ length: 9 }, () => {
    return "";
  }),
);
let player = ref("O");

function xOrO(index: number) {
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
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
