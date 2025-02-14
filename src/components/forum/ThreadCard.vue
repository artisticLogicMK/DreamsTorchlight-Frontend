<script setup>
defineProps(['showSmallTime'])

import { PhChatsCircle, PhEye, PhHeart, PhDotsNine, PhBookmarkSimple, PhUser, PhClock, PhPushPin } from '@phosphor-icons/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <div v-fojr="(n,i) in [1,2,3,4,5]" class="bdr p-4" :class="{'border-b': showSmallTime}">
    
    <div v-if="i === 0" class="flex items-center w-fit bg-pri-500 dark:text-slate-900 text-flat text-sm font-semibold rounded-md px-3 py-1 mb-3">
      <PhPushPin class="mr-2" weight="bold" /> Pinned Thread
    </div>

    <div class="mb-2">
      <a href="#" class="text-xl text-600 font-bold font-round">Your one-time or recurring contribution does a lot to keep us going. Your one-time or recurring contribution does a lot to keep us going.</a>
    </div>

    <div v-if="showSmallTime === true" class="flex items-center text-xs mb-2">
      <span class="flex items-center text-pri-500 font-semibold mr-3">
        <PhUser class="mr-1" weight="bold" /> ebankole
      </span>
      <span class="flex items-center text-400 ml-3 font-light">
        <PhClock class="mr-1" />2 Hours
      </span>
    </div>
    
    <div class="flex items-center justify-between">
      <div class="thread-acts">
        <span>
          <PhChatsCircle weight="fill" /> 256
        </span>
        <span>
          <PhEye weight="fill" /> 1,345
        </span>
        <span>
          <PhHeart weight="fill" /> 412
        </span>
        <span>
          <PhBookmarkSimple weight="fill" />
        </span>
      </div>

      
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button class="hover:bg-surface text-600 text-xl border border-transparent rounded-md hover:bdr">
            <PhDotsNine weight="bold" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Thread Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Follow</DropdownMenuItem>
          <DropdownMenuItem>Report</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    
  </div>
</template>

<style>
.thread-acts {
  @apply flex items-center text-sm text-500
}
.thread-acts span {
  @apply flex items-center text-sm mr-4 cursor-pointer
}
.thread-acts svg {
  @apply text-xl text-400 mr-1 -mt-[2px]
}
</style>