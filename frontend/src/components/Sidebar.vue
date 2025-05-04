<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

function handleLogout() {
  router.push('/')
}

</script>

<template>
  <aside
    :class="[
      'bg-[#6F00AC] text-white w-64 md:relative md:translate-x-0 md:block z-30 transition-transform duration-300',
      isOpen ? 'fixed inset-y-0 left-0' : '-translate-x-full',
      'md:h-auto h-full overflow-y-auto'
    ]"
  >
    <nav class="p-4 space-y-4 pt-20 md:pt-6">
      <RouterLink to="/dashboard" class="block hover:bg-white/10 px-3 py-2 rounded">Dashboard</RouterLink>

      <div>
        <p class="uppercase text-xs text-white/70 mb-2">Product Catalog</p>
        <RouterLink to="/dashboard/products/add" class="block hover:bg-white/10 px-3 py-2 rounded">Add Product</RouterLink>
        <RouterLink to="/dashboard/products" class="block hover:bg-white/10 px-3 py-2 rounded">View Products</RouterLink>
      </div>

      <div>
        <p class="uppercase text-xs text-white/70 mb-2">Inventory Tracking (Coming Soon)</p>
        <RouterLink to="#" class="block hover:bg-white/10 px-3 py-2 rounded">Stock Levels</RouterLink>
        <RouterLink to="#" class="block hover:bg-white/10 px-3 py-2 rounded">Stock Adjustments</RouterLink>
        <RouterLink to="#" class="block hover:bg-white/10 px-3 py-2 rounded">Low Stock Alerts</RouterLink>
      </div>
    </nav>

    <div class="px-4 py-4 border-t border-white/20">
      <button
        @click="handleLogout"
        class="w-full bg-white/10 hover:bg-white/20 text-sm py-2 rounded"
      >
        Logout
      </button>
    </div>
  </aside>
</template>


