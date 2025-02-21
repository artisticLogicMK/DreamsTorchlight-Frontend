<script setup>
import { ref } from 'vue'
import { PhMagnifyingGlass, PhPlus } from '@phosphor-icons/vue'
import Button from '@/components/ui/button/Button.vue'
import { InputIcon } from '@/components/ui/inputicon'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import ForumSearch from '@/components/forum/ForumSearch.vue'

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
      <Button class="rounded-full">
        <PhPlus class="text-lg font-semibold" weight="bold" />
        {{ props.page === 'forum' ? 'Create' : 'Post' }}
      </Button>
    </RouterLink>


    <div class="flex items-center">
      <ForumSearch :location="props.page === 'forum' ? 'forum' : 'thread'" :id="3">
        <Button class="ml-2 rounded-full">
          <PhMagnifyingGlass class="text-lg" weight="bold" /> Search
        </Button>
      </ForumSearch>
    </div>
  
    
  </div>
</template>