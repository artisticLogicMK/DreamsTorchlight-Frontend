<script setup>
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import * as yup from 'yup'
import { useToast } from '@/components/ui/toast/use-toast'

import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'
import Editor from '@/components/ui/Editor.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'

const { toast } = useToast()

const props = defineProps(['intent'])

const storedData = useLocalStorage('postDraft', { html: '', text: '' })

const errors = ref({
  content: ''
})

// Define validation schema using yup
const validationSchema = yup.object({
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
      content: storedData.value.text
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
const submitPost = async () => {
  const isValid = await validateForm()
  if (isValid) {
    //storedData.valu = { html: '', text: '' }
    // Submit logic goes here
    console.log('Form submitted successfully!')
  } else {
    toast({
      title: 'You have errors in your form!',
      variant: 'destructive'
    })
  }
}

onMounted(() => {
 if (props.intent === 'edit') {
    storedData.value = {
      html: '<h1>___Database Content</h1>',
      text: '___Database Content'
    }
  }
})

const del = () => alert(777)
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full bg-flat overflow-y-auto">

    <div class="flex items-center justify-between border-b bdr px-4 py-2">
        <h1 class="text-base font-semibold font-round text-600">{{ props.intent === 'edit' ? 'Edit' : 'Create' }} Post</h1>
        
        <ConfirmDialog v-if="intent === 'edit'" title="Are you sure to delete?" description="This action will permanently delete this post from the forum." @accept="del">
          <Button class="hover:bg-red-100 hover:text-red-500 h-6" variant="outline">Delete</Button>
        </ConfirmDialog>
    </div>
    
    
    <form class="p-4" @submit.prevent="submitPost">
      
      <div class="mb-5">
        <p class="label">Content</p>
        <div v-if="errors.content" class="form-errs">{{ errors.content }}</div>
        <Editor
          v-model="storedData"
          :content="storedData.html"
        />
      </div>


      <div class="mb-5">
        <p class="label">Images</p>
        <Input id="images" type="file" class="h-10 mb-2" />
        <Input id="images" type="file" class="h-10 mb-2" />
        <Input id="images" type="file" class="h-10 mb-2"/>
        <Input id="images" type="file" class="h-10"/>
      </div>
      
      <div class="flex items-center justify-end sm:justify-center mb-5">
        <Button class="w-fit sm:w-32" type="submit">
          {{ props.intent === 'edit' ? 'Update' : 'Submit' }}
        </Button>
      </div>
      
    </form>
    
  </div>
</template>
