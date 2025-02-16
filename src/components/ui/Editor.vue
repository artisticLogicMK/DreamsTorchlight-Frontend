<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Quill from 'quill'
import { PhSmiley } from '@phosphor-icons/vue'

const model = defineModel()
const quillEditor = ref(null)

// 🛠 Register custom font sizes with Quill
const Size = Quill.import('attributors/style/size')
Size.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '30px'] // Allowed sizes
Quill.register(Size, true)


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

      const quill = new Quill(quillEditor.value, {
        theme: 'snow',
        modules: {
          toolbar: '#toolbar'
        }
      })

      quill.on('text-change', () => {
        model.value = quill.root.innerHTML
      })
      
      // Function to insert text at the current cursor position
      function insertTextAtCursor(text) {
        const range = quill.getSelection(); // Get current cursor position
      
        if (range) {
          quill.insertText(range, text) // Insert text at cursor
        }
      }
      
      // Example: Insert "Hello" when clicking a button
      document.getElementById('insert-btn').addEventListener('click', () => {
        insertTextAtCursor('😳')
      })
    }
  })
})
</script>

<template>
  <div>
    
    <div id="toolbar">
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

      
      <!-- Script (Subscript & Superscript) -->
      <span class="ql-formats">
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
      </span>
    
      <!-- Remove Formatting -->
      <span class="ql-formats">
        <button class="ql-clean"></button>
      </span>
      
      <span class="ql-emojij">
        <button id="insert-btn" class="ql-emojih">
          <PhSmiley weight="bold" size="32" />
        </button>
      </span>
    </div>

    <div ref="quillEditor" class="border-none"></div>
  </div>
</template>

<style>
.ql-editor { font-size: 14px; }
</style>