<script setup>
import { PhClock } from '@phosphor-icons/vue'
import Userpic from '@/components/user-items/Userpic.vue'
import Username from '@/components/user-items/Username.vue'
import Userlevel from '@/components/user-items/Userlevel.vue'
</script>

<template>
    
  <div class="flex items-center">
    <Userpic class="mr-3" />
    
    <div>
      <Username class="mb-2" />
      <div class="post-time flex items-center">
        <Userlevel />
        <span class="mx-2">•</span>
        <span class="flex items-center">
          <PhClock class="mr-1" /> 2 Hours
        </span>
        <span class="mx-2">•</span>
        <span>Edited</span>
      </div>
    </div>
  </div>

</template>

<style>
.post-time span {
  @apply text-sm text-400
}
</style>