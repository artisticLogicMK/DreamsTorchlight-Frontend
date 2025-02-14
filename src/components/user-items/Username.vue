<script setup>
import { PhShieldStar } from '@phosphor-icons/vue'
</script>

<template>
  <p class="username moderator text-sm font-bold text-500 leading-none">
    <PhShieldStar class="icon hidden" weight="fill" />
    Odekron57
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png" class="h-3 w-4.5 ml-2 -mt-px" />
  </p>
</template>

<style>
.username {
  @apply flex items-center
}

.username.moderator {
  @apply text-pri-500
}
.username.moderator .icon {
  @apply inline-block mr-0.5 text-base -mt-[2px]
}
</style>