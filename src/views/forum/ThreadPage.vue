<script setup>
import ForumPageLayout from '@/layout/ForumPageLayout.vue'
import ThreadCard from '@/components/forum/ThreadCard.vue'
import PostCard from '@/components/forum/PostCard.vue'
import ForumPageFilter from '@/components/forum/ForumPageFilter.vue'
import ThreadPageUser from '@/components/forum/ThreadPageUser.vue'
</script>


<template>
  <ForumPageLayout>
    
    <div class="p-4 pb-0 -mb-1">
      <ThreadPageUser />
    </div>
    
    <ThreadCard :showSmallTime="false" />
    
   <div class="border-b bdr text-sm text-600 whitespace-pre-line p-4 pt-0 -mt-1">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    
    <ForumPageFilter />
    
    <div>
      <PostCard v-for="n in 3" />
    </div>

  </ForumPageLayout>
</template>