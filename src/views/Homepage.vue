<template>
  <div
    className="flex min-h-screen w-full flex-col bg-[#161616] text-[#f0f0f0]"
  >
    <Navbar />
    <div
      className="flex h-full  pt-[62px] min-h-screen w-full flex-row items-center justify-center gap-2 p-2"
    >
      <div class="flex flex-row flex-wrap items-center justify-center gap-2">
        <ProjectCard
          projectNumber="01"
          title="Whac-a-mole"
          pathToGif="../../public/Whac-a-mole.gif"
          pathToImg="../../public/Whac-a-mole.png"
          toPath="/01-Whac-a-mole"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<style></style>
