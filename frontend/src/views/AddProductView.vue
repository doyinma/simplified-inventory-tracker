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

function handleImageUpload(event) {
  form.value.images = Array.from(event.target.files)
}

function submitForm() {
  console.log('Form Submitted:', form.value)
}
</script>

<template>
  <DashboardLayout>
    <div class="space-y-4 w-full sm:max-w-xl bg-white p-4 sm:p-6 rounded shadow mx-auto">
      <h1 class="text-2xl font-bold mb-6">Add New Product</h1>

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
