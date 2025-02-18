<script setup>
import { PhUsersThree, PhChartBar, PhNote, PhDot } from '@phosphor-icons/vue'
</script>

<template>
  <div class="side-columns">
    
    <div class="column-boxes bg-flat bdr p-4">
      <h1 class="font-round text-500">
        <PhUsersThree weight="duotone" />
        Who's Online
      </h1>
      <p>33 users active in the past 15 minutes, and 31 guests.</p>
      
      <div class="border-b bdr w-11/12 my-3 mx-auto"></div>
      
      <h1 class="font-round text-500">
        <PhChartBar weight="duotone" />
        Forum Statistics
      </h1>
      <p class="mb-2">Our members have made a total of 71,118 posts in 2,834 threads.</p>
      <p class="mb-2">We currently have 1,301 members registered.</p>
      <p class="mb-2">Please welcome our newest member:</p>
      <div class="flex items-center">
        <img src="https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875" class="w-7 h-7 rounded-full mr-3 border bdr" />
        <div>
          <p class="text-600 font-semibold">DannyT24</p>
          <p class="text-400 font-round">2 hours ago</p>
        </div>
      </div>
    </div>
    
    
    <div class="grow column-boxes bg-flat bdr p-4 mt-3">
      <h1 class="font-round text-500">
        <PhNote weight="duotone" />
        Top Forums
      </h1>
      
      <a v-for="n in 4" class="flex items-center text-xs font-roundb font-semibold mt-2 block hover:text-pri-500">
        <PhDot weight="duotone" class="text-sm" />
        Dreams Interpretation
      </a>
      
      </div>
    
    
    <div class="column-boxes bg-flat bdr p-4 mt-3">
      <p class="text-600">&copy; 2025 DreamsTorchlight Forum.</p>
      <a class="text-400 text-xs hover:underline mt-2">Terms & Privacy</a>
      <p class="text-600 font-semibold mt-2">Built by <a class="text-pri-500">ArtisticLogic</a></p>
    </div>
        
  </div>
</template>

<style>
.column-boxes {
  @apply overflow-y-auto
}
.column-boxes h1 {
  @apply flex items-center text-sm font-semibold mb-1
}
.column-boxes h1 svg {
  @apply text-base mr-1.5
}
.column-boxes p {
  @apply text-xs
}
</style>