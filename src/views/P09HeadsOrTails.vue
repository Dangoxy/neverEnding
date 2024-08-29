<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 pt-[52px] text-start font-semibold"
    >
      <div
        id="outer"
        class="relative size-56"
        :style="{
          'transform-style': 'preserve-3d',
        }"
      >
        <div
          id="inner"
          class="absolute left-0 size-56 -translate-x-1/2 -translate-y-1/2 text-[48px] text-[#161616] transition-all duration-1000"
          :style="{
            'transform-style': 'preserve-3d',
            transform: 'rotateX(120deg) rotateZ(10deg) rotateY(10deg)',
            top: '0%',
          }"
        >
          <div
            class="absolute flex size-56 items-center justify-center rounded-full border-2 border-violet-400 border-opacity-25 bg-yellow-300"
            :style="{
              transform:
                'rotateX(80deg) rotateY(180deg) rotateZ(180deg) translateZ(0px)',
            }"
          >
            Heads
          </div>

          <Filler />

          <div
            class="absolute flex size-56 rotate-0 items-center justify-center rounded-full border-2 border-violet-400 border-opacity-25 bg-yellow-300"
            :style="{
              transform: 'rotateX(80deg) translateZ(10px)',
            }"
          >
            Tails
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center gap-2">
        <div class="flex gap-4 p-2">
          <button
            :class="
              speed === 'slow'
                ? 'rounded-[8px] border-2 border-sky-400 bg-sky-400 px-4 py-1 text-[#161616]'
                : 'rounded-[8px] border-2 border-sky-400 px-4 py-1'
            "
            @click="speed = 'slow'"
          >
            Slow
          </button>
          <button
            :class="
              speed === 'medium'
                ? 'rounded-[8px] border-2 border-sky-400 bg-sky-400 px-4 py-1 text-[#161616]'
                : 'rounded-[8px] border-2 border-sky-400 px-4 py-1'
            "
            @click="speed = 'medium'"
          >
            Medium
          </button>
          <button
            :class="
              speed === 'fast'
                ? 'rounded-[8px] border-2 border-sky-400 bg-sky-400 px-4 py-1 text-[#161616]'
                : 'rounded-[8px] border-2 border-sky-400 px-4 py-1'
            "
            @click="speed = 'fast'"
          >
            Fast
          </button>
        </div>
        <button
          class="rounded-[8px] border-2 border-green-400 bg-green-400 px-8 py-1 text-[20px] font-bold text-[#161616]"
          @click="flip"
        >
          Flip
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Filler from "../components/P09/Filler.vue";

let speed = ref("medium");

function flip() {
  let multiplyer =
    speed.value === "slow" ? 4 : speed.value === "medium" ? 10 : 16;
  let angle = Math.floor(
    Math.random() * ((multiplyer + 2) * 180 - multiplyer * 180 + 1) +
      multiplyer * 180,
  );
  console.log(angle);

  angle =
    angle % 180 < 100 || angle % 180 < 160
      ? Math.floor(angle / 180) * 180 + 130
      : angle;
  console.log(angle % 180);
  document.getElementById("inner")?.animate(
    [
      {
        transform: `rotateX(120deg) rotateZ(10deg) rotateY(10deg)`,
        top: "0%",
      },
      {
        top: "-50%",
        transform: `rotateX(${angle / 2}deg) rotateZ(20deg) rotateY(20deg)`,
        offset: 0.5,
      },
      {
        transform: `rotateX(${angle}deg) rotateZ(10deg) rotateY(10deg)`,
        top: "0%",
      },
    ],
    {
      duration:
        speed.value === "slow" ? 5000 : speed.value === "medium" ? 4000 : 3000,
      easing: "ease",
      fill: "forwards",
    },
  );
}
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
