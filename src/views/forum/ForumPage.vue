<script setup>
import ForumPageLayout from '@/layout/ForumPageLayout.vue'
import ForumComponent from '@/components/forum/ForumComponent.vue'
import ThreadCard from '@/components/forum/ThreadCard.vue'
import ForumPageFilter from '@/components/forum/ForumPageFilter.vue'
</script>


<template>
  <ForumPageLayout>

    <ForumComponent />
    
    <ForumPageFilter />
    
    <div>
      <ThreadCard  :showSmallTime="true" />
    </div>

  </ForumPageLayout>
</template>