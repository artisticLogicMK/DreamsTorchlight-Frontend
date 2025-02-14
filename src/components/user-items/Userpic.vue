<script setup>
import { PhGenderFemale, PhGenderMale } from '@phosphor-icons/vue'
</script>

<template>
    
  <div class="userpic moderator relative shrink-0 w-fit rounded-full overflow-visible border bdr">
    <img src="https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875" class="w-10 h-10 rounded-full" />
    <div class="absolute bottom-0 right-0 bg-flat rounded-full text-600 dark:text-slate-200 text-xs p-0.5">
      <PhGenderFemale />
    </div>
    <span class="status absolute top-0 left-0 w-[5px] h-[5px] bg-slate-300 dark:bg-slate-200 online rounded-full -ml-1"></span>
  </div>
    
</template>

<style>
.userpic .status.online {
  @apply bg-green-500
}

.userpic.moderator {
  @apply border-2 border-sky-500
}
</style>