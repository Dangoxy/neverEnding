<template>
  <div className="flex h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-2 p-2"
    >
      <router-link
        className="w-fit rounded-[8px] border-2 border-[#f0f0f0] px-4 py-2 text-[16px] font-medium text-[#f0f0f0]"
        to="/p1"
      >
        Project 1
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<style></style>
