<script setup lang="ts">
import Overview from '@/components/Overview.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Portfolio from './components/Portfolio.vue'

const links = [
  {
    label: 'About',
    target: 'about'
  },
  {
    label: 'Skills',
    target: 'skills'
  },
  {
    label: 'Works',
    target: 'works'
  }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <Overview />

  <About />

  <Skills />

  <section class="quote mt-24">
    <div class="container mx-auto">
      <div class="relative flex flex-col items-center justify-center w-100 border-t border-s py-32">
        <div
          class="absolute -top-[25.5px] -left-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="./assets/images/star.png" alt="MJay Molit" />
        </div>

        <span class="text-shadow">Never</span>
        <span class="text-shadow">Stop</span>
        <span class="text-shadow">Learning</span>
      </div>
    </div>
  </section>

  <Portfolio />

  <section>
    <div class="container mx-auto">
      <div class="flex items-center py-4 border-r">
        <div class="flex items-center me-8">
          <span class="font-semibold me-2">Developer</span>
          <a href="https://jamesfromph-wp.github.io/" target="_blank">James Malatabon</a>
        </div>

        <div class="flex items-center">
          <span class="font-semibold me-2">Designer</span>
          <a href="https://mjaymolit.github.io/" target="_blank">Marjay Molit</a>
        </div>
      </div>
    </div>
  </section>

  <section class="fixed right-0 top-1/2 -translate-y-1/2">
    <div class="flex flex-col items-end">
      <span
        v-for="(item, index) in links"
        :key="index"
        @click="scrollToSection(item.target)"
        class="bg-primary text-secondary text-link my-1 rounded-l cursor-pointer"
      >
        {{ item.label }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.text-shadow {
  color: #f1b434;
  text-shadow: 8px 0px 0px #fff;

  @apply text-9xl font-bold uppercase tracking-widest;
}

.text-link {
  @apply relative text-base font-semibold w-[100px] px-5 ps-8 -me-[80px] py-2.5 box-border hover:-me-0 transition-all;
}
</style>
