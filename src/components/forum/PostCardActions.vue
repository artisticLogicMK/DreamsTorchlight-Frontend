<script setup>
import { PhChatCircle, PhEye, PhHeart, PhDotsNine, PhBookmarkSimple } from '@phosphor-icons/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="thread-acts">
      <span @click="$emit('showComments')" class="cp">
        <PhChatCircle weight="fill" /> 256
      </span>
      <span>
        <PhEye weight="fill" /> 1,256
      </span>
      <span class="cp">
        <PhHeart weight="fill" /> 412
      </span>
      <span class="cp">
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
        <DropdownMenuLabel>Post Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>