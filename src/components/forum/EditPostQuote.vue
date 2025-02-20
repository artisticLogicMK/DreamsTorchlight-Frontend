<script setup>
import { PhX } from '@phosphor-icons/vue'

defineProps(['quote'])
</script>

<template>
  <div class="flex justify-between items-center bg-slate-100 dark:bg-slate-900 border-l-4 border-sky-500 text-sm p-3 rounded-md mb-5">
    <div class="mr-3">
      <h1 class="text-slate-600 dark:text-slate-300 font-semibold mb-2">
        Quoting post by
        <span class="text-sky-500">@{{ quote.user }}</span>
      </h1>
      <p class="text-slate-700 dark:text-slate-200">{{ quote.text }}</p>
    </div>
    <button @click="$emit('removeQuote')">
      <PhX class="text-2xl text-slate-600 dark:text-slate-300" />
    </button>
  </div>
</template>