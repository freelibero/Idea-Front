<template>
  <div class="bg-background text-on-surface font-body-md">
    <NavBar />

    <main class="relative pt-20">
      <section class="min-h-screen flex flex-col md:flex-row relative">
        <!-- Background Map Layer -->
        <div class="absolute inset-0 z-0 pointer-events-none opacity-20 md:opacity-40 map-mask overflow-hidden">
          <img ref="mapRef" alt="Global Map" class="w-full h-full object-cover grayscale invert opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCboGfqdiCzdOIFPwkxckC9eVyemvXhICnWUD2rqv--DbW684miX3gdjEHVlnYEYqBCQtyOg6KTXl_T2fRJrpn-l4geM4y5f9teJbMR_AIIKj_kggL5GV2BHt0Yhi9pjqB4xRoV-80Z2w3k_Qygi0Q0bUTxRC85Aw-S1lsblzGxcqcBbCHdh278_kl6_y2wj3QUCW8HDR7n_1VVBUO3Z59u8m-BW5kzVqtpotPf4lNLzHbpl0MzTh14fZPrBOfRtMzXn-1PWmZ4RY" />
          <div class="absolute top-[45%] left-[75%] w-4 h-4 bg-secondary rounded-full gold-glow animate-pulse">
            <div class="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
          </div>
        </div>

        <!-- Left Side: Contact Details -->
        <div
          class="relative z-10 w-full md:w-1/2 flex items-center px-margin-mobile md:px-margin-desktop py-section-gap">
          <div class="max-w-xl">
            <span class="font-label-sm text-sm text-secondary uppercase tracking-[0.3em] mb-6 block">全球布局</span>
            <h1 class="font-display-hero text-[48px] md:text-[80px] text-secondary mb-12 italic leading-tight">
              联系我们<br />
              <span class="font-normal not-italic opacity-80">Connect With Us</span>
            </h1>

            <div class="space-y-12">
              <!-- Address -->
              <div class="group flex gap-6 items-start">
                <div
                  class="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-ink-jade transition-all duration-500 shrink-0">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant mb-2">深圳总部</h3>
                  <p class="font-body-md text-base text-on-surface leading-relaxed">
                    深圳市龙岗区龙城大道85号万科龙岗云中心44楼（4402室）
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="group flex gap-6 items-start">
                <div
                  class="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-ink-jade transition-all duration-500 shrink-0">
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant mb-2">电话咨询</h3>
                  <p class="font-body-md text-base text-on-surface leading-relaxed">0755-83868566</p>
                </div>
              </div>

              <!-- Email -->
              <div class="group flex gap-6 items-start">
                <div
                  class="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-ink-jade transition-all duration-500 shrink-0">
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant mb-2">电子邮箱</h3>
                  <p class="font-body-md text-base text-on-surface leading-relaxed">ideatops@163.com</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-20 flex gap-8 border-t border-midnight-gray pt-10">
              <a class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300"
                href="#">WeChat</a>
              <a class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300"
                href="#">Instagram</a>
              <a class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300"
                href="#">LinkedIn</a>
              <a class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300"
                href="#">Facebook</a>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div
          class="relative z-10 w-full md:w-1/2 flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest/40 backdrop-blur-sm border-l-[0.5px] border-midnight-gray">
          <div class="w-full max-w-lg">
            <form class="space-y-12" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="relative group" @focusin="onFocus" @focusout="onBlur">
                  <input v-model="form.name"
                    class="peer w-full bg-transparent border-0 border-b border-midnight-gray focus:border-secondary focus:ring-0 text-on-surface py-3 transition-all duration-300 placeholder-transparent"
                    id="name" placeholder="姓名" required type="text" />
                  <label
                    class="absolute left-0 top-0 -translate-y-6 font-label-xs text-xs uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-secondary peer-focus:text-xs"
                    for="name">姓名</label>
                </div>
                <div class="relative group" @focusin="onFocus" @focusout="onBlur">
                  <input v-model="form.email"
                    class="peer w-full bg-transparent border-0 border-b border-midnight-gray focus:border-secondary focus:ring-0 text-on-surface py-3 transition-all duration-300 placeholder-transparent"
                    id="email" placeholder="邮箱" required type="email" />
                  <label
                    class="absolute left-0 top-0 -translate-y-6 font-label-xs text-xs uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-secondary peer-focus:text-xs"
                    for="email">邮箱地址</label>
                </div>
              </div>
              <div class="relative group" @focusin="onFocus" @focusout="onBlur">
                <input v-model="form.organization"
                  class="peer w-full bg-transparent border-0 border-b border-midnight-gray focus:border-secondary focus:ring-0 text-on-surface py-3 transition-all duration-300 placeholder-transparent"
                  id="organization" placeholder="机构/公司" type="text" />
                <label
                  class="absolute left-0 top-0 -translate-y-6 font-label-xs text-xs uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-secondary peer-focus:text-xs"
                  for="organization">工作室 / 机构</label>
              </div>
              <div class="relative group" @focusin="onFocus" @focusout="onBlur">
                <textarea v-model="form.message"
                  class="peer w-full bg-transparent border-0 border-b border-midnight-gray focus:border-secondary focus:ring-0 text-on-surface py-3 transition-all duration-300 placeholder-transparent resize-none"
                  id="message" placeholder="留言" required rows="4"></textarea>
                <label
                  class="absolute left-0 top-0 -translate-y-6 font-label-xs text-xs uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-secondary peer-focus:text-xs"
                  for="message">简要咨询</label>
              </div>
              <div class="pt-6">
                <button
                  class="w-full md:w-auto px-16 py-5 bg-transparent border border-secondary text-secondary font-label-sm uppercase tracking-[0.2em] relative overflow-hidden group transition-all duration-500 hover:text-ink-jade"
                  type="submit">
                  <span class="relative z-10">发送消息</span>
                  <div
                    class="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  </div>
                </button>
                <p class="mt-6 font-label-xs text-xs text-on-surface-variant/60 leading-relaxed italic">
                  * 您的信息将被严格保密，仅用于促进我们的沟通。
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'

defineOptions({ name: 'ContactUs' })

const mapRef = ref<HTMLImageElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  organization: '',
  message: '',
})

function handleSubmit() {
  alert('消息已发送成功，我们的工作人员会尽快与您联系。')
}

function onFocus(e: FocusEvent) {
  const el = e.currentTarget as HTMLElement
  el.classList.add('scale-[1.01]')
}

function onBlur(e: FocusEvent) {
  const el = e.currentTarget as HTMLElement
  el.classList.remove('scale-[1.01]')
}

// ─── 地图视差 ─────────────────────────────────────────
let mouseHandler: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  mouseHandler = (e: MouseEvent) => {
    const map = mapRef.value
    if (!map) return
    const x = (e.clientX - window.innerWidth / 2) / 100
    const y = (e.clientY - window.innerHeight / 2) / 100
    map.style.transform = `scale(1.1) translate(${x}px, ${y}px)`
  }
  window.addEventListener('mousemove', mouseHandler, { passive: true })
})

onBeforeUnmount(() => {
  if (mouseHandler) {
    window.removeEventListener('mousemove', mouseHandler)
  }
})
</script>

<style scoped>
.gold-glow {
  filter: drop-shadow(0 0 15px rgba(228, 194, 133, 0.3));
}

.map-mask {
  mask-image: radial-gradient(circle at 75% 45%, black, transparent 70%);
  -webkit-mask-image: radial-gradient(circle at 75% 45%, black, transparent 70%);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>
