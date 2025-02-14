<script setup>
import { ref } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Button from '@/components/ui/button/Button.vue'
import PostCardCommentsResponse from '@/components/forum/PostCardCommentsResponse.vue'

const commentSort = ref('new')
</script>

<template>
  <div class="border bdr rounded-xl mt-3 overflow-hidden shadow-sm">
    
    <form class="border-b bdr pb-3">
      <textarea rows="3" class="w-full bg-transparent text-sm text-600 mb-2 p-3" placeholder="Type comment here..."></textarea>
      <div class="flex items-center justify-end sm:justify-start px-3">
        <Button><PhPlus weight="bold" /> Add</Button>
      </div>
    </form>
    
    <div class="flex items-center justify-between border-b bdr px-3 py-2">
      <p class="text-sm text-500 font-semibold">Comments</p>
      
      <Select v-model="commentSort">
        <SelectTrigger class="mr-2">
          <SelectValue placeholder="Sort By"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value="new">Newest</SelectItem>
            <SelectItem value="old">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    
    
    <div>
      <PostCardCommentsResponse />
    </div>
    
  </div>
</template>