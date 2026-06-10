<template>
  <div class="bg-background text-on-surface font-body-md overflow-x-hidden">
    <NavBar />

    <!-- Hero Section -->
    <header class="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-12 gap-gutter items-end">
          <div class="col-span-12 md:col-span-8">
            <span class="font-label-sm text-sm uppercase tracking-[0.3em] text-secondary mb-6 block">信息中心</span>
            <h1 class="font-headline-lg text-[48px] md:text-[84px] leading-none mb-8">公告信息</h1>
            <p class="font-body-md text-base text-on-surface-variant max-w-xl">
              来自艾特奖组委会的官方公告、制度文件及全球设计社区的重要通知。
            </p>
          </div>
          <div class="col-span-12 md:col-span-4 flex justify-end mt-6 md:mt-0">
            <div class="flex items-center gap-4 text-secondary/50">
              <span class="text-6xl font-display-hero">01</span>
              <div class="h-px w-24 bg-secondary/30"></div>
              <span class="text-xl font-headline-md italic">通知</span>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none"></div>
    </header>

    <!-- Main Content: Announcements List -->
    <main class="max-w-container-max mx-auto px-margin-desktop pb-section-gap">
      <div class="space-y-0">
        <router-link
          v-for="item in announcements"
          :key="item.id"
          :to="`/news/${item.id}`"
          class="group relative py-12 border-b-[0.5px] border-midnight-gray hover:border-secondary transition-slow cursor-pointer block"
        >
          <div class="grid grid-cols-12 gap-gutter items-start">
            <!-- Date & Tag -->
            <div class="col-span-12 md:col-span-2 space-y-2">
              <time class="font-label-sm text-sm text-secondary block">{{ item.date }}</time>
              <span
                v-if="item.tag"
                class="inline-block px-3 py-1 bg-secondary text-background font-label-xs text-xs uppercase tracking-tighter"
              >{{ item.tag }}</span>
            </div>
            <!-- Content -->
            <div class="col-span-12 md:col-span-9 mt-3 md:mt-0">
              <h2 class="font-headline-md text-xl md:text-3xl text-on-surface group-hover:text-secondary transition-colors duration-300 mb-4">
                {{ item.title }}
              </h2>
              <p class="font-body-md text-base text-on-surface-variant line-clamp-2 max-w-3xl">
                {{ item.desc }}
              </p>
            </div>
            <!-- Action Icon -->
            <div class="hidden md:flex col-span-1 justify-end items-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-slow">
              <span class="material-symbols-outlined text-secondary text-4xl">arrow_right_alt</span>
            </div>
          </div>
          <div class="absolute inset-0 -z-10 bg-secondary/0 group-hover:bg-secondary/2 transition-slow"></div>
        </router-link>
      </div>

      <!-- Pagination -->
      <div class="mt-24 flex items-center justify-between border-t border-midnight-gray pt-8">
        <button class="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors duration-300">
          <span class="material-symbols-outlined">west</span>
          <span class="font-label-sm uppercase tracking-widest">上一页</span>
        </button>
        <div class="flex gap-8">
          <span class="text-secondary font-bold underline decoration-2 underline-offset-8">01</span>
          <span class="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">02</span>
          <span class="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">03</span>
          <span class="text-on-surface-variant">...</span>
          <span class="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">12</span>
        </div>
        <button class="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors duration-300">
          <span class="font-label-sm uppercase tracking-widest">下一页</span>
          <span class="material-symbols-outlined">east</span>
        </button>
      </div>
    </main>

    <!-- Subscription CTA -->
    <section class="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
      <div class="bg-ink-jade p-12 md:p-24 relative overflow-hidden group">
        <div class="relative z-10 grid grid-cols-12 gap-gutter items-center">
          <div class="col-span-12 md:col-span-7">
            <h3 class="font-headline-lg text-3xl md:text-5xl mb-4">第一时间获取最新公告。</h3>
            <p class="font-body-md text-base text-on-surface-variant">订阅我们的资讯，收取官方机构简报。</p>
          </div>
          <div class="col-span-12 md:col-span-5 mt-8 md:mt-0">
            <form class="flex flex-col gap-6" @submit.prevent>
              <div class="relative">
                <input
                  class="w-full bg-transparent border-0 border-b border-midnight-gray py-4 focus:ring-0 focus:border-secondary transition-colors placeholder:text-on-surface-variant/30"
                  placeholder="邮箱地址"
                  type="email"
                />
              </div>
              <button
                class="w-full py-4 bg-secondary text-background font-label-sm uppercase tracking-[0.2em] font-bold hover:bg-secondary-fixed transition-colors"
              >
                立即订阅
              </button>
            </form>
          </div>
        </div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
        <div class="absolute top-0 right-0 w-full h-full bg-linear-to-br from-secondary/3 to-transparent pointer-events-none"></div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'
import { announcementsListData } from '@/data/news'

defineOptions({ name: 'AnnounceInform' })

const announcements = announcementsListData
</script>

<style scoped>
.transition-slow {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
