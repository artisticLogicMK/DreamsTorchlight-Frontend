<script setup>
import ForumPageLayout from '@/layout/ForumPageLayout.vue'
import ForumComponent from '@/components/forum/ForumComponent.vue'
import ThreadCard from '@/components/forum/ThreadCard.vue'
import ForumPageFilter from '@/components/forum/ForumPageFilter.vue'
import Breadcumb from '@/components/ui/Breadcumb.vue'

const items = [
  { name: 'Home', url: "/" },
  { name: 'General Discussion', url: "/category" },
  { name: 'Dreams Interpretation', url: "/forum" },
]
</script>


<template>
  <ForumPageLayout>
  
    <template #breadcumb>
      <Breadcumb :items="items" />
    </template>

    <ForumComponent />
    
    <ForumPageFilter page="forum" />
    
    <div>
      <ThreadCard  :showSmallTime="true" />
    </div>

  </ForumPageLayout>
</template>