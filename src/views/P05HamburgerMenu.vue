<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[68px] text-start font-semibold"
    >
      <div
        class="duration-1000s h-[512px] w-[256px] text-[#222222] transition-all"
      >
        <div
          class="flex h-[48px] w-[256px] items-center justify-start border-b-2 bg-white px-2"
        >
          <div class="relative size-8 cursor-pointer" @click="extend = !extend">
            <div
              :class="extend ? 'top-[50%] -rotate-45 opacity-100' : 'top-[25%]'"
              class="absolute -left-1/2 h-[4px] w-full -translate-y-1/2 translate-x-1/2 rounded-full bg-[#222222] transition-all duration-500"
            ></div>
            <div
              :class="
                extend ? 'opacity-0 duration-200' : 'opacity-100 duration-500'
              "
              class="absolute -left-1/2 top-[50%] h-[4px] w-full -translate-y-1/2 translate-x-1/2 rounded-full bg-[#222222] transition-all"
            ></div>
            <div
              :class="extend ? 'top-[50%] rotate-45 opacity-100' : 'top-[75%]'"
              class="absolute -left-1/2 h-[4px] w-full -translate-y-1/2 translate-x-1/2 rounded-full bg-[#222222] transition-all duration-500"
            ></div>
          </div>
        </div>

        <div
          :class="extend ? 'w-[256px]' : 'w-[0px]'"
          class="h-fit overflow-hidden bg-white transition-all duration-1000"
        >
          <div
            :class="extend ? 'opacity-100' : 'opacity-0'"
            class="flex h-fit flex-col gap-2 p-2 transition-all duration-1000"
          >
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> Home </span>
              <h1 class="h-[20px]">home</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> info </span>
              <h1 class="h-[20px]">Info</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined">
                local_fire_department
              </span>
              <h1 class="h-[20px]">Trending</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> history </span>
              <h1 class="h-[20px]">History</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> settings </span>
              <h1 class="h-[20px]">Settings</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> analytics </span>
              <h1 class="h-[20px]">Analytics</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> lightbulb </span>
              <h1 class="h-[20px]">Lightbulb</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> import_contacts </span>
              <h1 class="h-[20px]">Contacts</h1>
            </div>
            <div
              class="flex min-w-[240px] cursor-pointer items-center justify-start gap-2 rounded-[4px] border-2 border-[#222222] p-2 transition-all duration-200 hover:bg-[#222222] hover:text-[#f1f1f1]"
            >
              <span class="material-symbols-outlined"> bar_chart_4_bars </span>
              <h1 class="h-[20px]">Bar charts</h1>
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
let extend = ref(false);
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
