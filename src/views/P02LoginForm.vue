<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins flex min-h-screen w-full items-center justify-center p-4 pt-[52px] text-start font-semibold"
    >
      <div
        class="flex aspect-[1.40/1] w-full max-w-[500px] items-center justify-center rounded-[8px]"
        :style="{
          background: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVpeWhxMTVoeDRoeHRjOHZsZWlwamFyMzEzZm5lbmF1cHh1a3RtNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xsc5A7ePY34hEzumsY/giphy.webp)`,
          backgroundPosition: '0% 0%',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <form
          class="flex w-fit flex-col items-center justify-center gap-4 rounded-[8px] border-2 border-teal-200 bg-transparent bg-opacity-25 p-8 backdrop-blur-[6px]"
        >
          <div class="relative flex h-12 w-64 flex-col rounded-[8px]">
            <h1
              class="pointer-events-none absolute z-20 flex w-fit text-[#222222] text-opacity-75 transition-all duration-200"
              :class="
                focusUsername
                  ? 'left-[17%] top-[30%] -translate-x-1/2 -translate-y-1/2 text-[12px] font-bold'
                  : 'left-[22%] top-[50%] -translate-x-1/2 -translate-y-1/2'
              "
            >
              Username
            </h1>
            <input
              @focus="focusUsername = true"
              @focusout="focusUsername = false"
              v-model="username"
              class="absolute z-10 h-full w-full rounded-[8px] border-2 border-teal-200 bg-white bg-opacity-25 px-2 pt-4 font-normal text-[#222222] outline-none"
            />
          </div>

          <div class="relative flex h-12 w-64 flex-col rounded-[8px]">
            <h1
              class="pointer-events-none absolute z-20 flex w-fit text-[#222222] text-opacity-75 transition-all duration-200"
              :class="
                focusPassword
                  ? 'left-[16%] top-[30%] -translate-x-1/2 -translate-y-1/2 text-[12px] font-bold'
                  : 'left-[22%] top-[50%] -translate-x-1/2 -translate-y-1/2'
              "
            >
              Password
            </h1>
            <input
              @focus="focusPassword = true"
              @focusout="focusPassword = false"
              v-model="password"
              type="password"
              class="absolute z-10 h-full w-full rounded-[8px] border-2 border-teal-200 bg-white bg-opacity-25 px-2 pt-4 font-normal text-[#222222] outline-none"
            />
          </div>

          <button
            class="-mb-4 mt-2 w-fit rounded-[8px] border-[2px] border-teal-950 px-6 py-2 text-[14px] font-bold text-teal-950 text-opacity-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Navbar from "../components/Navbar.vue";
let focusUsername = ref(false);
let username = ref("");
let focusPassword = ref(false);
let password = ref("");

watch(focusUsername, () => {
  console.log(focusUsername.value, username.value);
  if (focusUsername.value === false && username.value !== "") {
    focusUsername.value = true;
  }
});
watch(focusPassword, () => {
  console.log(focusPassword.value, password.value);
  if (focusPassword.value === false && password.value !== "") {
    focusPassword.value = true;
  }
});
</script>

<style>
.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
