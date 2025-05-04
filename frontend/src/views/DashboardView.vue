<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <!-- Dashboard Overview Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Overview Card -->
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2">Total Products</h2>
        <p class="text-2xl font-bold text-[#6F00AC]">125</p>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2">Items Low in Stock</h2>
        <p class="text-2xl font-bold text-red-500">7</p>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2">Recent Stock Adjustments</h2>
        <p class="text-2xl font-bold text-green-600">+38</p>
      </div>
    </div>

    <div class="mt-8">
      <h3 class="text-xl font-bold mb-4">Recent Activity</h3>
      <ul class="space-y-2">
        <li class="bg-white p-4 rounded shadow">📝 Edited "Hundred Acre Friends" stock - updated to 80 units</li>
        <li class="bg-white p-4 rounded shadow">➕ Added new product "Vintage Little Friend"</li>
        <li class="bg-white p-4 rounded shadow">📦 Stock adjustment on "Sakura Dragon" - reduced by 15 units</li>
      </ul>
    </div>
  </DashboardLayout>
</template>
