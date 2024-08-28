<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[68px] text-start font-semibold"
    >
      <div
        class="flex items-center justify-center gap-2 rounded-[8px] bg-cyan-200 p-4 py-0 text-[48px] text-[#161616]"
      >
        <div class="relative size-16 overflow-hidden">
          <h1
            id="hours"
            class="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%]"
          >
            {{ String(hours).length > 1 ? hours : "0" + hours }}
          </h1>
        </div>
        <h1>:</h1>
        <div class="relative size-16 overflow-hidden">
          <h1
            id="minutes"
            class="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%]"
          >
            {{ String(minutes).length > 1 ? minutes : "0" + minutes }}
          </h1>
        </div>
        <h1>:</h1>
        <div class="relative size-16 overflow-hidden">
          <h1
            id="seconds"
            class="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%]"
          >
            {{ String(seconds).length > 1 ? seconds : "0" + seconds }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Navbar from "../components/Navbar.vue";

let tempDate = new Date(Date.now());
let date = ref(tempDate);
let hours = ref(tempDate.getHours());
let minutes = ref(tempDate.getMinutes());
let seconds = ref(tempDate.getSeconds());
let milliseconds = ref(tempDate.getMilliseconds());
setInterval(() => {
  /* console.log(date.value); */
  date.value = new Date(Date.now());
  hours.value = date.value.getHours();
  minutes.value = date.value.getMinutes();
  seconds.value = date.value.getSeconds();
  milliseconds.value = date.value.getMilliseconds();
}, 1);

watch(seconds, (newSec, oldSec) => {
  if (oldSec !== seconds.value) {
    console.log(newSec);

    document
      .getElementById("seconds")
      ?.animate(
        { top: "150%" },
        { duration: 50, easing: "ease", fill: "forwards" },
      );
    setTimeout(() => {
      document
        .getElementById("seconds")
        ?.animate([{ top: "-150%" }, { top: "50%" }], {
          duration: 250,
          easing: "ease",
          fill: "forwards",
        });
    }, 250);
  }
});

watch(minutes, (newMin, oldMin) => {
  if (oldMin !== seconds.value) {
    console.log(newMin);

    document
      .getElementById("minutes")
      ?.animate(
        { top: "150%" },
        { duration: 50, easing: "ease", fill: "forwards" },
      );
    setTimeout(() => {
      document
        .getElementById("minutes")
        ?.animate([{ top: "-150%" }, { top: "50%" }], {
          duration: 250,
          easing: "ease",
          fill: "forwards",
        });
    }, 250);
  }
});

watch(hours, (newH, oldH) => {
  if (oldH !== seconds.value) {
    console.log(newH);

    document
      .getElementById("hours")
      ?.animate(
        { top: "150%" },
        { duration: 50, easing: "ease", fill: "forwards" },
      );
    setTimeout(() => {
      document
        .getElementById("hours")
        ?.animate([{ top: "-150%" }, { top: "50%" }], {
          duration: 250,
          easing: "ease",
          fill: "forwards",
        });
    }, 250);
  }
});
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
