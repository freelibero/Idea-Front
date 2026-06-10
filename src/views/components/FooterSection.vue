<template>
  <footer class="w-full bg-surface-container-lowest border-t border-white/5">
    <div class="max-w-container-max mx-auto px-margin-desktop pt-16 md:pt-20 pb-8 md:pb-10">
      <!-- Top row: Logo + Links -->
      <div class="flex flex-col md:flex-row gap-12 md:gap-16 pb-12 md:pb-16 border-b border-white/5">
        <!-- Logo area -->
        <div class="shrink-0">
          <router-link to="/" class="inline-block">
            <div
              class="h-14 md:h-16 bg-no-repeat bg-left bg-contain"
              :style="{ backgroundImage: `url(${logoImg})`, width: '280px' }"
            ></div>
          </router-link>
          <p class="font-body-md text-on-surface-variant/60 mt-5 max-w-xs leading-relaxed">
            Connecting global design excellence and elevating spatial innovation since 2010.
          </p>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1">
          <div class="flex flex-col gap-4">
            <h4 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.2em] font-bold mb-1">奖项信息</h4>
            <router-link to="/signup" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">参赛报名</router-link>
            <a class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all" href="#">参赛类别</a>
            <a class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all" href="#">历届评委</a>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.2em] font-bold mb-1">联络我们</h4>
            <a class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all" href="#">媒体报道</a>
            <a class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all" href="#">合作伙伴</a>
            <router-link to="/about/contact" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">联系我们</router-link>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.2em] font-bold mb-1">关于我们</h4>
            <router-link to="/about/intro" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">艾特奖简介</router-link>
            <router-link to="/about/council" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">学术委员会</router-link>
            <router-link to="/about/criteria" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">评审标准</router-link>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.2em] font-bold mb-1">资讯中心</h4>
            <router-link to="/news" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">公告信息</router-link>
            <router-link to="/winners" class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all">获奖作品</router-link>
            <a class="font-body-md text-on-surface-variant/70 hover:text-secondary transition-all" href="#">颁奖盛典</a>
          </div>
        </div>
      </div>

      <!-- Bottom row: Copyright + Social -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8">
        <p class="font-body-md text-on-surface-variant/50">
          &copy; 2024 IDEA-TOPS International Design Award. All Rights Reserved.
        </p>
        <div class="flex gap-4">
          <a class="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/5 transition-all duration-500" href="#">
            <span class="material-symbols-outlined text-base">share</span>
          </a>
          <a class="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/5 transition-all duration-500" href="#">
            <span class="material-symbols-outlined text-base">public</span>
          </a>
          <a class="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/5 transition-all duration-500" href="#">
            <span class="material-symbols-outlined text-base">alternate_email</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logoImg from '@/assets/idea_logo.png'

defineOptions({ name: 'FooterSection' })
</script>
