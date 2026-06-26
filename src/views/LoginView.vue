<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedUser = ref('admin')
const loggingIn = ref(false)
const success = ref(false)

const users = [
  {
    id: 'admin',
    name: '管理员',
    role: '系统管理员 · 全部权限',
    icon: '🎓',
    avatarClass: 'admin-avatar',
    message: '管理员登录成功',
  },
  {
    id: 'engineer',
    name: '维修工程师',
    role: '张工 · 负责山东区域',
    icon: '👨',
    avatarClass: 'engineer-avatar',
    message: '张工登录成功',
  },
  {
    id: 'viewer',
    name: '访客账户',
    role: '只读权限 · 仅供演示',
    icon: '👤',
    avatarClass: 'viewer-avatar',
    message: '访客登录成功',
  },
]

const currentUser = computed(() => users.find((user) => user.id === selectedUser.value) ?? users[0])
const buttonText = computed(() => (loggingIn.value ? '验证中…' : '🔐 登 录'))

function selectUser(userId) {
  if (!loggingIn.value && !success.value) {
    selectedUser.value = userId
  }
}

async function login() {
  if (loggingIn.value || success.value) return
  loggingIn.value = true
  await new Promise((resolve) => setTimeout(resolve, 600))
  success.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  router.push('/dashboard')
}
</script>

<template>
  <div class="mica-bg">
    <div class="noise"></div>
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob b4"></div>
  </div>

  <main class="login-wrap">
    <section class="login-card">
      <div class="card-left">
        <div class="brand">
          <div class="logo">久</div>
          <div class="text">
            <b>久鼎物联网</b>
            <small>JUDING IOT</small>
          </div>
        </div>
        <h1>物联网设备<br />售后管理平台</h1>
        <p>一站式管理设备监控、工单派发、维修记录与客户回访，全流程数字化运营。</p>
        <div class="features">
          <div class="feature">
            <div class="feature-icon sky">📈</div>
            实时监控设备状态，在线/离线/异常一目了然
          </div>
          <div class="feature">
            <div class="feature-icon violet">📋</div>
            工单全生命周期管理，维修记录可追溯
          </div>
          <div class="feature">
            <div class="feature-icon mint">📞</div>
            客户回访计划自动提醒，服务闭环管理
          </div>
        </div>
      </div>

      <div class="card-right">
        <div class="deco">
          <div class="deco-ring r1"></div>
          <div class="deco-ring r2"></div>
        </div>

        <div class="login-header">
          <h2>欢迎回来</h2>
          <p>选择测试账户快速登录体验</p>
        </div>

        <div class="user-select">
          <button
            v-for="user in users"
            :key="user.id"
            type="button"
            class="user-opt"
            :class="{ selected: selectedUser === user.id }"
            @click="selectUser(user.id)"
          >
            <span class="avatar" :class="user.avatarClass">{{ user.icon }}</span>
            <span class="info">
              <b>{{ user.name }}</b>
              <small>{{ user.role }}</small>
            </span>
            <span class="check"></span>
          </button>
        </div>

        <button class="btn-login" :disabled="loggingIn || success" @click="login">
          <span v-if="loggingIn" class="spinner"></span>
          <span>{{ buttonText }}</span>
        </button>

        <div class="login-footer">
          登录即表示同意 <a href="#">服务条款</a> 与 <a href="#">隐私政策</a><br />
          &copy; 2026 久鼎物联网 · 鲁ICP备XXXXXXXX号
        </div>

        <div class="success-overlay" :class="{ show: success }">
          <div class="ok-circle">✓</div>
          <p>{{ currentUser.message }}</p>
          <small>正在跳转管理后台…</small>
          <div class="scan-bar"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
:root {
  --bg-base: #eef1f8;
}

* {
  box-sizing: border-box;
}

.mica-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: linear-gradient(135deg, #eef1f8 0%, #e9edf6 50%, #f0eef8 100%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  animation: drift 22s ease-in-out infinite;
}

.b1 {
  width: 560px;
  height: 560px;
  left: -140px;
  top: -100px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.5), transparent 70%);
}

.b2 {
  width: 520px;
  height: 520px;
  right: -120px;
  top: 80px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 70%);
  animation-delay: -7s;
}

.b3 {
  width: 620px;
  height: 400px;
  left: 30%;
  bottom: -180px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%);
  animation-delay: -14s;
}

.b4 {
  width: 300px;
  height: 300px;
  left: 60%;
  top: 50%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.32), transparent 70%);
  animation-delay: -3s;
}

.noise {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image:
    linear-gradient(rgba(15, 23, 42, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, 0.025) 1px, transparent 1px);
  background-size: 44px 44px;
}

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(40px, -30px) scale(1.06);
  }
  66% {
    transform: translate(-30px, 40px) scale(0.96);
  }
}

.login-wrap {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #334155;
  font-family: "Segoe UI Variable", "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}

.login-card {
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(30px) saturate(1.6);
  box-shadow: 0 18px 48px rgba(79, 70, 229, 0.12), 0 6px 14px rgba(15, 23, 42, 0.06);
  overflow: hidden;
}

.card-left {
  padding: 52px 44px;
  background: linear-gradient(160deg, rgba(14, 165, 233, 0.08) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-right: 1px solid rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
}

.logo {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.35);
}

.text b {
  display: block;
  font-size: 19px;
  color: #0f172a;
  letter-spacing: 0.5px;
}

.text small {
  display: block;
  font-size: 10px;
  color: #64748b;
  letter-spacing: 3px;
  margin-top: 3px;
}

.card-left h1 {
  font-size: 26px;
  color: #0f172a;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;
}

.card-left p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
}

.features {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13.5px;
  color: #334155;
  font-weight: 500;
}

.feature-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex: none;
}

.sky {
  background: rgba(14, 165, 233, 0.12);
  color: #0ea5e9;
}

.violet {
  background: rgba(139, 92, 246, 0.12);
  color: #8b5cf6;
}

.mint {
  background: rgba(16, 185, 129, 0.14);
  color: #10b981;
}

.card-right {
  position: relative;
  overflow: hidden;
  padding: 52px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-header {
  margin-bottom: 36px;
}

.login-header h2 {
  font-size: 22px;
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 6px;
}

.login-header p {
  font-size: 13px;
  color: #64748b;
}

.user-select {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.user-opt {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 13px;
  border: 1.5px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: 0.2s;
  text-align: left;
  font: inherit;
}

.user-opt:hover,
.user-opt.selected {
  border-color: #0ea5e9;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08);
  transform: translateY(-1px);
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  flex: none;
}

.admin-avatar {
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
}

.engineer-avatar {
  background: linear-gradient(135deg, #8b5cf6, #10b981);
}

.viewer-avatar {
  background: linear-gradient(135deg, #10b981, #0ea5e9);
}

.info {
  flex: 1;
}

.info b {
  display: block;
  font-size: 14px;
  color: #0f172a;
  font-weight: 600;
}

.info small {
  font-size: 11.5px;
  color: #64748b;
}

.check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(15, 23, 42, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  flex: none;
}

.selected .check {
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  border-color: transparent;
}

.check::after {
  content: "";
  width: 8px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg) translate(1px, -1px);
  opacity: 0;
  transition: 0.2s;
}

.selected .check::after {
  opacity: 1;
}

.btn-login {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 13px;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.35);
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-login:hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(14, 165, 233, 0.45);
}

.btn-login:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.login-footer {
  text-align: center;
  margin-top: 28px;
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.8;
}

.login-footer a {
  color: #0ea5e9;
  text-decoration: none;
}

.deco {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  pointer-events: none;
  opacity: 0.6;
}

.deco-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(14, 165, 233, 0.15);
}

.r1 {
  width: 300px;
  height: 300px;
  right: -100px;
  top: -80px;
}

.r2 {
  width: 200px;
  height: 200px;
  right: -50px;
  bottom: 0;
}

.success-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}

.success-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.ok-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #0ea5e9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
  box-shadow: 0 12px 32px rgba(16, 185, 129, 0.4);
}

.success-overlay p {
  margin-top: 16px;
  font-size: 16px;
  color: #0f172a;
  font-weight: 600;
}

.success-overlay small {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  color: #64748b;
}

.scan-bar {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0ea5e9, #8b5cf6, transparent);
  opacity: 0.6;
  animation: scanH 0.8s linear infinite;
}

@keyframes scanH {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 720px) {
  .login-card {
    grid-template-columns: 1fr;
    max-width: 420px;
  }

  .card-left {
    padding: 36px 28px;
    border-right: none;
    border-bottom: 1px solid rgba(15, 23, 42, 0.05);
  }

  .card-right {
    padding: 36px 28px;
  }

  .deco,
  .features {
    display: none;
  }
}
</style>
