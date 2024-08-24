<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[52px] text-start font-semibold"
    >
      <div class="flex h-[512px] w-[256px] flex-col">
        <div class="h-[48px] w-full border-b-2 bg-white">
          <span class="material-symbols-outlined px-2 text-[48px] text-black">
            menu
          </span>
        </div>
        <div
          class="flex h-full w-[10%] bg-white transition-all duration-1000"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
