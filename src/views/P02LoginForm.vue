<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <div
      class="poppins mt-[52px] flex min-h-screen w-full items-center justify-center p-4 text-start font-semibold"
    >
      <div
        class="rounded-[8px]"
        :style="{
          background: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVpeWhxMTVoeDRoeHRjOHZsZWlwamFyMzEzZm5lbmF1cHh1a3RtNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xsc5A7ePY34hEzumsY/giphy.webp)`,
          backgroundPosition: '0% 0%',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <form
          class="flex w-fit flex-col items-center justify-center gap-4 rounded-[8px] bg-transparent bg-opacity-25 p-12 backdrop-blur-[6px]"
        >
          <div class="relative flex h-12 w-64 flex-col rounded-[8px]">
            <h1
              class="z-20 flex h-full w-full items-center justify-start p-4 text-[#222222] text-opacity-75"
            >
              Username
            </h1>
            <input
              class="absolute z-10 h-full w-full rounded-[8px] border-2 border-teal-200 bg-white bg-opacity-25"
            />
          </div>

          <div class="relative flex h-12 w-64 flex-col rounded-[8px]">
            <h1
              class="z-20 flex h-full w-full items-center justify-start p-4 text-[#222222] text-opacity-75"
            >
              Password
            </h1>
            <input
              class="absolute z-10 h-full w-full rounded-[8px] border-2 border-teal-200 bg-white bg-opacity-25"
            />
          </div>

          <button
            class="w-fit rounded-[8px] border-2 border-[#222222] bg-[#222222] bg-opacity-25 px-6 py-2 text-[14px] text-teal-100 text-opacity-100"
          >
            Login
          </button>
        </form>
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
