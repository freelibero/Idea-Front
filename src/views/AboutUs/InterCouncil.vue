<template>
  <div class="bg-surface-dim text-on-surface font-body-md overflow-x-hidden marble-bg">
    <NavBar />

    <main class="pt-40">
      <!-- Hero Section -->
      <section class="max-w-container-max mx-auto px-margin-desktop mb-24 reveal-item">
        <div class="w-20 h-[1px] bg-secondary mb-8"></div>
        <h1 class="font-display-hero text-[52px] md:text-[96px] text-on-surface mb-6 max-w-4xl">
          国际 <span class="text-secondary italic">学术</span> 委员会
        </h1>
        <p class="font-body-md text-xl text-on-surface-variant max-w-2xl">
          汇聚全球最具声望的学术权威与设计大师，为空间设计树立国际标准。
        </p>
      </section>

      <!-- Academic Gallery Grid -->
      <section class="max-w-container-max mx-auto px-margin-desktop mb-32">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="(member, idx) in members"
            :key="member.name"
            class="academic-card reveal-item group relative overflow-hidden bg-ink-jade gold-border"
            :style="{ transitionDelay: (idx + 1) * 100 + 'ms' }"
          >
            <div class="aspect-[3/4] overflow-hidden relative">
              <img
                :alt="'Portrait of ' + member.name"
                class="w-full h-full object-cover"
                :src="member.image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80"></div>
            </div>
            <div class="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="font-headline-md text-[32px] text-secondary mb-2">{{ member.name }}</h3>
              <p class="font-label-sm text-sm text-on-surface-variant uppercase tracking-widest mb-4">{{ member.title }}</p>
              <div class="h-0.5 w-0 group-hover:w-16 bg-secondary transition-all duration-500"></div>
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

defineOptions({ name: 'InterCouncil' })

const members = [
  {
    name: '郑时龄',
    title: '中国科学院院士',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKZwuhfVHRmPePg-r9QgGNZDGfvpXH7nU8qmveb-SiET50uv1de2rdL1e7LWkGXV7HbWD9aE_jZNSkFNrPkuJQm5RbnQ2CU9rZjp2wLLE-OVwzGyEB9GjvYVzE3QWcfhu4G3IllL45LpN_XgkhrekXZxCQHYduAm87CauaoaSbkPFbNEYRErts6WAKoixs6ChvuKE8mJxLXQj0mBTplaSl1k2P26KYZ9XrmxnqMF2DJkXovbQOteXi1RsTsKvMbVHKYN4KkrIuvEs',
  },
  {
    name: '鲁晓波',
    title: '清华大学美术学院院长',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0yZHZqWNTVMT7ANGZSCjol0VAVSjYTUvTCPWOk7UWHV4o8TReahmzY1-O-GVqURCG33R7nM9P4n6EAgdLEVQ8iSwSAuf2AnMXL52s9Lo5Xq2px6UAYyFmKMQPX4OtC2CQytcqVZ6jUyuFJ_lo5rvYtOHTYvhiaOw_EUCoNQ3h_YEZkwHuzes8SfOvBc2Y2YdZ3lTEL5lTk35qfPRDc1D-jgA-yAJbhMOI8S-PO4DFDLOQv8Z3X5BWncY-NxxL0yZGlaZU2etBVw',
  },
  {
    name: 'M. Fuksas',
    title: 'Fuksas 工作室创始人，意大利著名建筑师',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAHjLFwakCoR4omqv3muq9iwzVzfEXm0MPH9Zw_B6g0Pt9_lU892SidysPuByT3V70M7vpW9ZJtpYfwoyyJH7crz5is9k7bx8C_Cz4S5ghnkjS87U_Q5lIJUr1LCXsKslT_fFTpCL7-kakFimbr9oyV4hKpxQR1N-2eLmpbFmoFuO7lEqsON8RdN0zdl9Dio_ilPEwS3781NEjYvb-i4cIPqAVsO3NaxlLTal3umoilPdXXloaU6uksq7zaOObzoDUYnUbHNkWB6Q',
  },
  {
    name: '矶崎新',
    title: '普利兹克建筑奖得主',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3at3Es2Jf2lXhifdAJuQbrqyUYR41XukYz9dBppR-ekTQOArLl06lfjFhuvP3VI8HBZCiWEFtTYOlbi7SAqa_H76WkhSETGL6nJcN2W1OMNdQzq6FMkRwjwGD0YuYLPJVm8qt3IpVjgYmWeBTnjc--2wHBKj44qVj8R0N3cNa1ggvF_LFwR4Zh6EmfS94dNhovKzWGslkJ6obUoHYEdIm8dVLWHzEFTJItmphkAyxWmLXjSzFmE5cPW6biUci_Ar6odejbul88Bw',
  },
  {
    name: '远见学者',
    title: '国际荣誉顾问',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjNRO722Z6_-3PuiYEIOtjlKMH_XFWIDLPqWjPjhnnYTjuaMX9H7ssO2Vl34PhTsl9KFUoUIb2sRIWj4Ew6F_pIioyIfEJ8jG2GdLIerIUY76Ik5O0uUxvC5tbK_OyLziADBE4L_8L0UOWDcqeMSGLlKp7tdfB2vtJpK_iT8mg-P7qSzW3bpI-372hSP47qukeIHvsGbcyM4ZsJaYC4uQGxvkyYMywqxsTD3SjT0leJZCrXoFbqvM8ceP_lCVgcqkfmO1GKCtAZlo',
  },
  {
    name: 'Kenneth Frampton',
    title: '哥伦比亚大学建筑学教授',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHfljrJCULUbKpf72uJhZo2KH0IdFj22nfGIOR7M-ExLJZU396qNK-R6SHYWdQlQapg_T6TcAHWVklSNmrgBHs0KtGpiDtXj-AVwDcCrZzB5wQGHvqLtnr_KMoqueXlZSGYWes_09sbmdhDZ_G13W5vIvZgzp7dsyrqh2FNLG4Ci9b3YbmQkVlvtO_h1y-23kwm7qRRXc5EDiEFKHK36rXWQczHHskZa_2BWskSrV953OIgviCxVUtoJCH6K_44q7Dk2YoO0NHdgE',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )

  document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.marble-bg {
  background-color: #0a0a0a;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(228, 194, 133, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(228, 194, 133, 0.02) 0%, transparent 40%);
}

.reveal-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-item.active {
  opacity: 1;
  transform: translateY(0);
}

.academic-card img {
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.academic-card:hover img {
  filter: grayscale(0%) contrast(1);
  transform: scale(1.05);
}

.gold-border {
  border: 0.5px solid rgba(228, 194, 133, 0.2);
  transition: border-color 0.4s ease;
}

.academic-card:hover .gold-border {
  border-color: rgba(228, 194, 133, 1);
}
</style>
