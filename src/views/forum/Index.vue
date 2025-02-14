<script setup>
import ForumLayout from '@/layout/ForumLayout.vue'
import { PhNewspaper, PhNote, PhCaretCircleDown } from '@phosphor-icons/vue'
import ForumsDisplay from '@/components/forum/ForumsDisplay.vue'
import FeedsDisplay from '@/components/forum/FeedsDisplay.vue'
import PanelMenu from 'primevue/panelmenu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ref, shallowRef } from "vue"

const currentComp = shallowRef(ForumsDisplay)
const feedsFilter = ref('forums')
    
const setFilter = (filter) => {
  feedsFilter.value = filter
  currentComp.value = FeedsDisplay
}


const showForums = () => {
  feedsFilter.value = 'forums'
  currentComp.value = ForumsDisplay
}
</script>


<template>
  <ForumLayout>

    
    <div id="indexTab" class="flex border-b bdr px-4">
      <button
        @click="showForums"
        :class="{active: currentComp === ForumsDisplay}"
      >
       <PhNote weight="duotone" /> Forums
      </button>
      
      
      <DropdownMenu>
        <DropdownMenuTrigger class="p-[0!important]">
          <button
            :class="{active: currentComp === FeedsDisplay}"
            class="relative"
          >
            <PhNewspaper weight="duotone" />
            Feeds
            <span v-if="feedsFilter === 'threads' || feedsFilter === 'posts'" class="capitalize">
              &nbsp; >&nbsp; {{ feedsFilter }}
            </span>
          </button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent>
          <DropdownMenuItem @click="setFilter('threads')">Threads</DropdownMenuItem>
          <DropdownMenuItem @click="setFilter('posts')">Posts</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>



    <KeepAlive>
      <component :is="currentComp" :filter="feedsFilter" :key="feedsFilter"></component>
    </KeepAlive>
      
    
  </ForumLayout>
</template>


<style>
#indexTab button {
  @apply flex items-center text-500 dark:text-300 text-sm font-semibold px-2 py-2 border-b-2 -mb-px border-transparent first:mr-7
}
#indexTab button svg {
  @apply text-sm mr-1
}
#indexTab button.active {
  @apply text-sky-500 border-sky-500
}
</style>
