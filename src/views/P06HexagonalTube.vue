<template>
  <div
    class="not-selectable flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]"
  >
    <Navbar />
    <div
      class="absolute left-1 top-1 mt-[50px] bg-[#222222] text-[16px] font-medium text-[#f0f0f0]"
    >
      <h1>mouseDownY: {{ mouseDownY }}px</h1>
      <h1>mouseDownX: {{ mouseDownX }}px</h1>
      <h1>prevDeltaX: {{ prevDeltaX }}px</h1>
      <h1>prevDeltaY: {{ prevDeltaY }}px</h1>
      <h1>deltaX: {{ deltaX }}deg</h1>
      <h1>deltaY: {{ deltaY }}deg</h1>
    </div>
    <div
      class="absolute bottom-1 right-1 mt-[50px] flex flex-col bg-[#222222] text-[16px] font-medium text-[#f0f0f0]"
    >
      <button @click="locky = !locky">Lock x {{ locky }}</button>
      <button @click="lockx = !lockx">Lock y {{ lockx }}</button>
      <button @click="resetX">reset x</button>
      <button @click="resetY">reset y</button>
      <button @click="open = !open">{{ open ? "close" : "open" }}</button>
    </div>
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[52px] text-start font-semibold"
    >
      <div>
        <div
          id="outer"
          class="relative h-32 w-96"
          :style="{
            'transform-style': 'preserve-3d',
            transform: `rotateX(${-deltaY}deg) rotateY(${deltaX}deg`,
          }"
          @dblclick="open = !open"
        >
          <div
            id="inner"
            class="absolute left-1/2 top-1/2 h-32 w-96 -translate-x-1/2 -translate-y-1/2 text-[48px] text-[#222222] transition-all duration-1000"
            :style="{
              'transform-style': 'preserve-3d',
            }"
          >
            <div
              :style="{
                transform: `${open ? 'translateZ(196px)' : 'translateZ(152px)'}`,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-green-400 opacity-95 transition-all duration-1000"
            >
              Side 1
            </div>
            <div
              :style="{
                transform: `rotateX(45deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'} `,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-red-400 opacity-95 transition-all duration-1000"
            >
              Side 8
            </div>
            <div
              :style="{
                transform: `rotateX(-45deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'} `,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-violet-400 opacity-95 transition-all duration-1000"
            >
              Side 2
            </div>
            <div
              :style="{
                transform: `rotateX(90deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'} `,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-blue-400 opacity-95 transition-all duration-1000"
            >
              Side 7
            </div>
            <div
              :style="{
                transform: `rotateX(-90deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'} `,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-orange-400 opacity-95 transition-all duration-1000"
            >
              Side 3
            </div>
            <div
              :style="{
                transform: `rotateX(135deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'} `,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-yellow-400 opacity-95 transition-all duration-1000"
            >
              Side 6
            </div>
            <div
              :style="{
                transform: `rotateX(-135deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'} `,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-purple-400 opacity-95 transition-all duration-1000"
            >
              Side 4
            </div>
            <div
              :style="{
                transform: `rotateX(180deg) ${open ? 'translateZ(196px)' : 'translateZ(152px)'}`,
              }"
              class="absolute flex h-32 w-96 items-center justify-center border-2 border-gray-200 border-opacity-50 bg-cyan-400 opacity-95 transition-all duration-1000"
            >
              Side 5
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";

let mouseDownY = ref(0);
let mouseDownX = ref(0);

let prevDeltaX = ref(0);
let prevDeltaY = ref(-8);

let deltaX = ref(0);
let deltaY = ref(-8);

let lockx = ref(false);
let locky = ref(true);

let open = ref(false);
window.onmousedown = (e) => {
  mouseDownX.value = e.clientX;
  mouseDownY.value = e.clientY;
};
window.onmousemove = (e) => {
  if (mouseDownX.value !== 0 && mouseDownY.value !== 0) {
    deltaX.value = locky.value
      ? prevDeltaX.value
      : prevDeltaX.value + (e.clientX - mouseDownX.value);
    deltaY.value = lockx.value
      ? prevDeltaY.value
      : prevDeltaY.value + (e.clientY - mouseDownY.value);

    document.getElementById("outer")?.animate(
      {
        transform: `rotateX(${-deltaY.value}deg) rotateY(${deltaX.value}deg)`,
      },
      {
        duration: 2000,
        easing: "ease",
        fill: "forwards",
      },
    );
  }
};

window.onmouseup = () => {
  mouseDownX.value = 0;
  mouseDownY.value = 0;

  prevDeltaX.value = deltaX.value;
  prevDeltaY.value = deltaY.value;
};

function resetX() {
  deltaX.value = 0;
  prevDeltaX.value = 0;
  document.getElementById("outer")?.animate(
    {
      transform: `rotateX(${-deltaY.value}deg) rotateY(${deltaX.value}deg)`,
    },
    {
      duration: 2000,
      easing: "ease",
      fill: "forwards",
    },
  );
}
function resetY() {
  deltaY.value = 0;
  prevDeltaY.value = 0;
  document.getElementById("outer")?.animate(
    {
      transform: `rotateX(${-deltaY.value}deg) rotateY(${deltaX.value}deg)`,
    },
    {
      duration: 2000,
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
.not-selectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
