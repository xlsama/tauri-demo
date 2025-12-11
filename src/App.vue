<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import { invoke } from '@tauri-apps/api/core'

const greetMsg = ref('')
const name = ref('')

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

<template>
  <UApp>
    <div class="h-dvh overflow-hidden flex">
      <Sidebar />
      <main class="flex-1 overflow-y-auto p-4">
        <RouterView />
      </main>
    </div>
  </UApp>
</template>
