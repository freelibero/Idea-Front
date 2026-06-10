import { ref, watchEffect } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light') {
    isDark.value = false
  } else if (stored === 'dark') {
    isDark.value = true
  }

  watchEffect(() => {
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
