<script setup>
import { PhMagnifyingGlass, PhSliders, PhMoon, PhSun, PhBell } from '@phosphor-icons/vue'
import Button from '@/components/ui/button/Button.vue'
import ForumSearch from '@/components/forum/ForumSearch.vue'

const changeTheme = () => {
  const currentTheme = document.documentElement.classList[0]
  if (currentTheme == 'light') {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    document.querySelector('meta[name=theme-color]').setAttribute("content", "#020617")
    
    // set theme in localStorage 
    localStorage.theme = "dark"
  } else {
    document.documentElement.classList.remove('dark') 
    document.documentElement.classList.add('light')
    document.querySelector('meta[name=theme-color]').setAttribute("content", "#ffffff")
    
    // set theme in localStorage 
    localStorage.theme = "light"
  }
}
</script>

<template>
  <header class="border-b bdr bg-flat">
    
    <nav class="flex w-full max-w-7xl mx-auto items-center justify-between px-5 py-2">
      <img alt="DreamsTorchlight logo" class="h-6" src="@/assets/img/logo.png" />
      
      
      <ForumSearch location="general">
        <div id="search">
          <PhMagnifyingGlass size="20" class="icons text-slate-300 dark:text-slate-500" />
          <div id="input"><input type="text" placeholder="Search forum..." class="text-500 pointer-events-none" /></div>
        </div>
      </ForumSearch>
      
      
      <div class="flex">
        <div class="nav-btns flex items-center">
          <button @click="changeTheme">
            <PhMoon :size="22" class="dark:hidden" />
            <PhSun :size="22" class="hidden dark:block" />
          </button>
          <button>
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
