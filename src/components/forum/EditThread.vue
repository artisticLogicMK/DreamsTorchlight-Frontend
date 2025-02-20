<script setup>
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import * as yup from 'yup'
import { useToast } from '@/components/ui/toast/use-toast'

import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'
import Editor from '@/components/ui/Editor.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import EditsImages from '@/components/forum/EditsImages.vue'

const { toast } = useToast()

const props = defineProps(['intent', 'edit'])

const storedData = useLocalStorage('threadDraft', {
  title: '',
  content: '',
})

const errors = ref({
  title: '',
  content: ''
})

const images = ref([])
const imagesel = ref(4)

// Define validation schema using yup
const validationSchema = yup.object({
  title: yup.string().required('Title is required').max(150, 'Title must be at most 150 characters'),
  content: yup.string()
    .required('Content is required')
    .test('not-empty', 'Content cannot be empty or just a newline', (value) => {
      // Check if content is not just a newline or whitespace
      return value && value.trim() !== '' && value !== '\n'
    })
    .max(3000, 'Content must be at most 3000 characters')
})

// Function to validate form
const validateForm = async () => {
  try {
    await validationSchema.validate({
      title: storedData.value.title,
      content: storedData.value.content.text
    }, { abortEarly: false })
    return true
  } catch (err) {
    // Capture all errors and map them to fields
    errors.value = {}
    err.inner.forEach((error) => {
      errors.value[error.path] = error.message
    })
    return false
  }
}

// Submit thread handler
const submitThread = async () => {
  const isValid = await validateForm()
  if (isValid) {
    //storedData.value.title = ''
    //storedData.value.content = { html: '', text: '' }
    // Submit logic goes here
    console.log('Form submitted successfully!')
  } else {
    toast({
        title: 'You have errors in your form!',
        variant: 'destructive'
      });
  }
}

const removeImage = (img) => {
  alert(img)
  images.value = images.value.filter((im) => im !== img)
}

onMounted(() => {
 if (props.intent === 'edit') {
    storedData.value.title = props.edit.title
    storedData.value.content = props.edit.content
    
    if (props.edit.images && props.edit.images.length) {
      images.value = props.edit.images
      imagesel.value -= props.edit.images.length
    }
  }
})
</script>

<template>
  <div class="w-full h-full bg-flat overflow-y-auto">

    <div class="flex items-center justify-between border-b bdr px-4 py-2">
        <h1 class="text-base font-semibold font-round text-600">{{ props.intent === 'edit' ? 'Edit' : 'Create' }} Thread</h1>
        
        <ConfirmDialog v-if="intent === 'edit'" title="Are you sure to delete?" description="This action will permanently delete this thread from the forum." @accept="del">
          <Button class="hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-700 h-6" variant="outline">Delete</Button>
        </ConfirmDialog>
    </div>
    
    
    <form class="p-4" @submit.prevent="submitThread">
      <div class="mb-5">
        <p class="label">Title</p>
        <div v-if="errors.title" class="form-errs">{{ errors.title }}</div>
        <Input
          v-model="storedData.title"
          id="title" type="text"
          placeholder="Thread Title..." />
      </div>

      
      <div class="mb-5">
        <p class="label">Content</p>
        <div v-if="errors.content" class="form-errs">{{ errors.content }}</div>
        <Editor
          v-model="storedData.content"
          :content="storedData.content.html"
        />
      </div>
      
      
      <EditsImages
        v-if="props.intent === 'edit' && images.length"
        :images="images"
        @removeImage="removeImage"
      />

      <div class="mb-5">
        <p class="label">Upload Images</p>
        <Input v-for="i in imagesel" :key="i" type="file" class="h-10 mb-2 last:mb-0" />
      </div>
      
      <div class="flex items-center justify-end sm:justify-center mb-5">
        <Button class="w-fit sm:w-32">
          {{ props.intent === 'edit' ? 'Update' : 'Submit' }}
        </Button>
      </div>
    </form>
    
  </div>
</template>
