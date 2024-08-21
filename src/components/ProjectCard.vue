<template>
  <router-link
    :to="props.toPath"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="rounded-[8px]"
  >
    <!-- <h1>{{ props.title }}</h1> -->
    <div
      :class="`relative box-border size-64 rounded-[8px] border-4 border-transparent`"
      :style="{
        background: `url(${hover ? props.pathToGif : props.pathToImg})`,
        backgroundSize: '100% 100%',
      }"
    >
      <h1
        class="poppins absolute bottom-0 w-full bg-emerald-100 bg-opacity-100 p-4 text-center text-[20px] font-bold text-[#222222] backdrop-blur-md"
      >
        {{ props.title }}
      </h1>
      <h1
        class="poppins absolute left-0 top-0 flex size-12 items-center justify-center rounded-br-[4px] bg-emerald-100 bg-opacity-100 text-center text-[20px] font-bold text-[#222222] backdrop-blur-md"
      >
        {{ props.projectNumber }}
      </h1>
      <div
        class="absolute -left-1 -top-1 size-64 rounded-[8px] border-4 border-emerald-100"
      ></div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps([
  "projectNumber",
  "title",
  "pathToGif",
  "pathToImg",
  "toPath",
]);

let hover = ref(false);

console.log(props);
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
