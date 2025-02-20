<script setup>
import { ref, onMounted, nextTick } from 'vue'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'

const forum = ref(null)

onMounted(() => {
  nextTick(() => {

  })
})
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <slot />
    </DialogTrigger>
    <DialogContent>

      <DialogHeader>
        <DialogTitle>
          Forum Search
        </DialogTitle>
      </DialogHeader>
      
      
      <form class="my-">
        <div class="mb-3">
          <Input
          @click="forum = null"
          id="title" type="text"
          placeholder="Type keywords..." />
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <Select v-model="forum">
            <SelectTrigger>
              <SelectValue placeholder="Select Forum"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="hot">Hot Threads</SelectItem>
                <SelectItem value="new">New Threads</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          
          <Select v-model="threadSortj">
            <SelectTrigger class="">
              <SelectValue placeholder="Return"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value="thread">Threads</SelectItem>
                <SelectItem value="posts">Posts</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Select v-model="threadSortj">
            <SelectTrigger class="text-slate-600">
              <SelectValue placeholder="Return"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value="thread">Threads</SelectItem>
                <SelectItem value="posts">Posts</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <input type="date" class="input dateplace w-full" placeholder="Time Range" />

        </div>
      </form>
      
      
      <DialogFooter>
        <Button>Search</Button>
        <DialogClose>
          <Button variant="outline">
            Cancel
          </Button>
        </DialogClose>
      </DialogFooter>

    </DialogContent>
  </Dialog>
</template>