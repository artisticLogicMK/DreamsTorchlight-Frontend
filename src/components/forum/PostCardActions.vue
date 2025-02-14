<script setup>
import { PhChatCircle, PhEye, PhHeart, PhDotsNine, PhBookmarkSimple } from '@phosphor-icons/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="thread-acts">
      <span>
        <PhChatCircle weight="fill" /> 256
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
        <DropdownMenuLabel>Post Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>