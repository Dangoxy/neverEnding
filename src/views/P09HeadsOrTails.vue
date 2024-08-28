<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[52px] text-start font-semibold"
    >
      Heads or Tails
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
