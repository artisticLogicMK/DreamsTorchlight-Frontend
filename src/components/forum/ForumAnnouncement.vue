<script setup>
import AnnouncementAudio from '@/components/forum/AnnouncementAudio.vue'
import { PhMegaphone, PhSpeakerHigh } from '@phosphor-icons/vue'
</script>


<template>
  <div class="flex items-center bg-gradient-to-br from-sky-600 to-sky-500 text-flat text-sm font-semibold px-4 py-2.5">
    <PhMegaphone v-if="false" weight="fill" class="text-lg mr-4" />
    
    <AnnouncementAudio />
    
    <span>All forum announcement will be shown here..</span>
  </div>
</template>