<script setup>
import { onMounted } from 'vue'
import 'emoji-picker-element'

const emit = defineEmits(['emojiSelected'])

onMounted(() => {
  document.querySelector('emoji-picker').addEventListener('emoji-click', event => {
    emit('emojiSelected', event.detail.unicode)
  })
})

</script>

<template>
  <emoji-picker class="w-full"></emoji-picker>
</template>