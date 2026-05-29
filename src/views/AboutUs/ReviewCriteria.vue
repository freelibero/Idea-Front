<template>
  <div class="bg-background text-on-background overflow-x-hidden">
    <NavBar />

    <main class="relative pt-40 pb-section-gap golden-ratio-bg">
      <!-- Hero Section -->
      <section class="max-w-container-max mx-auto px-margin-desktop mb-32">
        <div class="grid grid-cols-12 gap-gutter items-end">
          <div class="col-span-12 lg:col-span-8">
            <span class="font-label-sm text-sm uppercase tracking-[0.4em] text-secondary mb-6 block">评审框架</span>
            <h1 class="font-display-hero text-[52px] md:text-[96px] text-on-background mb-8">评审标准</h1>
            <p class="font-quote-italic text-2xl text-on-surface-variant max-w-2xl italic leading-relaxed">
              "建筑是在光线下将体量巧妙、正确、壮丽地组合起来的游戏。我们的标准代表了这一追求的绝对巅峰。"
            </p>
          </div>
          <div class="hidden lg:block lg:col-span-4 text-right">
            <div class="text-secondary opacity-30">
              <span class="material-symbols-outlined text-[120px] font-thin">architecture</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 四大评审准则 -->
      <section class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-32 gap-x-gutter relative">
          <!-- Golden Ratio Geometric Overlay -->
          <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
            <svg class="w-full h-full" fill="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0C800 0 1440 640 1440 1440" stroke="#e4c285" stroke-width="0.5"></path>
              <path d="M1440 1440C1440 640 800 0 0 0" stroke="#e4c285" stroke-width="0.5"></path>
              <circle cx="720" cy="400" r="300" stroke="#e4c285" stroke-dasharray="10 10" stroke-width="0.5"></circle>
            </svg>
          </div>

          <!-- 01 创新性 -->
          <div class="standard-card group relative z-10 p-10 md:p-12 border border-midnight-gray hover:border-secondary transition-all duration-700 bg-ink-jade/40 backdrop-blur-sm">
            <div class="flex justify-between items-start mb-12">
              <span class="font-display-hero text-8xl text-stroke-gold number-glow transition-all duration-500">01</span>
              <div class="p-4 border border-secondary/20 text-secondary">
                <span class="material-symbols-outlined text-4xl">lightbulb</span>
              </div>
            </div>
            <h3 class="font-headline-lg text-4xl text-on-background mb-6">创新性</h3>
            <p class="font-body-md text-on-surface-variant mb-8 leading-relaxed">
              设计必须展示突破性的理念与方法，重新定义空间边界。我们追寻超越当前潮流的远见思维，窥见人类居住与互动的未来图景。
            </p>
            <ul class="space-y-4">
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 形式独创性
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 材料创新运用
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 理念深度
              </li>
            </ul>
          </div>

          <!-- 02 功能性 -->
          <div class="standard-card group relative z-10 p-10 md:p-12 border border-midnight-gray hover:border-secondary transition-all duration-700 bg-ink-jade/40 backdrop-blur-sm md:mt-24">
            <div class="flex justify-between items-start mb-12">
              <span class="font-display-hero text-8xl text-stroke-gold number-glow transition-all duration-500">02</span>
              <div class="p-4 border border-secondary/20 text-secondary">
                <span class="material-symbols-outlined text-4xl">grid_view</span>
              </div>
            </div>
            <h3 class="font-headline-lg text-4xl text-on-background mb-6">功能性</h3>
            <p class="font-body-md text-on-surface-variant mb-8 leading-relaxed">
              卓越的设计必须以优雅与精准解决复杂的人类需求。超越美学之外，空间布局必须优化实用、流线与人体工程学，营造直观支持使用者需求与舒适的环境。
            </p>
            <ul class="space-y-4">
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 空间效率
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 用户体验设计
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 技术卓越
              </li>
            </ul>
          </div>

          <!-- 03 艺术性 -->
          <div class="standard-card group relative z-10 p-10 md:p-12 border border-midnight-gray hover:border-secondary transition-all duration-700 bg-ink-jade/40 backdrop-blur-sm">
            <div class="flex justify-between items-start mb-12">
              <span class="font-display-hero text-8xl text-stroke-gold number-glow transition-all duration-500">03</span>
              <div class="p-4 border border-secondary/20 text-secondary">
                <span class="material-symbols-outlined text-4xl">palette</span>
              </div>
            </div>
            <h3 class="font-headline-lg text-4xl text-on-background mb-6">艺术性</h3>
            <p class="font-body-md text-on-surface-variant mb-8 leading-relaxed">
              评判光、色彩与材质的驾驭能力，是否能够唤起深刻的情感共鸣。我们珍视"空间的诗学"——项目通过精湛的美学选择与细致的工艺传达独特叙事的能力。
            </p>
            <ul class="space-y-4">
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 美学和谐
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 氛围营造
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 工艺细节
              </li>
            </ul>
          </div>

          <!-- 04 生态协调性 -->
          <div class="standard-card group relative z-10 p-10 md:p-12 border border-midnight-gray hover:border-secondary transition-all duration-700 bg-ink-jade/40 backdrop-blur-sm md:mt-24">
            <div class="flex justify-between items-start mb-12">
              <span class="font-display-hero text-8xl text-stroke-gold number-glow transition-all duration-500">04</span>
              <div class="p-4 border border-secondary/20 text-secondary">
                <span class="material-symbols-outlined text-4xl">eco</span>
              </div>
            </div>
            <h3 class="font-headline-lg text-4xl text-on-background mb-6">生态协调性</h3>
            <p class="font-body-md text-on-surface-variant mb-8 leading-relaxed">
              负责任的设汁尊重其生态语境。本准则评估项目如何与所处环境融合、对可持续技术的运用，以及在不妥协品质的前提下减少环境影响的长期承诺。
            </p>
            <ul class="space-y-4">
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 可持续融合
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 在地共生
              </li>
              <li class="flex items-center font-label-sm text-secondary gap-3">
                <span class="w-2 h-[1px] bg-secondary"></span> 资源责任
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="max-w-container-max mx-auto px-margin-desktop mt-section-gap">
        <div class="border-t-[0.5px] border-midnight-gray pt-32 text-center">
          <div class="max-w-3xl mx-auto">
            <h2 class="font-headline-lg text-[40px] md:text-[56px] text-on-background mb-12">准备好定义标准了吗？</h2>
            <div class="flex flex-col md:flex-row items-center justify-center gap-8">
              <router-link
                to="/signup"
                class="px-12 py-5 bg-secondary text-background font-label-sm uppercase tracking-widest font-bold hover:bg-tertiary-fixed-dim transition-all duration-300 w-full md:w-auto"
              >
                提交作品
              </router-link>
              <router-link
                to="/winners"
                class="px-12 py-5 border border-secondary text-secondary font-label-sm uppercase tracking-widest hover:bg-secondary/10 transition-all duration-300 w-full md:w-auto"
              >
                查看获奖作品
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'

defineOptions({ name: 'ReviewCriteria' })

onMounted(() => {
  const cards = document.querySelectorAll('.standard-card')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )

  cards.forEach((card) => {
    const el = card as HTMLElement
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
    observer.observe(el)
  })
})
</script>

<style scoped>
.golden-ratio-bg {
  background:
    radial-gradient(circle at 70% 30%, rgba(228, 194, 133, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(228, 194, 133, 0.05) 0%, transparent 40%);
}

.text-stroke-gold {
  -webkit-text-stroke: 0.5px #e4c285;
  color: transparent;
}

.standard-card:hover .number-glow {
  text-shadow: 0 0 20px rgba(228, 194, 133, 0.4);
}
</style>
