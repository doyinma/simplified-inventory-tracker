import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import DashboardView from '@/views/DashboardView.vue'
import AddProductView from '@/views/AddProductView.vue'
import ProductListView from '@/views/ProductListView.vue'
import EditProductView from '@/views/EditProductView.vue'
// import StockLevelsView from '@/views/StockLevelsView.vue'
// import StockAdjustmentsView from '@/views/StockAdjustmentsView.vue'
// import LowStockAlertsView from '@/views/LowStockAlertsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/dashboard/products/add',
    name: 'AddProduct',
    component: AddProductView,
  },
  {
    path: '/dashboard/products',
    name: 'ProductList',
    component: ProductListView,
  },
  {
    path: '/dashboard/products/:id/edit',
    name: 'EditProduct',
    component: EditProductView
  },
  // {
  //   path: '/dashboard/inventory',
  //   name: 'StockLevels',
  //   component: StockLevelsView,
  // },
  // {
  //   path: '/dashboard/adjustments',
  //   name: 'StockAdjustments',
  //   component: StockAdjustmentsView,
  // },
  // {
  //   path: '/dashboard/low-stock',
  //   name: 'LowStockAlerts',
  //   component: LowStockAlertsView,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

