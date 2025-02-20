<script setup>
import { ref } from 'vue'

const quoteCollapse = ref(false)
</script>

<template>
  <div class="bg-slate-100 dark:bg-slate-900 border-l-4 border-sky-500 text-sm p-3 rounded-md my-3">
    
    <div class="overflow-y-hidden" :class="{'max-h-52': !quoteCollapse}">
      <h1 class="text-slate-600 dark:text-slate-300 font-semibold mb-2">
        Quoting post by
        <span class="text-sky-500">@ebankole</span>
      </h1>
      <div class="torch-doc"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p><br><h1>printing and typesetting industry.</h1>when an unknown printer took a <h1>printing and typesetting industry.</h1><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>galley of type and scrambled it to make a type specimen book.</div>
    </div>

    <button v-if="!quoteCollapse" @click="quoteCollapse = true" class="mt-2 text-sm text-slate-800 dark:text-slate-100 underline underline-offset-2">See more</button>
    
  </div>
</template>