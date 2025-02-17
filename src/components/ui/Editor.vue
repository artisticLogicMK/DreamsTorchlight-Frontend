<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Quill from 'quill'
import { PhSmiley } from '@phosphor-icons/vue'

const model = defineModel()
const quillEditor = ref(null)

const popupVisible = ref(false)
const popupPosition = ref({ top: 0, left: 0 })

// 🛠 Register custom font sizes with Quill
const Size = Quill.import('attributors/style/size')
Size.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '30px'] // Allowed sizes
Quill.register(Size, true)

let quill
onMounted(() => {
  
  nextTick(() => {
    if (quillEditor.value) {

      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ script: 'sub' }, { script: 'super' }],
        [{ header: [1, 2, 3, false] }],
        ['blockquote'],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ size: [] }],
        [{ font: [] }],
        [{ color: [] }, { background: [] }],
        ['clean'],
      ]

      quill = new Quill(quillEditor.value, {
        theme: 'snow',
        modules: {
          toolbar: '#toolbar'
        }
      })

      quill.on('text-change', () => {
        model.value = quill.root.innerHTML
      })
      
      quill.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
          const text = quill.getText() // Get full text content
          const range = quill.getSelection() // Get current cursor position
          
          if (range && text[range.index - 1] === ':') {alert(98)
            showPopup(range.index)
            quill.deleteText(range.index - 1, 1)
          }
        }
      })
      
      // Function to insert text at the current cursor position
      function insertTextAtCursor(text) {
        const range = quill.getSelection(); // Get current cursor position
      
        if (range) {
          quill.insertText(range, text) // Insert text at cursor
        }
      }
      
      // Example: Insert "Hello" when clicking a button
      document.getElementById('insert-btn').addEventListener('click', (e) => {
      e.preventDefault()
        insertTextAtCursor('😳')
      })
    }
  })
})

// Function to show popup at cursor position
const showPopup = (index) => {
  const bounds = quill.getBounds(index)

  console.log('Bounds:', bounds) // Debugging

  popupPosition.value = {
    top: bounds.top + 30, // 30px below cursor
    left: bounds.left,
  }

  popupVisible.value = true
}

// Hide popup when clicking outside
const hidePopup = () => {
  popupVisible.value = false
}
</script>

<template>
  <div>
    
    <div id="toolbar" class="relative border-[none!important]">
      <div class="absolute z-10 top-full left-0 w-full h-12h bg-sky-400"></div>
      
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
        <button id="insert-btn" class="-mt-1 text-base">
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
      
      <span class="ql-formats">
        
      </span>
    </div>

    <div class="relative bg-slate-100">
      <div ref="quillEditor" class="torch-doc min-h-[200px]"></div>
      
        <!-- Popup -->
      <div 
        v-ifj="popupVisible" 
        class="popup" 
        :style="{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }"
        @click="hidePopup"
      >
        <p>Popup Content Here {{popupPosition.top}}</p>
      </div>
    </div>
    
     
  </div>
</template>


<style>
/* Popup Styling */
.popup {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.ql-container {
  @apply rounded-b-md
}

.ql-editor { 
  @apply text-[14px] text-slate-700 dark:text-slate-200
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