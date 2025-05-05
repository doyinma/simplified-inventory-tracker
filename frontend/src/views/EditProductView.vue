<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const route = useRoute()
const router = useRouter()
const productId = route.params.id

const form = ref({
  sku: '',
  name: '',
  costPrice: null,
  sellingPrice: null,
  stock: null,
  images: [],
})

// Notification variables
const message = ref('')
const messageType = ref('')

function showNotification(type, text) {
  message.value = text
  messageType.value = type
  setTimeout(() => {
    message.value = ''
    messageType.value = ''
  }, 3000)
}

async function fetchProduct() {
  try {
    const response = await axios.get(`https://oladoyinfagbohun.com/inventory-tracker/api/products/${productId}`)
    // console.log('Fetched response:', response.data)
    const product = response.data

    form.value = {
      ...form.value,
      sku: product.sku,
      name: product.name,
      costPrice: parseFloat(product.cost_price),
      sellingPrice: parseFloat(product.selling_price),
      stock: parseInt(product.stock),
      images: []
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    showNotification('error', 'Failed to load product details.')
    setTimeout(() => {
      router.push('/dashboard/products')
    }, 1500)
  }
}

function handleImageUpload(event) {
  form.value.images = Array.from(event.target.files)
}

async function updateProduct() {
  try {
    const formData = new FormData();
    formData.append('sku', form.value.sku);
    formData.append('name', form.value.name);
    formData.append('cost_price', form.value.costPrice);
    formData.append('selling_price', form.value.sellingPrice);
    formData.append('stock', form.value.stock);

    form.value.images.forEach(file => {
      formData.append('images[]', file);
    });

    // Use PUT method to update the product
    await axios.put(`https://oladoyinfagbohun.com/inventory-tracker/api/products/${productId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    console.log('Server response:', response.data);
    showNotification('success', 'Product updated successfully!');
    setTimeout(() => router.push('/dashboard/products'), 1500);
  } catch (error) {
    console.error('Failed to update product:', error);
    showNotification('error', 'Failed to update product. Please try again.');
  }
}

onMounted(() => {
  // console.log('Route ID:', productId)
  fetchProduct()
})
</script>

<template>
  <DashboardLayout>
    <template #default>
      <div class="space-y-4 w-full sm:max-w-xl bg-white p-4 sm:p-6 rounded shadow mx-auto">
        <h1 class="text-2xl font-bold mb-6">Edit Product</h1>

        <!-- Notification Message -->
        <div v-if="message" :class="{
          'bg-green-100 text-green-800': messageType === 'success',
          'bg-red-100 text-red-800': messageType === 'error'
        }" class="p-4 rounded mb-4">
          <strong>{{ message }}</strong>
        </div>

        <form @submit.prevent="updateProduct" class="space-y-4">
          <div>
            <label class="block font-medium mb-1">Stock Keeping Unit</label>
            <input type="text" class="w-full border p-2 rounded" v-model="form.sku" />
          </div>

          <div>
            <label class="block font-medium mb-1">Product Name / Description</label>
            <textarea class="w-full border p-2 rounded" v-model="form.name"></textarea>
          </div>

          <div>
            <label class="block font-medium mb-1">Cost Price</label>
            <input type="number" class="w-full border p-2 rounded" v-model="form.costPrice" />
          </div>

          <div>
            <label class="block font-medium mb-1">Selling Price</label>
            <input type="number" class="w-full border p-2 rounded" v-model="form.sellingPrice" />
          </div>

          <div>
            <label class="block font-medium mb-1">Stock Quantity</label>
            <input type="number" class="w-full border p-2 rounded" v-model="form.stock" />
          </div>

          <div>
            <label class="block font-medium mb-1">Product Images (optional)</label>
            <input type="file" multiple @change="handleImageUpload" class="w-full border p-2 rounded" />
          </div>

          <button
            type="submit"
            class="w-full sm:w-auto bg-[#6F00AC] text-white px-4 py-2 rounded hover:bg-[#5a0090]"
          >
            Update Product
          </button>
        </form>
      </div>
    </template>
  </DashboardLayout>
</template>
