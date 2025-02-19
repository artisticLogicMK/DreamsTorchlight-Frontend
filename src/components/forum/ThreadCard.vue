<script setup>
import { PhChatsCircle, PhEye, PhHeart, PhDotsNine, PhBookmarkSimple, PhUser, PhClock } from '@phosphor-icons/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Pinned from '@/components/ui/Pinned.vue'

defineProps(['showSmallTime', 'showPin'])
</script>

<template>
  <div v-fojr="(n,i) in [1,2,3,4,5]" class="bdr p-4" :class="{'border-b': showSmallTime}">
    
    <Pinned v-if="isPinned && showPin" />

    <div class="mb-2">
      <RouterLink to="/thread" class="text-xl text-600 font-bold font-round">#Your one-time or recurring contribution does a lot to keep us going. Your one-time or recurring contribution does a lot to keep us going.</RouterLink>
    </div>

    <div v-if="showSmallTime === true" class="flex items-center text-xs mb-2">
      <span class="flex items-center text-pri-500 font-semibold mr-2">
        <PhUser class="mr-1" weight="bold" /> ebankole
      </span>
      <span class="flex items-center text-400 ml-3 font-light">
        <PhClock class="mr-1" />2 March, 2025, 09:58 pm | 2h
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
        <span class="cp sel">
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

</style>