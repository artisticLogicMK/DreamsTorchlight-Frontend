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
      <ThreadCard v-for="n in 5" :showSmallTime="true" />
    </div>

  </ForumPageLayout>
</template>