<script setup>
import { PhStar } from '@phosphor-icons/vue'
</script>

<template>
  <p class="flex">
    <PhStar v-for="n in 5" class="text-sm text-yellow-500 dark:text-yellow-400 mr-0.5" weight="fill" />
  </p>
</template>