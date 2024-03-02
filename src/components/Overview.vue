<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { parallax, content } from '@/assets/data/overview'

const parallaxLayer1 = ref<HTMLElement | null>(null)
const parallaxLayer2 = ref<HTMLElement | null>(null)
const parallaxLayer3 = ref<HTMLElement | null>(null)

const handleMouseMove = (event: MouseEvent) => {
  const mouseX = event.clientX
  const mouseY = event.clientY

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const translateX1 = (centerX - mouseX) / 30
  const translateY1 = (centerY - mouseY) / 30

  const translateX2 = (centerX - mouseX) / 20
  const translateY2 = (centerY - mouseY) / 20

  const translateX3 = (centerX - mouseX) / 10
  const translateY3 = (centerY - mouseY) / 10

  if (parallaxLayer1.value) {
    parallaxLayer1.value.style.transform = `translate(${translateX1}px, ${translateY1}px)`
  }

  if (parallaxLayer2.value) {
    parallaxLayer2.value.style.transform = `translate(${translateX2}px, ${translateY2}px)`
  }

  if (parallaxLayer3.value) {
    parallaxLayer3.value.style.transform = `translate(${translateX3}px, ${translateY3}px)`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <section @mousemove="handleMouseMove">
    <div class="container mx-auto py-8 border-l" />

    <div class="border-t">
      <div class="relative container mx-auto py-20 border-l">
        <div
          class="absolute -top-[25.5px] -left-[30px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="@/assets/images/star.png" />
        </div>

        <div class="flex">
          <div class="relative basis-1/2 h-[658px]">
            <img
              ref="parallaxLayer1"
              class="absolute top-0"
              :src="parallax.layer3"
              alt="MJay Molit"
            />

            <img
              ref="parallaxLayer2"
              class="absolute top-0"
              :src="parallax.layer2"
              alt="MJay Molit"
            />

            <img ref="parallaxLayer3" class="relative" :src="parallax.layer1" alt="MJay Molit" />
          </div>

          <div class="basis-1/2 flex flex-col items-center justify-center px-5">
            <div class="relative">
              <span class="absolute bg-primary -ms-1.5 mt-1.5" style="width: 105%; height: 100%" />
              <span class="relative text-secondary text-8xl italic font-extrabold tracking-wider">
                {{ content.fullName }}
              </span>
            </div>

            <span class="text-5xl font-bold tracking-[0.3em] uppercase mt-4">Portfolio</span>

            <span class="text-2xl font-bold mt-5">{{ content.jobTitle }}</span>

            <span class="text-xl italic text-center leading-7 max-w-[450px] mt-4">
              {{ content.featuredSkills.join(', ') }}
            </span>

            <a :href="content.externalLink.target" target="_blank" class="text-xl mt-20">
              {{ content.externalLink.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
