<script setup>
import { PhClock } from '@phosphor-icons/vue'
import Userpic from '@/components/user-items/Userpic.vue'
import Username from '@/components/user-items/Username.vue'
import Userlevel from '@/components/user-items/Userlevel.vue'
</script>

<template>
    
  <div class="flex items-center mb-2">
    <Userpic class="mr-3" />
    
    <div>
      <Username class="mb-2" />
      <div class="flex items-center">
        <Userlevel />
      </div>
    </div>
  </div>
  
  <div class="post-time flex items-center">
    <span>
      2 March, 2025, 09:58 pm | 2h
    </span>
    <span class="mx-2">•</span>
    <span>Edited</span>
  </div>

</template>

<style>
.post-time span {
  @apply text-sm text-400
}
</style>