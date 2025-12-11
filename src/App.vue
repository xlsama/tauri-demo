<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import { AnimatePresence, Motion } from 'motion-v'
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
