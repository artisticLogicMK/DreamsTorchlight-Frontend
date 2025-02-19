<script setup>
import ForumLayout from '@/layout/ForumLayout.vue'
import CategoryComponent from '@/components/forum/CategoryComponent.vue'
import Breadcumb from '@/components/ui/Breadcumb.vue'

const items = [
  { name: 'Home', url: "/" },
  { name: 'General Discussion', url: "/category" }
]
</script>


<template>
  <ForumLayout>
    
    <Breadcumb :items="items" />

    <CategoryComponent />
    
  </ForumLayout>
</template>