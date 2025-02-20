<script setup>
import { ref } from 'vue'
import { PhMagnifyingGlass, PhPlus } from '@phosphor-icons/vue'
import Button from '@/components/ui/button/Button.vue'
import { InputIcon } from '@/components/ui/inputicon'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const props = defineProps(['page'])


const threadSort = ref('hot')
const threadOrder = ref('desc')

const link = {
  name: props.page === 'thread' ? 'create-thread' : 'create-post'
}
</script>


<template>
  <div class="flex items-center justify-between border-b bdr px-4 py-2">
    
    <RouterLink :to="link">
      <Button>
        <PhPlus class="text-lg font-semibold" weight="bold" />
        {{ props.page === 'thread' ? 'Create' : 'Post' }}
      </Button>
    </RouterLink>
  
    <div class="flex items-center">
      
      <Select v-model="threadSort">
        <SelectTrigger class="mr-2">
          <SelectValue placeholder="Sort By"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value="hot">Hot Threads</SelectItem>
            <SelectItem value="new">New Threads</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      
      <Select v-model="threadOrder">
        <SelectTrigger>
          <SelectValue placeholder="Sort by"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value="desc">Descending</SelectItem>
            <SelectItem value="asc">Ascending</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      
      <Button class="ml-2">
        <PhMagnifyingGlass class="text-lg" weight="bold" />
      </Button>
    </div>
  
    
  </div>
</template>