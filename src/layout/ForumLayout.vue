<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/forum/Header.vue'
import LeftColumn from '@/components/forum/LeftColumn.vue'
import RightColumn from '@/components/forum/RightColumn.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    
    <Header />
  
    <main class="grow flex max-w-[1440px] mx-auto overflow-y-hidden">
      
      <LeftColumn />
      
      <div class="shrink-0 grow relative w-[60%] bg-flat overflow-y-auto border-r border-l bdr">
        <slot />
      </div>
      
      <RightColumn />
      
    </main>
    
  </div>
</template>

<style>
.column-boxes {
  @apply border rounded-2xl
}
</style>