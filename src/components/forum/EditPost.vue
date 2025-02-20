<script setup>
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import * as yup from 'yup'
import { useToast } from '@/components/ui/toast/use-toast'

import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'
import Editor from '@/components/ui/Editor.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import EditPostQuote from '@/components/forum/EditPostQuote.vue'
import EditsImages from '@/components/forum/EditsImages.vue'

const { toast } = useToast()

const props = defineProps(['intent', 'edit', 'quote'])

const storedData = useLocalStorage('postDraft', { html: '', text: '' })

const errors = ref({
  content: ''
})

const images = ref([])
const imagesel = ref(4)

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

const removeImage = (img) => {
  images.value = images.value.filter((im) => im !== img)
}

onMounted(() => {
 if (props.intent === "edit") {
    storedData.value = props.edit.content
    
    if (props.edit.images && props.edit.images.length) {
      images.value = props.edit.images
      imagesel.value -= props.edit.images.length
    }
  }
})

const del = () => alert(777)
</script>

<template>
  <div class="w-full h-full bg-flat overflow-y-auto">

    <div class="flex items-center justify-between border-b bdr px-4 py-2">
        <h1 class="text-base font-semibold font-round text-600">{{ props.intent === 'edit' ? 'Edit' : 'Create' }} Post</h1>
        
        <ConfirmDialog v-if="intent === 'edit'" title="Are you sure to delete?" description="This action will permanently delete this post from the forum." @accept="del">
          <Button class="hover:bg-red-100 hover:text-red-500 h-6" variant="outline">Delete</Button>
        </ConfirmDialog>
    </div>
    
    
    <form class="p-4" @submit.prevent="submitPost">
      
      <EditPostQuote v-if="props.quote" :quote="props.quote" @removeQuote="del" />
      
      <div class="mb-5">
        <p class="label">Content</p>
        <div v-if="errors.content" class="form-errs">{{ errors.content }}</div>
        <Editor
          v-model="storedData"
          :content="storedData.html"
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
        <Button class="w-fit sm:w-32" type="submit">
          {{ props.intent === 'edit' ? 'Update' : 'Submit' }}
        </Button>
      </div>
      
    </form>
    
  </div>
</template>
