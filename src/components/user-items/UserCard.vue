<script setup>
import Userpic from '@/components/user-items/Userpic.vue'
import Username from '@/components/user-items/Username.vue'
import Userlevel from '@/components/user-items/Userlevel.vue'
</script>

<template>
  
  <div class="usercard flex items-center moderator">
    <Userpic class="mr-3" />
    
    <div>
      <Username class="mb-2" />
      <Userlevel />
    </div>
  </div>
  
</template>