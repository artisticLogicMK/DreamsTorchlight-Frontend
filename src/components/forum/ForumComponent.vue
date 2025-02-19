<script setup>
import { PhArticle, PhChatsCircle, PhLink, PhShieldStar, PhUser } from '@phosphor-icons/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <div class="border-b bdr last:border-none p-4">


    <div class="flex items-end justify-between mb-2">
      <RouterLink to="/forum" class="forums-list-head text-pri-500 text-lg">
        <PhLink weight="duotone" /> Dreams Interpretation
      </RouterLink>
      <button class="text-pri-500 border border-sky-500 text-sm hover:opacity-70 px-2 py-0.5 rounded-md cp">Follow</button>
    </div>
    
    <p class="text-sm text-600 mb-2">Menu offers item customization with the item template that receives the menuitem instance from the model as a parameter...</p>
    
    <div class="forumCatInfo flex items-center text-xs text-400">
      <DropdownMenu>
        <DropdownMenuTrigger class="p-[0!important]">
          <p class="text-pri-500 border border-sky-500 p-1 rounded-md cp">
            <PhShieldStar weight="fill" class="-mt-[2px]" /> Moderators
          </p>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent>
          <DropdownMenuItem><PhUser /> ebankole</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <p>
        <PhChatsCircle weight="duotone" /> 127 Threads
      </p>
      <p>
        <PhArticle weight="duotone" /> 2,567 Posts
      </p>
    </div>
    
    
  </div>
</template>