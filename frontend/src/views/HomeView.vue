<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const slides = [
  {
    title: 'Simplify Your Inventory',
    subtitle: 'Track stock levels with ease.',
    category: 'Inventory Management',
    image: '/hero1.jpg',
    link: '#about',
    buttonText: 'Learn More',
  },
  {
    title: 'Visualize Your Products',
    subtitle: 'Stay updated on what matters.',
    category: 'Product Tracking',
    image: '/hero2.jpg',
    link: '#featured',
    buttonText: 'View Products',
  },
  {
    title: 'Take Control Today',
    subtitle: 'Run your business smarter.',
    category: 'Business Optimization',
    image: '/hero3.jpg',
    link: '/dashboard',
    buttonText: 'Try out the Demo',
  },
];

const featuredProducts = ref([])

const shuffleArray = (arr) => {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

onMounted(async () => {
  try {
    const response = await axios.get('https://oladoyinfagbohun.com/inventory-tracker/api/products')
    const products = Array.isArray(response.data) ? response.data : []

    // Ensure numeric values and valid structure if needed
    featuredProducts.value = shuffleArray(products).slice(0, 10)
  } catch (error) {
    console.error('Error fetching featured products:', error)
  }
})
</script>

<template>
  <div>
    <!-- Hero Slider -->
    <section id="hero">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        :pagination="{ clickable: true }"
        class="h-[500px] md:h-[600px] relative"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <!-- Background Image -->
          <div class="relative h-full w-full">
            <img
              :src="slide.image"
              alt="Slide Background"
              class="absolute inset-0 w-full h-full object-cover z-0"
            />

            <!-- Dark overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            <!-- Centered Content -->
            <div class="relative z-20 flex items-center justify-center h-full text-center px-4">
              <div class="text-white max-w-2xl">
                <div class="uppercase text-xs tracking-widest mb-3 bg-white text-black px-3 py-1 inline-block font-semibold">
                  {{ slide.category }}
                </div>
                <h2 class="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  {{ slide.title }}
                </h2>
                <p class="text-md md:text-lg mb-6">{{ slide.subtitle }}</p>
                <a
                  :href="slide.link || '#'"
                  class="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                  {{ slide.buttonText || 'Learn More' }}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white text-center">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <p class="text-[#6F00AC] font-semibold uppercase tracking-wide">We are simplifying inventory control</p>
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-10 leading-snug">
          Empowering businesses with easy, efficient,<br class="hidden sm:block"> and reliable inventory tracking tools
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">

          <div>
            <div class="flex justify-center mb-4 text-[#6F00AC] text-4xl">
              <i class="fas fa-eye"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Real-Time Stock Monitoring</h3>
            <p class="text-gray-600 leading-relaxed">
              Keep an accurate count of your inventory at all times and avoid stockouts or overstocking.
            </p>
          </div>

          <div>
            <div class="flex justify-center mb-4 text-[#6F00AC] text-4xl">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Insightful Dashboard</h3>
            <p class="text-gray-600 leading-relaxed">
              Visualize trends and identify your best-selling products with easy-to-read analytics.
            </p>
          </div>

          <div>
            <div class="flex justify-center mb-4 text-[#6F00AC] text-4xl">
              <i class="fas fa-user"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Simple, Smart Control</h3>
            <p class="text-gray-600 leading-relaxed">
              Manage stock levels, set low inventory alerts, and adjust items on the fly without complexity.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section id="featured" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Featured Products</h2>
        <p class="text-gray-600 text-center mb-10">Explore our top picks designed to keep your inventory sharp and your business smarter.</p>

        <div class="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="flex-shrink-0 snap-center w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              :src="product.image_paths || '/fallback.jpg'"
              :alt="product.name"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4">
              <h3 class="text-white text-lg font-semibold mb-2 truncate">{{ product.name }}</h3>
              <a
                :href="`/dashboard/products`"
                class="inline-block text-sm text-white bg-[#6F00AC] hover:bg-[#521176] px-4 py-1 rounded"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section id="get-started" class="bg-[#6F00AC] text-white py-16 px-6 text-center rounded-2xl shadow-lg mx-4 my-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to See It in Action?</h2>
      <p class="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Experience how easy it is to manage your inventory with our simplified dashboard. No login required!
      </p>
      <a href="/dashboard" class="inline-block bg-white text-[#6F00AC] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
        Try the Demo Dashboard
      </a>
    </section>

    <!-- Pre-Footer Section -->
    <section class="bg-gray-100 text-gray-700 py-12 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        <!-- Left: Logo and Quick Links -->
        <div class="flex flex-col md:flex-row gap-12 w-full md:w-2/3">

          <!-- Logo -->
          <div>
            <img src="/inventory-tracker-logo.png" alt="Logo" class="h-12 mb-4">
            <p class="text-sm text-gray-500">Simplifying inventory, one product at a time.</p>
          </div>

          <!-- About Us Links -->
          <div>
            <h4 class="font-semibold mb-2">About Us</h4>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="hover:text-[#6F00AC]">Our Story</a></li>
              <li><a href="#" class="hover:text-[#6F00AC]">Team</a></li>
              <li><a href="#" class="hover:text-[#6F00AC]">Careers</a></li>
            </ul>
          </div>

          <!-- Support Links -->
          <div>
            <h4 class="font-semibold mb-2">Support</h4>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="hover:text-[#6F00AC]">Help Center</a></li>
              <li><a href="#" class="hover:text-[#6F00AC]">Contact Us</a></li>
              <li><a href="#" class="hover:text-[#6F00AC]">FAQs</a></li>
            </ul>
          </div>
        </div>

        <!-- Right: Newsletter Signup -->
        <div class="w-full md:w-1/3">
          <h4 class="font-semibold mb-2">Join Our Newsletter</h4>
          <p class="text-sm mb-4 text-gray-600">Stay updated with new features and product tips.</p>
          <form class="flex flex-col sm:flex-row items-center gap-2">
            <input type="email" placeholder="Your email address" class="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6F00AC]">
            <button type="submit" class="bg-[#6F00AC] text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>

  </div>
</template>

