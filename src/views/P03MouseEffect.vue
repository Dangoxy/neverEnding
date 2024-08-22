<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <div
      id="mouseEffect"
      class="poppins relative z-20 flex min-h-screen w-full cursor-none items-start justify-center overflow-hidden p-4 pt-[0px] text-start font-semibold"
    >
      <Navbar />
      <div
        id="circle1"
        class="absolute top-[50%] size-1 rounded-full bg-red-800"
      ></div>
      <div
        id="circle2"
        class="absolute top-[50%] size-2 rounded-full bg-red-700"
      ></div>
      <div
        id="circle3"
        class="absolute top-[50%] size-3 rounded-full bg-red-600"
      ></div>
      <div
        id="circle4"
        class="absolute top-[50%] size-4 rounded-full bg-red-500"
      ></div>
      <div
        id="circle5"
        class="absolute top-[50%] size-5 rounded-full bg-orange-600"
      ></div>
      <div
        id="circle6"
        class="absolute top-[50%] size-6 rounded-full bg-orange-500"
      ></div>
      <div
        id="circle7"
        class="absolute top-[50%] size-7 rounded-full bg-orange-400"
      ></div>
      <div
        id="circle8"
        class="absolute top-[50%] size-8 rounded-full bg-orange-300"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Navbar from "../components/Navbar.vue";

let mouseEffectDiv = ref();
setTimeout(() => {
  mouseEffectDiv.value = document.getElementById("mouseEffect");
}, 100);

let mousePosition = ref({ x: 0, y: 0 });

watch(mouseEffectDiv, () => {
  if (mouseEffectDiv) {
    mouseEffectDiv.value.onmousemove = (e: any) => {
      console.log(e.clientX, e.clientY);
      console.log(window.innerWidth, window.innerHeight);
      mousePosition.value.x = e.clientX;
      mousePosition.value.y = e.clientY;

      if (
        e.clientY + 15 > window.innerHeight ||
        e.clientY - 15 < 0 ||
        e.clientX + 15 > window.innerWidth ||
        e.clientX - 15 < 0
      ) {
        mousePosition.value.y = window.innerHeight / 2;
        mousePosition.value.x = window.innerWidth / 2;
      }
      document.getElementById("circle1")?.animate(
        {
          top: mousePosition.value.y - 4 + "px",
          left: mousePosition.value.x - 4 + "px",
        },
        { duration: 800, fill: "forwards" },
      );
      document.getElementById("circle2")?.animate(
        {
          top: mousePosition.value.y - 6 + "px",
          left: mousePosition.value.x - 6 + "px",
        },
        { duration: 700, fill: "forwards" },
      );
      document.getElementById("circle3")?.animate(
        {
          top: mousePosition.value.y - 8 + "px",
          left: mousePosition.value.x - 8 + "px",
        },
        { duration: 600, fill: "forwards" },
      );
      document.getElementById("circle4")?.animate(
        {
          top: mousePosition.value.y - 10 + "px",
          left: mousePosition.value.x - 10 + "px",
        },
        { duration: 500, fill: "forwards" },
      );
      document.getElementById("circle5")?.animate(
        {
          top: mousePosition.value.y - 12 + "px",
          left: mousePosition.value.x - 12 + "px",
        },
        { duration: 400, fill: "forwards" },
      );
      document.getElementById("circle6")?.animate(
        {
          top: mousePosition.value.y - 14 + "px",
          left: mousePosition.value.x - 14 + "px",
        },
        { duration: 300, fill: "forwards" },
      );
      document.getElementById("circle7")?.animate(
        {
          top: mousePosition.value.y - 16 + "px",
          left: mousePosition.value.x - 16 + "px",
        },
        { duration: 200, fill: "forwards" },
      );
      document.getElementById("circle8")?.animate(
        {
          top: mousePosition.value.y - 18 + "px",
          left: mousePosition.value.x - 18 + "px",
        },
        { duration: 100, fill: "forwards" },
      );
    };
  }
});
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
