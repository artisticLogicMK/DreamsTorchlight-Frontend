<script setup>
import ForumLayout from '@/layout/ForumLayout.vue'
import ForumComponent from '@/components/forum/ForumComponent.vue'
</script>


<template>
  <ForumLayout>
  
    <slot name="breadcumb"></slot>
    
    <slot name="announcement"></slot>
    
    <slot />
    
  </ForumLayout>
</template>