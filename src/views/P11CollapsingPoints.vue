<template>
  <div
    class="flex h-full min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]"
  >
    <Navbar />
    <div
      class="poppins flex h-full min-h-screen w-full flex-col items-center justify-start gap-4 p-4 pt-[68px] text-start font-semibold"
    >
      <div v-for="(i, index) in lorem" class="w-full">
        <div
          class="flex w-40 cursor-pointer items-center justify-between"
          @click="
            trigsForLorem[index].open = !trigsForLorem[index].open;
            getHeight(index, false);
          "
        >
          <h1 class="poppins w-fit cursor-pointer text-[32px] font-bold italic">
            - {{ trigsForLorem[index].title }}
          </h1>
          <div class="relative size-4">
            <div
              class="absolute left-1/2 top-1/2 h-4 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0f0f0] transition-all duration-500"
              :class="trigsForLorem[index].open ? `rotate-[270deg]` : ''"
            ></div>
            <div
              class="absolute left-1/2 top-1/2 h-1 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0f0f0] transition-all duration-500"
              :class="trigsForLorem[index].open ? `rotate-[180deg]` : ''"
            ></div>
          </div>
        </div>
        <div
          class="relative h-fit overflow-hidden text-[20px] text-[rgba(240,240,240,0.75)]"
        >
          <p
            :class="trigsForLorem[index].open ? 'h-full' : 'h-0'"
            :id="'par' + index"
            class="z-10 overflow-hidden opacity-100 transition-all duration-500"
          >
            {{ i + "asd" }}
          </p>
          <p
            :id="'parinvis' + index"
            class="absolute left-0 top-0 -z-10 overflow-hidden opacity-0 transition-all duration-500"
          >
            {{ i }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { lorem } from "../projectsData";

let trigsForLorem = ref([
  { title: "Title 1", open: true },
  { title: "Title 2", open: false },
  { title: "Title 3", open: false },
  { title: "Title 4", open: false },
  { title: "Title 5", open: false },
  { title: "Title 6", open: false },
]);
function getHeight(index: any, resize: boolean) {
  let clientHeight = document.getElementById("parinvis" + index)?.offsetHeight;
  console.log("parinvis" + index);

  document.getElementById("par" + index)?.animate(
    [
      {
        height:
          trigsForLorem.value[index].open && resize
            ? clientHeight + "px"
            : trigsForLorem.value[index].open
              ? 0
              : clientHeight + "px",
      },
      { height: trigsForLorem.value[index].open ? clientHeight + "px" : 0 },
    ],
    { duration: 500, fill: "forwards", easing: "ease" },
  );
  console.log(clientHeight);
}

window.onresize = (e) => {
  console.log(e.target);
  for (let i = 0; i < trigsForLorem.value.length; i++) {
    if (trigsForLorem.value[i].open) {
      getHeight(i, true);
    }
  }
};
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
