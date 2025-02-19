<script setup>
import { RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'
</script>

<template>
  <RouterView v-ifh="false" />
  <Toaster />
  <WelcomeScreen v-if="false" />
</template>