<script setup>
import UserCard from '@/components/user-items/UserCard.vue'
import PermissionActions from '@/components/forum/PermissionActions.vue'
import { PhEye, PhHeart, PhBookmarkSimple, PhClock } from '@phosphor-icons/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <div class="border-b bdr last:border-none p-3">
    <UserCard class="mb-2" />
    <p class="text-sm text-600 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an</p>
    
    <div class="flex items-center justify-between">
      <div class="thread-acts">
        <span>
          <PhClock /> 3 hours
        </span>
        <span>
          <PhHeart weight="fill" /> 412
        </span>
        <span>
          <PhBookmarkSimple weight="fill" />
        </span>
      </div>
      
      <PermissionActions />
    </div>
  </div>
</template>