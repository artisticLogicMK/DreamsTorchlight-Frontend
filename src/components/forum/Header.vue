<script setup>
import {PhMagnifyingGlass, PhSliders, PhMoon, PhBell } from '@phosphor-icons/vue'
import Button from '@/components/ui/button/Button.vue'

const changeTheme = () => {
  document.documentElement.classList.remove('light')
  document.documentElement.classList.add('dark') 
}

const changeThemeL = () => {
document.documentElement.classList.remove('dark') 
  document.documentElement.classList.add('light') 
}
</script>

<template>
  <header class="border-b bdr bg-flat">
    
    <nav class="flex w-full max-w-7xl mx-auto items-center justify-between px-5 py-2">
      <img alt="DreamsTorchlight logo" class="h-6" src="@/assets/img/logo.png" />
      
      <div id="search" class="">
        <PhMagnifyingGlass size="20" class="icons text-slate-300 dark:text-slate-500" />
        <div id="input"><input type="text" placeholder="Search forum..." class="text-500" /></div>
        <PhSliders size="20" class="icons text-slate-600 dark:text-slate-300" />
      </div>
      
      
      <div class="flex">
        <div class="nav-btns flex items-center">
          <button @click="changeTheme">
            <PhMoon :size="22" />
          </button>
          <button @click="changeThemeL">
            <PhBell :size="22" />
          </button>
        </div>
        

        <Button class="shrink-0 rounded-full">
      Sign Up
    </Button>
      </div>
      
    </nav>
  </header>
</template>

<style scoped>
#search {
  @apply grow flex items-center h-full max-w-sm bg-slate-100/60 dark:bg-slate-900 rounded-full mx-4 px-1
}
#search #input{
  @apply grow overflow-hidden
}
#search input{
  @apply h-full w-full text-sm bg-transparent mx-3
}
#search .icons {
  @apply shrink-0 m-1.5
}

header .nav-btns button {
  @apply flex items-center justify-center max-w-sm bg-slate-100/60 dark:bg-slate-900 text-slate-600 dark:text-slate-300 p-1.5 rounded-full mr-4
}
</style>
