<template>
  <div class="fixed inset-0 bg-background font-body-md overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img :src="bgImg" alt="" class="w-full h-full object-cover opacity-50" style="mix-blend-mode: luminosity" />
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 z-0"
      style="background: radial-gradient(circle at center, rgba(19,20,16,0.5) 0%, rgba(19,20,16,0.95) 100%)"></div>

    <!-- Particles -->
    <div ref="particlesRef" class="absolute inset-0 pointer-events-none z-0"></div>

    <!-- Main Content -->
    <div class="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8">
      <div class="w-full max-w-lg flex flex-col items-center">
        <!-- Headline -->
        <div class="text-center mb-10 w-full">
          <h2
            class="font-display-hero text-[48px] md:text-[64px] text-secondary mb-3 opacity-90 leading-tight drop-shadow-lg">
            Enter the<br />Temple of Design
          </h2>
          <p class="font-body-lg text-on-surface-variant font-light tracking-wide">
            进入全球建筑卓越的权威舞台。
          </p>
        </div>

        <!-- Ambient Glow -->
        <div class="ambient-glow"></div>

        <!-- Glassmorphism Card -->
        <div class="glass-panel w-full rounded-xl p-8 md:p-12 relative z-20 flex flex-col">
          <!-- Back Button -->
          <router-link to="/"
            class="absolute top-4 left-4 md:top-6 md:left-6 w-9 h-9 flex items-center justify-center rounded-full border border-midnight-gray text-on-surface-variant hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all duration-300"
          >
            <span class="material-symbols-outlined text-xl">arrow_back</span>
          </router-link>
          <!-- Logo -->
          <div class="mb-10 text-center flex flex-col items-center">
            <img :src="logoImg" alt="IDEA-TOPS" class="h-10 md:h-12 w-auto mb-3" />
            <p class="font-label-sm text-label-xs text-on-surface-variant tracking-widest uppercase">全球认证</p>
          </div>

          <!-- Tabs -->
          <div class="flex gap-8 mb-8 border-b-[0.5px] border-midnight-gray relative justify-center w-full">
            <button
              class="font-label-sm text-label-sm uppercase tracking-widest pb-4 relative transition-colors duration-300 px-4"
              :class="activeTab === 'login' ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'"
              @click="activeTab = 'login'">
              登录
              <span class="absolute -bottom-px left-0 h-0.5 bg-secondary transition-all duration-300"
                :class="activeTab === 'login' ? 'w-full opacity-100' : 'w-0 opacity-0'"></span>
            </button>
            <button
              class="font-label-sm text-label-sm uppercase tracking-widest pb-4 relative transition-colors duration-300 px-4"
              :class="activeTab === 'register' ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'"
              @click="activeTab = 'register'">
              注册
              <span class="absolute -bottom-px left-0 h-0.5 bg-secondary transition-all duration-300"
                :class="activeTab === 'register' ? 'w-full opacity-100' : 'w-0 opacity-0'"></span>
            </button>
          </div>

          <!-- Login Form -->
          <form v-show="activeTab === 'login'" class="flex flex-col gap-6 w-full" @submit.prevent>
            <div class="relative group">
              <label for="email"
                class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">邮箱地址</label>
              <input id="email" v-model="loginForm.email"
                class="input-underline w-full font-body-md text-on-surface bg-transparent focus:ring-0 placeholder:text-surface-tint/30 pb-2"
                placeholder="architect@studio.com" type="email" />
            </div>
            <div class="relative group mt-2">
              <div class="flex justify-between items-end mb-2">
                <label for="password"
                  class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest transition-colors group-focus-within:text-secondary">密码</label>
                <a class="font-label-xs text-label-xs text-lead-gray hover:text-secondary transition-colors"
                  href="#">忘记密码？</a>
              </div>
              <input id="password" v-model="loginForm.password"
                class="input-underline w-full font-body-md text-on-surface bg-transparent focus:ring-0 placeholder:text-surface-tint/30 pb-2 pr-8"
                placeholder="••••••••" :type="showPassword ? 'text' : 'password'" />
              <button class="absolute right-0 bottom-2 text-on-surface-variant hover:text-secondary transition-colors"
                type="button" @click="showPassword = !showPassword">
                <span
                  class="material-symbols-outlined text-[20px]">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
              </button>
            </div>
            <button
              class="btn-gold font-label-sm text-label-sm uppercase tracking-widest py-4 mt-6 rounded-sm flex items-center justify-center gap-2"
              type="submit">
              登录
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <div class="mt-8 text-center border-t-[0.5px] border-midnight-gray pt-6">
              <span
                class="font-label-xs text-label-xs text-lead-gray uppercase tracking-widest mb-4 block">或使用以下方式登录</span>
              <div class="flex justify-center gap-4">
                <button
                  class="w-12 h-12 rounded-full border border-midnight-gray flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all duration-300 hover:bg-secondary/5"
                  type="button">
                  <span class="material-symbols-outlined">mail</span>
                </button>
                <button
                  class="w-12 h-12 rounded-full border border-midnight-gray flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all duration-300 hover:bg-secondary/5"
                  type="button">
                  <span class="material-symbols-outlined">public</span>
                </button>
              </div>
            </div>
          </form>

          <!-- Register Form -->
          <form v-show="activeTab === 'register'" class="flex flex-col gap-6 w-full" @submit.prevent>
            <div class="grid grid-cols-2 gap-4">
              <div class="relative group">
                <label for="fname"
                  class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">名字</label>
                <input id="fname" v-model="registerForm.firstName"
                  class="input-underline w-full font-body-md text-on-surface bg-transparent focus:ring-0 placeholder:text-surface-tint/30 pb-2"
                  placeholder="Jane" type="text" />
              </div>
              <div class="relative group">
                <label for="lname"
                  class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">姓氏</label>
                <input id="lname" v-model="registerForm.lastName"
                  class="input-underline w-full font-body-md text-on-surface bg-transparent focus:ring-0 placeholder:text-surface-tint/30 pb-2"
                  placeholder="Doe" type="text" />
              </div>
            </div>
            <div class="relative group">
              <label for="reg-email"
                class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">邮箱地址</label>
              <input id="reg-email" v-model="registerForm.email"
                class="input-underline w-full font-body-md text-on-surface bg-transparent focus:ring-0 placeholder:text-surface-tint/30 pb-2"
                placeholder="architect@studio.com" type="email" />
            </div>
            <div class="relative group">
              <label for="reg-password"
                class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">创建密码</label>
              <input id="reg-password" v-model="registerForm.password"
                class="input-underline w-full font-body-md text-on-surface bg-transparent focus:ring-0 placeholder:text-surface-tint/30 pb-2"
                placeholder="••••••••" type="password" />
            </div>
            <div class="flex items-start gap-3 mt-2">
              <div class="flex items-center h-5">
                <input id="terms" v-model="registerForm.agreeTerms"
                  class="w-4 h-4 border-midnight-gray rounded bg-transparent focus:ring-secondary text-secondary"
                  type="checkbox" />
              </div>
              <label class="font-label-xs text-label-xs text-lead-gray leading-tight" for="terms">
                我已阅读并同意 <a class="text-secondary hover:underline" href="#">服务条款</a> 和 <a
                  class="text-secondary hover:underline" href="#">隐私政策</a>。
              </label>
            </div>
            <button
              class="btn-gold font-label-sm text-label-sm uppercase tracking-widest py-4 mt-4 rounded-sm flex items-center justify-center gap-2"
              type="submit">
              创建账户
            </button>
            <div class="mt-4 text-center">
              <a class="font-label-xs text-label-xs text-lead-gray hover:text-on-surface transition-colors uppercase tracking-widest"
                href="#">以评委身份加入？</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import bgImg from '@/assets/back.png'
import logoImg from '@/assets/idea_logo_1.png'

defineOptions({ name: 'LoginPage' })

const particlesRef = ref<HTMLDivElement | null>(null)
const activeTab = ref<'login' | 'register'>('login')
const showPassword = ref(false)

const loginForm = reactive({ email: '', password: '' })
const registerForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeTerms: false,
})

onMounted(() => {
  const container = particlesRef.value
  if (!container) return

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div')
    p.classList.add('particle')
    p.style.width = `${Math.random() * 4 + 1}px`
    p.style.height = p.style.width
    p.style.left = `${Math.random() * 100}%`
    p.style.top = `${Math.random() * 100}%`
    p.style.animationDelay = `${Math.random() * 10}s`
    p.style.animationDuration = `${Math.random() * 10 + 10}s`
    container.appendChild(p)
  }
})
</script>

<style>
.glass-panel {
  background: rgba(19, 20, 16, 0.65);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 0.5px solid rgba(201, 169, 110, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
}

.input-underline {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #2a2a2a;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  transition: all 0.3s ease;
}

.input-underline:focus {
  outline: none;
  box-shadow: none;
  border-bottom: 1.5px solid #c9a96e;
}

.btn-gold {
  background: transparent;
  border: 1px solid #c9a96e;
  color: #c9a96e;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-gold::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #c9a96e, #e8ce9b);
  z-index: -1;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.btn-gold:hover {
  color: #0a0a0a;
  border-color: transparent;
}

.btn-gold:hover::before {
  opacity: 1;
}

.ambient-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(201, 169, 110, 0.08) 0%, rgba(19, 20, 16, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.particle {
  position: absolute;
  background: #c9a96e;
  border-radius: 50%;
  opacity: 0.3;
  animation: float 10s infinite ease-in-out;
  pointer-events: none;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>
