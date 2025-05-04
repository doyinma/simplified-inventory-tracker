<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false);
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800">

    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2">
          <img src="/inventory-tracker-logo.png" alt="Inventory Tracker Logo" class="h-10 w-auto" />
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex flex-grow pl-5 space-x-4 text-md font-bold text-gray-700">
          <RouterLink :to="{ path: '/', hash: '#about' }" class="hover:text-[#6F00AC] transition">About</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#featured' }" class="hover:text-[#6F00AC] transition">Featured</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#get-started' }" class="hover:text-[#6F00AC] transition">Get Started</RouterLink>
        </nav>

        <!-- Right Side (Desktop) -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="https://github.com/doyinma/simplified-inventory-tracker" target="_blank" class="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-[#6F00AC] transition"><i class="fab fa-github"></i> GitHub Repo</a>
          <RouterLink to="/dashboard" class="bg-[#6F00AC] text-white text-sm font-bold px-4 py-2 rounded hover:opacity-90 transition">Demo Dashboard</RouterLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-gray-700 focus:outline-none" @click="menuOpen = !menuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path :class="{ hidden: menuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path :class="{ hidden: !menuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="menuOpen" class="md:hidden bg-white px-4 pt-2 pb-4 shadow text-sm font-bold text-gray-700 space-y-2">
        <RouterLink :to="{ path: '/', hash: '#about' }" class="block hover:text-[#6F00AC]" @click="menuOpen = false">About</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#featured' }" class="block hover:text-[#6F00AC]" @click="menuOpen = false">Featured</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#get-started' }" class="block hover:text-[#6F00AC]" @click="menuOpen = false">Get Started</RouterLink>
        <a href="https://github.com/doyinma/simplified-inventory-tracker" target="_blank" class="block hover:text-[#6F00AC]"><i class="fab fa-github"></i> GitHub Repo</a>
        <RouterLink to="/dashboard" class="inline-block bg-[#6F00AC] text-white px-4 py-2 rounded hover:opacity-90 transition" @click="menuOpen = false">Demo Dashboard</RouterLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-6">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {{ currentYear }} Simplified Inventory Tracker. Developed by <a href="https://oladoyinfagbohun.com/" target="_blank" class="hover:text-blue-400 transition">Oladoyin</a>. All rights reserved.</p>
        <div class="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="#" class="hover:text-blue-400 transition">Privacy</a>
          <a href="#" class="hover:text-blue-400 transition">Terms</a>
          <a href="https://www.linkedin.com/in/oladoyin-fagbohun-892600208/" class="hover:text-blue-400 transition" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.12 20H4.44V9h2.68v11zM5.78 7.57c-.85 0-1.55-.7-1.55-1.55 0-.86.7-1.56 1.55-1.56s1.56.7 1.56 1.56c0 .85-.7 1.55-1.56 1.55zm13.67 12.43h-2.68v-5.39c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.09 1.42-2.09 2.89V20H10.2V9h2.57v1.51h.04c.36-.68 1.26-1.39 2.59-1.39 2.77 0 3.28 1.83 3.28 4.22V20z"/>
            </svg>
          </a>
          <a href="https://github.com/doyinma" class="hover:text-blue-400 transition" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.75c-1.1-.75.08-.74.08-.74a2.5 2.5 0 0 1 1.83 1.24 2.55 2.55 0 0 0 3.5 1 2.55 2.55 0 0 1 .76-1.6c-2.66-.3-5.47-1.33-5.47-5.9a4.62 4.62 0 0 1 1.23-3.2 4.3 4.3 0 0 1 .12-3.16s1-.32 3.3 1.22a11.38 11.38 0 0 1 6 0C16 5.38 17 5.7 17 5.7a4.3 4.3 0 0 1 .12 3.16 4.62 4.62 0 0 1 1.23 3.2c0 4.59-2.82 5.59-5.5 5.88a2.87 2.87 0 0 1 .82 2.23v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>
