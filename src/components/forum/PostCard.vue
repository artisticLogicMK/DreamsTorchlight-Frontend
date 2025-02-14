<script setup>
import ThreadPageUser from '@/components/forum/ThreadPageUser.vue'
import PostCardActions from '@/components/forum/PostCardActions.vue'
import PostCardComments from '@/components/forum/PostCardComments.vue'
</script>

<template>
  <div class="border-b bdr p-4">
    
    <ThreadPageUser />
    
    <div class="my-3 overflow-y-hidden">
      <p class="text-sm text-600 whitespace-pre-line">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        <br><br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    
    <PostCardActions />
    
    <PostCardComments />
    
  </div>
</template>

<style>
.post-time span {
  @apply text-sm text-400
}
</style>