<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import Quill from 'quill'
import 'emoji-picker-element'
import Emoji from '@/components/ui/Emoji.vue'

const model = defineModel()
const quillEditor = ref(null)

const emojiPopup = ref(null)
const emojiPopupVisible = ref(false)
const emojiPopupPos = ref({ top: 0, left: 0 })

// Hode emoji popup when outside of it is clicked
onClickOutside(emojiPopup, () => {
  emojiPopupVisible.value = false
})

// Register custom font sizes with Quill
const Size = Quill.import('attributors/style/size')
Size.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '30px'] // Allowed sizes
Quill.register(Size, true)

let quill

onMounted(() => {
  nextTick(() => {
    if (quillEditor.value) {
      // initialize editor
      quill = new Quill(quillEditor.value, {
        theme: 'snow',
        modules: {
          toolbar: '#toolbar'
        },
        placeholder: 'Type contents here...\nType semicolon : to select emoji'
      })
      
      // When content is typed into the editor
      quill.on('text-change', () => {
        model.value = {
          html: quill.root.innerHTML, // Get html code
          rawText: quill.getText() // full text content
        }
      })
      
      const showEmojiPopup = () => {
        const text = quill.getText() // Get full text content
        const range = quill.getSelection() // Get current cursor position
        return { range, text }
      }
      
      // This code block detects when semicolon(:) is typed and then invoke emoji popup
      quill.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
          const { range, text } = showEmojiPopup()
          if (range && text[range.index - 1] === ':') { // If in focus and last char is :
            showPopup(range.index)
            quill.deleteText(range.index - 1, 1) // Delete the :
          }
        }
      })
      
      // When emoji custon button is clicked
      document.getElementById('emoji-btn').addEventListener('click', (e) => {
        e.preventDefault()
        quill.focus() // Focus editor
        const { range } = showEmojiPopup() // Get cursor position
        showPopup(range.index) // Invoke emoji popup
      })
    }
  })
  
})


// Function to show emojiPopup at cursor position
const showPopup = (index) => {
  // Get position of cursor
  const bounds = quill.getBounds(index)
  
  // Set emoji popup at bottom of the cursor with 15px offset
  emojiPopupPos.value = {
    top: bounds.top + 15, // 15px below cursor
    left: bounds.left,
  }
  
  // Then show the popup
  emojiPopupVisible.value = true
}

// This function receives the value of Emoji Component event and then insert the emoji in editor
const setEmoji = (emoji) => {
  // Get focus position of editor
  const range = quill.getSelection()
  
  // Focus editor if not in focus
  if (!range) quill.focus()
  
  // If in focus, insert emoji
  if (range) {
    quill.insertText(range.index, emoji)
  }
}
</script>


<template>
  <div>

    <div id="toolbar" class="relative">
      <!-- Text Formatting -->
      <span class="ql-formats">
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
        <button class="ql-strike"></button>
      </span>
    
      <!-- Headings -->
      <span class="ql-formats">
        <select class="ql-header">
          <option selected></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
      </span>
      
      <!-- Text Color & Background -->
      <span class="ql-formats">
        <select class="ql-color"></select>
        <select class="ql-background"></select>
      </span>
    
      <!-- Blockquote -->
      <span class="ql-formats">
        <button class="ql-blockquote"></button>
      </span>
    
      <!-- Text Alignment -->
      <span class="ql-formats">
        <select class="ql-align"></select>
      </span>
    
      <!-- Lists & Indents -->
      <span class="ql-formats">
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <button class="ql-indent" value="-1"></button>
        <button class="ql-indent" value="+1"></button>
      </span>
    
      <!-- Font Size & Font Family -->
      <span class="ql-formats">
        <select class="ql-size">
          <option value="14px" selected="">Normal</option>
          <option value="12px">Extra Small</option>
          <option value="14px">Small</option>
          <option value="16px">Medium</option>
          <option value="18px">Large</option>
          <option value="20px">Extra Large</option>
          <option value="24px">Extra Large 2</option>
          <option value="30px">Extra Large 3</option>
        </select>
        
        <!--<select class="ql-font"></select>-->
      </span>

      <!-- Embeds: Links, Video.. -->
      <span class="ql-formats">
        <button id="emoji-btn" class="-mt-1 text-base">
          🙂
        </button>
        <button class="ql-link"></button>
        <button class="ql-video"></button>
      </span>
      
      <!-- Script (Subscript & Superscript) -->
      <span class="ql-formats">
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
      </span>
    
      <!-- Remove Formatting -->
      <span class="ql-formats">
        <button class="ql-clean"></button>
      </span>
    </div>

    <div class="relative">
      <div ref="quillEditor" class="torch-doc min-h-[200px]"></div>
      
      <div
        ref="emojiPopup"
        v-if="emojiPopupVisible" 
        class="emojiPopup" 
        :style="{ top: `${emojiPopupPos.top}px`, lefth: `${emojiPopupPos.left}px` }"
      >
        <Emoji @emojiSelected="setEmoji" />
      </div>
    </div>
    
  </div>
</template>


<style>
/* emojiPopup Styling */
.emojiPopup {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  @apply absolute w-full
}

.ql-container {
  @apply rounded-b-md
}

.ql-editor { 
  @apply text-[14px] text-slate-700 dark:text-slate-200
}

.ql-editor::before {
  @apply text-sm leading-7 text-slate-400 dark:text-slate-500
}

.ql-container.ql-snow, .ql-toolbar.ql-snow{
  @apply border bdr
}
.ql-toolbar.ql-snow{
  @apply rounded-t-md
}

#toolbar * {
  @apply bdr
}

#toolbar span {
  @apply border-none
}
#toolbar span svg {
  @apply text-600
}
#toolbar span svg {
  fill: transparent !important;
  stroke: currentColor !important;
}

#toolbar span svg * {
  fill: inherit !important;
  stroke: inherit !important;
}

#toolbar span.ql-picker-label, #toolbar span.ql-picker-item {
  @apply text-600
}
#toolbar .ql-picker-options{
  @apply bg-flat
}


/* SVG Icons inside buttons should also change */
#toolbar .ql-active svg,
#toolbar button:hover svg,
#toolbar button:focus svg {
  stroke: #0284c7 !important;
}

.dark #toolbar .ql-active svg,
.dark #toolbar button:hover svg,
.dark #toolbar button:focus svg {
  stroke: #0ea5e9 !important;
}

/* Reset inactive SVGs */
#toolbar button:not(.ql-active) svg {
  fill: transparent !important;
  stroke: currentColor !important;
}

#toolbar .ql-picker-label.ql-active, .dark #toolbar .ql-picker-label.ql-active {
  @apply text-sky-600 dark:text-sky-500
}
</style>