<script setup>
import { ref, onMounted } from 'vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { RouterLink } from 'vue-router';

// Declare the ref for products
const products = ref([]);

// Fetch the products when the component is mounted
const fetchProducts = async () => {
  try {
    const response = await fetch('https://oladoyinfagbohun.com/inventory-tracker/api/products');
    const data = await response.json();
    if (Array.isArray(data)) {
      products.value = data; // Populate the products list
    } else {
      console.error('Failed to load products:', data.error);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const deleteProduct = async (id) => {
  const confirmDelete = confirm('Are you sure you want to delete this product? This action cannot be undone.');
  if (!confirmDelete) return;

  try {
    const response = await fetch(`https://oladoyinfagbohun.com/inventory-tracker/api/products/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    if (response.ok) {
      alert(result.message || 'Product deleted successfully.');
      fetchProducts(); // Refresh list
    } else {
      alert(result.error || 'Failed to delete product.');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    alert('An error occurred while deleting the product.');
  }
};

// Call the fetchProducts function when the component is mounted
onMounted(() => {
  fetchProducts();
});
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
            <td class="px-4 py-3">${{ parseFloat(product.selling_price).toFixed(2) }}</td>
            <td class="px-4 py-3 space-x-2">
              <router-link
                :to="`/dashboard/products/${product.id}/edit`"
                class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
              >
                Edit
              </router-link>
              <button
                @click="deleteProduct(product.id)"
                class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>
