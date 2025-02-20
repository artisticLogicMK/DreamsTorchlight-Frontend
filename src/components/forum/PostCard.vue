<script setup>
import { ref } from 'vue'
import ThreadPageUser from '@/components/forum/ThreadPageUser.vue'
import PostCardQuote from '@/components/forum/PostCardQuote.vue'
import PostCardActions from '@/components/forum/PostCardActions.vue'
import PostCardComments from '@/components/forum/PostCardComments.vue'
import Button from '@/components/ui/button/Button.vue'
import Pinned from '@/components/ui/Pinned.vue'

defineProps(['showSmallTime', 'showPin'])

const showComments = ref(false)
</script>

<template>
  <div class="border-b bdr p-4">
  
    <Pinned v-if="isPinned && showPin" class="mb-3" />
    
    <ThreadPageUser />
    
    <PostCardQuote v-if="false" />
    
    <div class="relative max-h-52 my-3 overflow-y-hidden">
      <p class="text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        <br><br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      
      <div v-if="false" class="absolute bottom-0 left-0 flex items-end w-full h-32 bg-gradient-to-b from-transparent to-white dark:to-slate-950">
        <Button class="text-sm bg-slate-100 dark:bg-slate-900 text-600 dark:text-slate-300 border bdr">See more</Button>
      </div>
    </div>
    
    <PostCardActions @showComments="showComments = true" />
    
    <PostCardComments v-if="showComments" />
    
  </div>
</template>

<style>
</style>