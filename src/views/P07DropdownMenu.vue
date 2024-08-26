<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[52px] text-start font-semibold"
    >
      <div class="flex h-10 w-fit items-start justify-center overflow-visible">
        <!-- max total hight is calculated by multiplaying the options 
         array length by (40px + padding/margin and gap) could differ depending on the size of 
         the select box -->
        <div
          class="cursor-pointer overflow-hidden rounded-[4px] border-2 bg-gray-900 transition-all duration-500"
          :class="openForSelect ? `h-[296px]` : 'h-[42px]'"
        >
          <div
            class="flex items-center justify-center gap-2 p-2"
            @click="openForSelect = !openForSelect"
          >
            <img
              class="aspect-auto w-[24px]"
              :src="selectedOptionForSelect.img"
            />
            <h1>{{ selectedOptionForSelect.country }}</h1>
            <img
              class="ml-2 aspect-auto w-4"
              :class="openForSelect ? 'rotate-180' : ''"
              src="../../public/DropdownMenu/arrow_down.png"
            />
          </div>

          <div class="flex flex-col">
            <div
              class="flex w-full cursor-pointer items-center justify-between border-t-2 border-[rgba(255,255,255,0.25)] p-2 hover:bg-[rgba(255,255,255,0.10)]"
              v-for="option in optionsForSelect"
              @click="
                selectedOptionForSelect = option;
                openForSelect = false;
              "
            >
              <div class="flex w-full items-center justify-start gap-2">
                <img class="aspect-auto w-[24px]" :src="option.img" />
                <h1>{{ option.country }}</h1>
              </div>
              <img
                v-if="option.country === selectedOptionForSelect.country"
                class="flex aspect-square w-4 items-center justify-center"
                src="../../public/DropdownMenu/star.png"
              />
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

let optionsForSelect = [
  { country: "English", img: "../../public/DropdownMenu/us_flag.png" },
  { country: "Arabic", img: "../../public/DropdownMenu/sa_flag.png" },
  { country: "French", img: "../../public/DropdownMenu/us_flag.png" },
  { country: "German", img: "../../public/DropdownMenu/sa_flag.png" },
  { country: "Polishhhhhh", img: "../../public/DropdownMenu/us_flag.png" },
  { country: "Italian", img: "../../public/DropdownMenu/sa_flag.png" },
];

let selectedOptionForSelect = ref(optionsForSelect[0]);
let openForSelect = ref(false);
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
