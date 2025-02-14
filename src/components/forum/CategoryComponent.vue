<script setup>
import Button from "primevue/button"
import { PhArticle, PhChatsCircle, PhPlus, PhMinus, PhLink, PhShieldStar } from '@phosphor-icons/vue'
import ForumComponent from '@/components/forum/ForumComponent.vue'
</script>

<template>
  <div>
    
    
    <div class="border-b bdr jlast:border-none p-4">
      <a class="forums-list-head text-500 text-xl mb-2">
        <PhLink weight="duotone" />
        General Discussions
      </a>
      <p class="text-sm text-600 mb-3">Menu offers item customization with the item template that receives the menuitem instance from the model as a parameter...</p>
      
      <div class="relative border bdr rounded-2xl mt-5">
        <button class="custom-btn absolute left-0 top-0 bg-flat border bdr hover:bg-surface text-sm text-400 -translate-y-1/2 ml-8">
          <PhMinus class="mr-2" /> Forums
        </button>
        
        
        <div class="mt-2">
          
          <ForumComponent v-for="n in 3" />
          
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<style>
.forumCatInfo p {
  @apply flex items-center [&:nth-child(2)]:mx-4
}
.forumCatInfo p svg {
  @apply text-sm mr-1
}
</style>