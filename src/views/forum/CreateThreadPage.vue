<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import { slideOutRight, slideInRight } from 'animate4vue'
import { PhCaretLeft } from '@phosphor-icons/vue'
import { Input } from '@/components/ui/input'
import Editor from '@/components/ui/Editor.vue'

const router = useRouter()
const show = ref(false)
const contents = ref({
  html: null
  rawText: null
})

onMounted(() => {
  show.value=true
})
</script>

<template>
  <Transition @enter="slideInRight" @leave="slideOutRight" @after-leave="router.push({path:'/forum'})">
  <div v-if="show" class="absolute top-0 left-0 w-full h-full bg-flat">
    
    
    <div class="flex border-b bdr text-sm font-semibold font-round text-600">
      <button @click="show=false" class="center mr-3 text-base text-pri-600 dark:text-pri-500 hover:bg-slate-100 dark:hover:bg-slate-700 px-3">
        <PhCaretLeft />
      </button>
      <div class="px-4 py-2">
        Create Thread
      </div>
    </div>
    
    
    <form class="p-4">
      <div class="mb-3">
        <label for="title">Title</label>
        <Input id="title" type="text" placeholder="Thread Title..." />
      </div>
      {{contents}}
      <div v-html="contents" class="torch-doc w-72 border break-words"></div>
      
      <div class="mb-3">
        <label for="contents">Contents</label>
        <Editor v-model="contents" />
      </div>
      
      <div class="mb-3">
        <label for="title">Title</label>
        <Input id="title" type="text" placeholder="Thread Title..." />
      </div>
    </form>
    
  </div>

  </Transition>
</template>
