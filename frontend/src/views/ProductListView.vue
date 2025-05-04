<script setup>
import { ref } from 'vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { RouterLink } from 'vue-router';

const products = ref([
  {
    id: 1,
    sku: 'PRD-001',
    name: 'Tomato Seeds',
    stock: 120,
    sellingPrice: 8.5
  },
  {
    id: 2,
    sku: 'PRD-002',
    name: 'Fertilizer A1',
    stock: 40,
    sellingPrice: 25
  },
  {
    id: 3,
    sku: 'PRD-003',
    name: 'Maize Hybrid',
    stock: 15,
    sellingPrice: 14.99
  }
])
</script>

<template>
  <DashboardLayout>
    <div class="mb-6">
      <h1 class="text-2xl font-bold">All Products</h1>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded shadow text-left">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-3">SKU</th>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Stock</th>
            <th class="px-4 py-3">Selling Price</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" class="border-t hover:bg-gray-50">
            <td class="px-4 py-3">{{ product.sku }}</td>
            <td class="px-4 py-3">{{ product.name }}</td>
            <td class="px-4 py-3">{{ product.stock }}</td>
            <td class="px-4 py-3">${{ product.sellingPrice.toFixed(2) }}</td>
            <td class="px-4 py-3 space-x-2">
              <router-link
                :to="`/dashboard/products/${product.id}/edit`"
                class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
              >
                Edit
              </router-link>
              <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>
