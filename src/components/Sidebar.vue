<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <aside class="w-64 border-r border-default p-4 bg-zinc-50">
    <ul class="space-y-1.5">
      <li
        class="py-1 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 hover:text-primary hover:font-medium flex items-center gap-1"
        @click="router.push('/')"
      >
        <Icon icon="lucide:home" class="size-5" />
        <span>Home</span>
      </li>
      <li
        class="py-1 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 hover:text-primary hover:font-medium flex items-center gap-1"
        @click="router.push('/settings')"
      >
        <Icon icon="lucide:settings" class="size-5" />
        <span>Settings</span>
      </li>
    </ul>
  </aside>
</template>
