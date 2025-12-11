<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import { AnimatePresence, Motion } from 'motion-v'
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
        <RouterView v-slot="{ Component, route }">
          <AnimatePresence mode="wait">
            <Motion
              v-if="Component"
              :key="route.path"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ duration: 0.25 }"
            >
              <component :is="Component" />
            </Motion>
          </AnimatePresence>
        </RouterView>
      </main>
    </div>
  </UApp>
</template>
