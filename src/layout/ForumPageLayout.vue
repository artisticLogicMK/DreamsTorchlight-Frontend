<script setup>
import ForumLayout from '@/layout/ForumLayout.vue'
import ForumComponent from '@/components/forum/ForumComponent.vue'
import ForumAnnouncement from '@/components/forum/ForumAnnouncement.vue'
</script>


<template>
  <ForumLayout>
  
    <slot name="breadcumb"></slot>

    <ForumAnnouncement />
    
    <slot />
    
  </ForumLayout>
</template>