<script setup>
import { PhGenderFemale, PhGenderMale } from '@phosphor-icons/vue'
</script>

<template>
    
  <div class="userpic moderator relative shrink-0 w-fit rounded-full overflow-visible border bdr">
    <img src="https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875" class="w-10 h-10 rounded-full" />
    <div class="gender">M</div>
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

.userpic .gender {
  @apply text-blue-500 dark:text-blue-400 text-[10px] absolute bottom-0 right-0 flex items-center justify-center bg-flat rounded-full w-3.5 h-3.5
}
.userpic .gender.female {
  @apply text-pink-500 dark:text-pink-400
}
</style>