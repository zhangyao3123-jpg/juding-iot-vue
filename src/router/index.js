import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LegacyPageView from '../views/LegacyPageView.vue'

const legacyRoutes = [
  { path: '/dashboard', name: 'dashboard', title: '数据概览', file: 'fluent-design.html' },
  { path: '/demo', name: 'demo', title: '样式演示', file: 'demo-hub.html' },
  { path: '/devices', name: 'devices', title: '设备监控', file: 'device-list.html' },
  { path: '/devices/detail', name: 'device-detail', title: '设备详情', file: 'device-detail.html' },
  { path: '/devices/bind', name: 'device-bind', title: '绑定设备', file: 'device-bind.html' },
  { path: '/orders', name: 'orders', title: '工单管理', file: 'order-list.html' },
  { path: '/repairs', name: 'repairs', title: '维修记录', file: 'repair-list.html' },
  { path: '/callbacks', name: 'callbacks', title: '客户回访', file: 'callback-list.html' },
  { path: '/customers', name: 'customers', title: '客户档案', file: 'customer-list.html' },
  { path: '/models', name: 'models', title: '设备型号', file: 'device-model.html' },
  { path: '/reports', name: 'reports', title: '统计报表', file: 'report-page.html' },
  { path: '/settings', name: 'settings', title: '系统设置', file: 'system-settings.html' },
  { path: '/aurora', name: 'aurora', title: '极光玻璃设计', file: 'aurora-design.html' },
]

const routes = [
  { path: '/', name: 'login', component: LoginView },
  ...legacyRoutes.map((route) => ({
    path: route.path,
    name: route.name,
    component: LegacyPageView,
    meta: { title: route.title, legacyFile: route.file },
  })),
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} · 久鼎物联网售后管理系统`
    : '久鼎物联网售后管理系统'
})

export default router
