<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { ref } from 'vue'

const form = ref({
  sku: '',
  name: '',
  costPrice: null,
  sellingPrice: null,
  stock: null,
  images: [],
})

// Notification message variables
const message = ref('')
const messageType = ref('')

function handleImageUpload(event) {
  form.value.images = Array.from(event.target.files)
}

async function submitForm() {
  const formData = new FormData()
  formData.append('sku', form.value.sku)
  formData.append('name', form.value.name)
  formData.append('cost_price', form.value.costPrice)
  formData.append('selling_price', form.value.sellingPrice)
  formData.append('stock', form.value.stock)

  form.value.images.forEach((file, index) => {
    formData.append('images[]', file)
  })

  try {
    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Error:', error)
      message.value = 'Failed to add product.'
      messageType.value = 'error'
    } else {
      const data = await response.json()
      console.log('Product added:', data)
      message.value = 'Product added successfully!'
      messageType.value = 'success'
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    message.value = 'An error occurred.'
    messageType.value = 'error'
  }
}
</script>

<template>
  <DashboardLayout>
    <div class="space-y-4 w-full sm:max-w-xl bg-white p-4 sm:p-6 rounded shadow mx-auto">
      <h1 class="text-2xl font-bold mb-6">Add New Product</h1>

      <!-- Notification Message -->
      <div v-if="message" :class="{
        'bg-green-100 text-green-800': messageType === 'success',
        'bg-red-100 text-red-800': messageType === 'error'
      }" class="p-4 rounded mb-4">
        <strong>{{ message }}</strong>
      </div>

      <form class="space-y-4 w-full sm:max-w-xl bg-white p-4 sm:p-6 rounded shadow mx-auto">
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
          <label class="block font-medium mb-1">Initial Stock Quantity</label>
          <input type="number" class="w-full border p-2 rounded" v-model="form.stock" />
        </div>

        <div>
          <label class="block font-medium mb-1">Product Images</label>
          <input type="file" multiple @change="handleImageUpload" class="w-full border p-2 rounded" />
        </div>

        <button
          type="submit"
          @click.prevent="submitForm"
          class="w-full sm:w-auto bg-[#6F00AC] text-white px-4 py-2 rounded hover:bg-[#5a0090]"
        >
          Add Product
        </button>
      </form>
    </div>
  </DashboardLayout>
</template>
