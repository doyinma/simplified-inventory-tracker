<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import HamburgerButton from '@/components/HamburgerButton.vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="relative min-h-screen flex">
    <!-- Sidebar -->
    <div
      :class="[
        'fixed z-30 inset-y-0 left-0 w-64 bg-[#6F00AC] text-white flex flex-col justify-between transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:relative md:translate-x-0 md:z-0 md:flex'
      ]"
    >
      <Sidebar :isOpen="isSidebarOpen" />
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-20 md:hidden"
    ></div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col w-full">
      <HamburgerButton @toggle="isSidebarOpen = !isSidebarOpen" />
      <main class="flex-1 p-4 sm:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
