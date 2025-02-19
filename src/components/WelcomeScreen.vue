<script setup>
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
<div class="fixed top-0 left-0 h-full w-full h-full overflow-auto">

  <div id="welcome" class="table w-full h-full px-4 py-5">
  
    <div class="table-cell align-middle text-center">
      
      <div class="w-full max-w-xs md:max-w-sm inline-block mb-5">
        <img alt="DreamsTorchlight logo" class="w-full" src="@/assets/img/torchlogo.png" />
      </div>
      
      <p class="w-full max-w-md mx-auto text-white text-lg font-round mb-5">
        <span class="font-semibold">Welcome to DreamsTorchlight Forum -</span> This forum is for the discussion and interpretation of dreams. Connect, Discuss, and Grow.
      </p>
      
      <div class="flex justify-center space-x-5">
        <Button class="bg-[#01153e] text-white hover:bg-[#01153e]/80">Join</Button>
        <Button>Explore as Guest</Button>
      </div>
      
    </div>
  
  </div>
  
</div>
</template>

<style>
#welcome {
  background: radial-gradient(circle at 50% 20%, #38bdf8, #0369a1, #0c4a6e);
}

/*
400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
      */
</style>