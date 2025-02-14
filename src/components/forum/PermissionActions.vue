<script setup>
import { PhDotsNine } from '@phosphor-icons/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  
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
        <DropdownMenuItem>Delete</DropdownMenuItem>
        <DropdownMenuItem>Report</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Pin</DropdownMenuItem>
        <DropdownMenuItem>Lock</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

</template>