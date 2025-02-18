<script setup>
import { onMounted, ref } from 'vue'
import 'emoji-picker-element'

// Define an event emitter to notify the parent component when an emoji is selected
const emit = defineEmits(['emojiSelected'])

// Reactive variable to track dark mode state
const isDark = ref(false)

onMounted(() => {
  // Attach an event listener to the emoji picker
  // When an emoji is clicked, emit the 'emojiSelected' event with the selected emoji's Unicode
  document.querySelector('emoji-picker').addEventListener('emoji-click', event => {
    emit('emojiSelected', event.detail.unicode)
  })
  
  // Check if the 'dark' class is applied to the <html> element and update the isDark state
  if (document.documentElement.classList.contains('dark')) {
    isDark.value = true
  }
})
</script>

<template>
  <!-- Render the emoji picker and dynamically apply dark mode styling -->
  <emoji-picker class="w-full" :class="{'dark': isDark}"></emoji-picker>
</template>

<style>
emoji-picker {
  --border-radius: 8px;
  --box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  --background: white;
  --emoji-size: 19px;
  --font-size: 14px;
  --border-color: #ebeff4;
  
  --search-background: transparent; /* Changes search bar background */
  --input-font-color: #666; /* Changes search text color */
  --input-border-color: #ebeff4;
  --outline-color: #0ea5e9;
  --outline-size: 1px;
  --button-hover-background: #ebeff4;
  --indicator-color: #0ea5e9;
  --input-font-size: 14px;
  --button-active-background: transparent;
}

.dark emoji-picker {
  --background: #020617;
  --font-color: white;
  --input-border-color: #0f172a;
  --border-color: #0f172a;
  --button-hover-background: #0f172a;
}
</style>