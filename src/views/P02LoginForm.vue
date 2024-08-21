<template>
  <div class="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]">
    <Navbar />
    <form class="mt-[52px]">
      <div>
        <label>l1</label>
        <input />
      </div>
      <div>
        <label>l2</label>
        <input />
      </div>
      <button>Login</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<style></style>
