<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full flex-col items-center justify-center gap-2 p-4 pt-[68px] text-start text-[24px] font-semibold text-[#161616]"
      :style="{
        height: `${bannerCount * 88}px`,
        transformStyle: 'preserve-3d',
        transform: ' perspective(10000000px)',
      }"
    >
      <div class="absolute left-1/2 top-20 -translate-x-1/2">
        <div class="flex w-full items-center justify-center">
          <div
            class="flex h-16 min-w-96 items-center justify-center rounded bg-[#c69874]"
          >
            Banner Holder
          </div>
        </div>
        <div
          v-for="i in bannerCount"
          @click="i === 9 ? reload() : ''"
          :id="`banner${i}`"
          class="relative flex h-16 w-96 flex-col items-center justify-center overflow-visible rounded bg-gradient-to-tr from-violet-300 from-[40%] to-cyan-300"
          :style="{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-90deg) perspective(100px)',
          }"
        >
          <div
            :id="`string${i}`"
            class="absolute top-[-16px] z-20 h-4 w-0.5 bg-white opacity-0"
          ></div>
          <h1 v-if="i !== 9">Banner {{ i }}</h1>
          <h1 v-else>Restart</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";

let bannerCount = ref(9);
let router = useRouter();
function reload() {
  window.location.reload();
}
setTimeout(() => {
  for (let i = 1; i < bannerCount.value + 1; i++) {
    setTimeout(() => {
      document.getElementById(`banner${i}`)?.animate(
        [
          {
            transform: "rotateX(180deg) rotateZ(0deg) perspective(100px)",
            marginTop: "-64px",
            offset: 0,
          },
          {
            transform: "rotateX(0deg) rotateZ(0deg) perspective(100px)",
            marginTop: "16px",
            offset: 0.5,
          },
          {
            transform: "rotateX(8deg) rotateZ(0.5deg) perspective(100px)",
            marginTop: "16px",
            offset: 0.6,
          },
          {
            transform: "rotateX(-8deg) rotateZ(-0.5deg) perspective(100px)",
            marginTop: "16px",
            offset: 0.7,
          },
          {
            transform: "rotateX(8deg) rotateZ(0.5deg) perspective(100px)",
            marginTop: "16px",
            offset: 0.8,
          },
          {
            transform: "rotateX(-8deg) rotateZ(-0.5deg) perspective(100px)",
            marginTop: "16px",
            offset: 0.9,
          },
          {
            transform: "rotateX(0deg) rotateZ(0deg) perspective(100px)",
            marginTop: "16px",
            offset: 1,
          },
        ],
        { duration: 1600, fill: "forwards" },
      );
      document.getElementById(`string${i}`)?.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 0,
            offset: 0.6,
          },
          {
            opacity: 1,
          },
        ],
        { duration: 1600, fill: "forwards" },
      );
    }, i * 800);
  }
}, 100);
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
