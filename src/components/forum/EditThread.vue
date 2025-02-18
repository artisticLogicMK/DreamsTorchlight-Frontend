<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'
import Editor from '@/components/ui/Editor.vue'

const props = defineProps(['intent'])

const storedData = useLocalStorage('threadDraft', {
  title: '',
  content: '',
})

const submitThread = () => {
  storedData.value.title = ''
  storedData.value.content = { html: '', text: '' }
}

onMounted(() => {
 if (props.intent === 'edit') {
    storedData.value.title = "_____"
    storedData.value.content = {
      html: '<h1>___Database Content</h1>',
      text: '___Database Content'
    }
  }
})
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full bg-flat overflow-y-auto">
    {{storedData}}
    <div class="border-b bdr text-base font-semibold font-round text-600 px-4 py-2">
        {{ props.intent === 'edit' ? 'Edit' : 'Create' }} Thread
    </div>
    
    
    <form class="p-4" @submit.prevent="submitThread">
      <div class="mb-5">
        <label for="title">Title</label>
        <input
          v-model="storedData.title"
          id="title" type="text"
          placeholder="Thread Title..." />
      </div>

      
      <div class="mb-5">
        <label for="contents">Contents</label>
        <Editor
          v-model="storedData.content"
          :content="storedData.content.html"
        />
      </div>
      
      <div class="mb-5">
        <label for="title">Images</label>
        <Input id="images" type="file" class="h-10 mb-2" />
        <Input id="images" type="file" class="h-10 mb-2" />
        <Input id="images" type="file" class="h-10 mb-2"/>
        <Input id="images" type="file" class="h-10"/>
      </div>
      
      <div class="flex items-center justify-between">
        <Button variant="outline">Save</Button>
        <Button variantj="outline">Submit</Button>
      </div>
    </form>
    
  </div>
</template>
