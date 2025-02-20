<script setup>
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { PhSpeakerHigh } from '@phosphor-icons/vue'
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <button class="bg-white/10 rounded-full p-2 mr-4">
        <PhSpeakerHigh weight="fill" class="text-lg" />
      </button>
    </DialogTrigger>
    <DialogContent class="max-w-sm">
      <DialogHeader>
        <DialogDescription>
          Listen to announcement audio.
        </DialogDescription>
      </DialogHeader>

      <div class="flex justify-center">
       <audio controls>
          <source src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Komiku/Komiku_-_07_-_BattleTheme.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      
    </DialogContent>
  </Dialog>
</template>