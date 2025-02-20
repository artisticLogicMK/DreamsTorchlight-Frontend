<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ForumPageLayout from '@/layout/ForumPageLayout.vue'
import EditPost from '@/components/forum/EditPost.vue'

const postData = ref(null)

const route = useRoute()

// Check if user is editing and get post value
const edit = route.query.post || null

// Check if 'quote' exists and get its value
const quote = route.query.quote || null

onMounted(() => {
  if (edit) {
    if (!postData.value) postData.value = {}
    // fetch post here
    postData.value.edit = {
      id: edit,
      content: {
        html: "<h1>Yes oh... from database</h1>",
        text: "Yes oh... from database"
      },
      images: ['img1', 'img2']
    }
  }
  
  if (quote) {
    if (!postData.value) postData.value = {}
    const quotetxt = "This is a ve$y stressfull project i am building."
    postData.value.quote = {
      id: quote,
      user: "Ademini007",
      text: quotetxt.slice(0, 120)+(quotetxt.length > 120 ? '...' : '')
    }
  }
  
  if (!edit && !quote) {
    postData.value = true
  }
})
</script>

<template>
  <ForumPageLayout>
  
    <EditPost
      v-if="postData"
      :intent="edit !== null ? 'edit' : 'create'"
      :edit="postData.edit"
      :quote="postData.quote"
    />
    
    <div v-else class="flex items-center justify-center text-xl">
      Loading
    </div>
    
  </ForumPageLayout>
</template>