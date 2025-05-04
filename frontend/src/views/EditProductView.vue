<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
  images: [], // For new uploads
})

async function fetchProduct() {
  // Simulate fetching from API
  const product = {
    sku: 'ABC123',
    name: 'Sample Product',
    costPrice: 10.5,
    sellingPrice: 15.99,
    stock: 25,
  }

  form.value = { ...form.value, ...product }
}

function handleImageUpload(event) {
  form.value.images = Array.from(event.target.files)
}

function updateProduct() {
  console.log('Updated Product:', form.value)
  // Send update to backend
  router.push('/dashboard/products')
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <DashboardLayout>
    <template #default>
      <div class="space-y-4 w-full sm:max-w-xl bg-white p-4 sm:p-6 rounded shadow mx-auto">
        <h1 class="text-2xl font-bold mb-6">Edit Product</h1>

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
