<script setup>
import { ref, onMounted, computed } from 'vue'

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'

const props = defineProps(['location','id'])


const isGeneral = computed(() => props.location !== 'forum' && props.location !== 'thread')

const filter = ref({
  id: props.location === 'general' ? null : props.id,
  returnType: props.location === 'general' || props.location === 'forum' ? 'thread' : props.location,
  sort: null,
  order: 'desc'
})

onMounted(() => {
  
})
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <slot />
    </DialogTrigger>
    <DialogContent>

      <DialogHeader>
        <DialogTitle class="capitalize">
          {{ props.location }} Search
        </DialogTitle>
      </DialogHeader>
      
{{filter}} - {{props.location}}
      <form class="sch-form">
        <div class="mb-3">
          <Input
          @click="forum = null"
          id="title" type="text"
          placeholder="Type keywords..." />
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          
          <div v-if="isGeneral" class="itm">
            <div class="label">In Forum</div>
            <Select v-model="filter.id">
              <SelectTrigger class="w-full">
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem :value="null">All</SelectItem>
                  <SelectItem value="hot">Hot Threads</SelectItem>
                  <SelectItem value="new">New Threads</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          
        <div v-if="props.location !== 'thread'" class="itm">
          <div class="label">Return</div>
            <Select v-model="filter.returnType">
              <SelectTrigger class="w-full">
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thread">Threads</SelectItem>
                <SelectItem value="post">Posts</SelectItem>
              </SelectContent>
            </Select>
          </div>


          <div class="itm">
            <div class="label">Sort</div>
            <Select v-model="filter.sort">
              <SelectTrigger class="w-full">
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem :value="null">Time Created</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="views">Views</SelectItem>
                <SelectItem v-if="props.location === 'forum' || filter.return === 'forum'" value="posts">Posts</SelectItem>
                <SelectItem v-if="props.location === 'thread' || filter.return === 'thread'" value="comments">Comments</SelectItem>
                <SelectItem value="reactions">Reactions</SelectItem>
              </SelectContent>
            </Select>
          </div>


          <div class="itm">
            <div class="label">Time Range</div>
            <input type="date" v-model="filter.timerange" class="input dateplace w-full" />
          </div>
          
          <div class="itm">
            <div class="label">Order</div>
            <Select v-model="filter.order">
              <SelectTrigger class="w-full">
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">From new to old</SelectItem>
                <SelectItem value="asc">From old to new</SelectItem>
              </SelectContent>
            </Select>
          </div>

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

<style>
.sch-form .label {
  @apply text-sm font-semibold text-600 mb-1
}
</style>