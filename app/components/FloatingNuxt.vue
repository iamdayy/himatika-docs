<template>
  <div class="flex-1 flex items-center justify-center">
    <NuxtImg
    class="h-42 floating-logo"
    :src="img"
    :alt="alt"
    />
    <UIcon name=""></UIcon>
  </div>
</template>

<style>
.floating-logo {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover .floating-logo {
  transform: translateY(-20px);
}
</style>

<script setup lang="ts">

defineProps({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  }
})
</script>