<script setup>
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

defineProps(['items'])
</script>

<template>
<div class=" px-3 py-2 border-b bdr">

  <Breadcrumb class="w-full overflow-hidden">
    <BreadcrumbList>
      <template v-for="(item, i) in items" :key="item.url">
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <RouterLink :to="item.url">
              {{ item.name }}
            </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator class="last:hidden" />
      </template>
      <!--  -->
    </BreadcrumbList>
  </Breadcrumb>
  
</div>
</template>