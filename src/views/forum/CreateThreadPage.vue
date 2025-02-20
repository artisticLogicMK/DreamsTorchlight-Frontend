<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import ForumPageLayout from '@/layout/ForumPageLayout.vue'
import EditThread from '@/components/forum/EditThread.vue'

const threadData = ref(null)

const route = useRoute()

// Check if user is editing and get post value
const edit = route.query.thread || null

onMounted(() => {
  setTimeout(() => {
  if (edit) {
    if (!threadData.value) threadData.value = {}
    // fetch post here
    threadData.value.edit = {
      id: edit,
      title: "This music is more than a melody. its more than life...",
      content: {
        html: "<h1>Yes oh... from database</h1>",
        text: "Yes oh... from database"
      },
      images: ['img1', 'img2', 'img3']
    }
  } else {
    threadData.value = true
  }
  }, 3000)
})
</script>

<template>
  <ForumPageLayout>
  
    <EditThread
      v-if="threadData"
      :intent="edit !== null ? 'edit' : 'create'"
      :edit="threadData.edit"
    />
    
    <div v-else class="flex items-center justify-center text-xl">
      Loading
    </div>
    
  </ForumPageLayout>
</template>