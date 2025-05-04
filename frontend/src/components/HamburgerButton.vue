<script>
export default {
  name: 'HamburgerButton',
}
</script>

<template>
  <button
    class="md:hidden fixed top-4 left-28 z-50 bg-[#6F00AC] text-white p-2 rounded focus:outline-none"
    @click="$emit('toggle')"
  >
    ☰
  </button>
</template>

