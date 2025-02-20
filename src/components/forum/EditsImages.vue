<script setup>
import { PhXCircle } from '@phosphor-icons/vue'

defineProps(['images'])
</script>
<template>
  <div class="flex flex-wrap mt-7">
    
    <div
      v-for="img in images"
      :key="img"
      class="relative w-fit h-fit ml-6 first:ml-0 mb-3 mt-3"
    >
      <div class="w-14 h-14 bg-slate-200 dark:bg-slate-900 rounded-md overflow-hidden border bdr">
        <img src="@/assets/img/fire.png" class="w-14" />
      </div>
      <button @click="$emit('removeImage', img)" class="absolute -top-2.5 -right-2.5 bg-slate-800 dark:bg-slate-400 text-slate-200 dark:text-slate-900 text-xl rounded-full">
        <PhXCircle />
      </button>
    </div>
    
  </div>
</template>