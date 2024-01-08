<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

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
  <section class="hero" @mousemove="handleMouseMove">
    <div class="container mx-auto py-10">
      <div class="relative flex border-t border-s">
        <div
          class="absolute -top-[25.5px] -left-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="./assets/images/star.png" alt="MJay Molit" />
        </div>

        <div class="relative basis-1/2 h-[658px]">
          <img
            ref="parallaxLayer1"
            class="absolute top-0"
            src="./assets/images/mj-orange.png"
            alt="MJay Molit"
          />

          <img
            ref="parallaxLayer2"
            class="absolute top-0"
            src="./assets/images/mj-white.png"
            alt="MJay Molit"
          />

          <img
            ref="parallaxLayer3"
            class="relative"
            src="./assets/images/mj.png"
            alt="MJay Molit"
          />
        </div>

        <div class="basis-1/2 flex flex-col items-center justify-center px-5">
          <div class="relative">
            <span class="absolute bg-[#F1B434] -ms-1.5 mt-1.5" style="width: 105%; height: 100%" />
            <span class="relative text-[#181818] text-8xl italic font-extrabold tracking-wider">
              MJay Molit
            </span>
          </div>

          <span class="text-5xl font-bold tracking-[0.3em] uppercase mt-4">Portfolio</span>

          <span class="text-2xl font-bold mt-5">Graphic Designer, PH based</span>

          <span class="text-xl italic mt-1.5">Social Media Design Graphic and Animation,</span>
          <span class="text-xl italic">Posters, Video Editing, Branding and Illustration</span>

          <a href="https://www.behance.net/mmdsgn_" target="_blank" class="text-xl mt-20"
            >behance.net/mmdsgn_</a
          >
        </div>
      </div>
    </div>
  </section>

  <section class="about mt-24">
    <div class="container mx-auto">
      <div class="relative border-t border-e">
        <div
          class="absolute -top-[25.5px] -right-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="./assets/images/star.png" alt="MJay Molit" />
        </div>

        <div class="relative w-fit -mt-7">
          <span class="absolute bg-[#F1B434] -ms-2.5 mt-0.5" style="width: 110%; height: 100%" />
          <span class="relative text-[#181818] text-5xl italic font-extrabold tracking-wider">
            About me
          </span>
        </div>

        <div class="flex">
          <div class="basis-1/2 flex flex-col p-12">
            <div class="flex">
              <div class="basis-1/3 me-10">
                <img src="./assets/images/img-about.jpg" alt="MJay Molit" />
              </div>

              <div class="basis-2/3 flex flex-col justify-center">
                <div class="flex flex-col w-fit">
                  <span class="text-6xl font-bold tracking-wider uppercase">MJay Molit</span>
                  <span class="text-2xl font-mono text-center mt-1.5">akocreus@gmail.com</span>
                </div>

                <p class="text-lg italic mt-5">
                  "I believe that the key to perfection and happiness lies in learning and embracing
                  the process. Valuing uniqueness in design is a form of perfection itself."
                </p>
              </div>
            </div>

            <span class="text-4xl font-bold tracking-wide mt-10">Education</span>

            <div class="flex flex-col mt-5">
              <div class="flex">
                <div class="flex flex-col basis-2/3">
                  <span class="bg-[#BC4700] text-3xl font-bold text-center pt-0.5 pb-1">
                    Software Developer
                  </span>

                  <span class="text-xl italic text-center mt-1.5">Associate degree</span>
                </div>

                <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                  2012~2023
                </span>
              </div>

              <span class="text-xl mt-4">• Develop programs and websites</span>
              <span class="text-xl">• Visual Basic 6, VB.NET, PHP, and C#</span>
            </div>

            <div class="flex flex-col mt-8">
              <div class="flex">
                <div class="flex flex-col basis-2/3">
                  <span class="bg-[#BC4700] text-3xl font-bold text-center pt-0.5 pb-1">
                    Information Technology
                  </span>

                  <span class="text-xl italic text-center mt-1.5">College Level</span>
                </div>

                <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                  2010~2012
                </span>
              </div>

              <span class="text-xl mt-4">• Introduction to programming</span>
              <span class="text-xl">• Basic principles in designing websites</span>
            </div>
          </div>

          <div class="basis-1/2 flex flex-col p-12">
            <span class="text-4xl font-bold tracking-wide">Work Experience</span>

            <div class="flex flex-col mt-5">
              <div class="flex">
                <div class="flex flex-col basis-2/3">
                  <span class="bg-[#BC4700] text-3xl font-bold text-center pt-0.5 pb-1">
                    2D Social Media Animator
                  </span>

                  <span class="text-xl italic text-center mt-1.5">Digital Marketing Agency</span>
                </div>

                <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                  2020~
                </span>
              </div>

              <span class="text-xl mt-4">• 2D design animator and graphics</span>
              <span class="text-xl">• Video Editor</span>
            </div>

            <div class="flex flex-col mt-8">
              <div class="flex">
                <div class="flex flex-col basis-2/3">
                  <span class="bg-[#BC4700] text-3xl font-bold text-center pt-0.5 pb-1">
                    Social Media Manager/VA
                  </span>

                  <span class="text-xl italic text-center mt-1.5">Digital Marketing Agency</span>
                </div>

                <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                  2017~2020
                </span>
              </div>

              <span class="text-xl mt-4">• Content Creator</span>
              <span class="text-xl">• Design graphic marketing materials</span>
            </div>

            <div class="flex flex-col mt-8">
              <div class="flex">
                <div class="flex flex-col basis-2/3">
                  <span class="bg-[#BC4700] text-3xl font-bold text-center pt-0.5 pb-1">
                    Color Quality Checker
                  </span>

                  <span class="text-xl italic text-center mt-1.5">Printing Agency</span>
                </div>

                <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                  2014~2016
                </span>
              </div>

              <span class="text-xl mt-4">
                • Correct color in prints
                <small class="text-base text-white/75">
                  ( 99% color accuracy digital and print )
                </small>
              </span>
              <span class="text-xl">• Quality checker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="skills mt-24">
    <div class="container mx-auto">
      <div class="relative border-t border-e pb-24">
        <div
          class="absolute -top-[25.5px] -right-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="./assets/images/star.png" alt="MJay Molit" />
        </div>

        <div class="relative w-fit -mt-7">
          <span class="absolute bg-[#F1B434] -ms-2.5 mt-0.5" style="width: 110%; height: 100%" />
          <span class="relative text-[#181818] text-5xl italic font-extrabold tracking-wider">
            Technical Skills
          </span>
        </div>

        <div class="flex p-12">
          <div class="basis-1/6 flex flex-col py-8 me-5">
            <span class="flex items-center justify-end text-xl text-end h-[70px]">
              Graphic Design
            </span>

            <span class="flex items-center justify-end text-xl text-end h-[70px] my-2">
              Animation and Motion Graphics
            </span>

            <span class="flex items-center justify-end text-xl text-end h-[70px]">
              Video Editing
            </span>
          </div>

          <div class="basis-4/6 relative flex flex-col border-s border-b py-8">
            <span class="bg-white w-[100%] h-[70px]" />
            <span class="bg-white w-[63%] h-[70px] my-2" />
            <span class="bg-white w-[40%] h-[70px]" />

            <div class="absolute -bottom-10 flex justify-between" style="width: 100%">
              <span class="text-2xl font-mono text-start">0</span>
              <span class="basis-1/5 text-2xl font-mono text-end">20</span>
              <span class="basis-1/5 text-2xl font-mono text-end">40</span>
              <span class="basis-1/5 text-2xl font-mono text-end">60</span>
              <span class="basis-1/5 text-2xl font-mono text-end">80</span>
              <span class="basis-1/5 text-2xl font-mono text-end">100</span>
            </div>
          </div>

          <div class="basis-1/6 flex flex-col py-8 ms-14">
            <div class="flex items-center justify-start h-[70px]">
              <span class="bg-white text-[#181818] text-3xl font-bold px-2.5 py-2 rounded-md">
                Ps
              </span>

              <span class="bg-white text-[#181818] text-3xl font-bold px-2.5 py-2 rounded-md ms-2">
                Ai
              </span>
            </div>

            <div class="flex items-center justify-start h-[70px]">
              <span class="bg-white text-[#181818] text-3xl font-bold px-2.5 py-2 rounded-md">
                Ae
              </span>
            </div>

            <div class="flex items-center justify-start h-[70px]">
              <span class="bg-white text-[#181818] text-3xl font-bold px-2.5 py-2 rounded-md">
                Pr
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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

  <section class="works mt-24">
    <div class="container mx-auto">
      <div class="relative border-t border-e">
        <div
          class="absolute -top-[25.5px] -right-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="./assets/images/star.png" alt="MJay Molit" />
        </div>

        <div class="relative w-fit -mt-7">
          <span class="absolute bg-[#F1B434] -ms-2.5 mt-0.5" style="width: 110%; height: 100%" />
          <span class="relative text-[#181818] text-5xl italic font-extrabold tracking-wider">
            My Works
          </span>
        </div>

        <div class="flex flex-col p-12">
          <span class="bg-[#BC4700] w-fit text-3xl font-bold text-center px-3 pt-0.5 pb-1">
            Social Media Design and Animation
          </span>

          <div class="flex flex-wrap justify-center mt-5">
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0004.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0005.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0006.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0007.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0008.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0009.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0010.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0011.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0012.jpg" />
            </div>
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/designs-animations/0013.jpg" />
            </div>
          </div>

          <div class="flex items-center mt-5">
            <span class="block border-t w-[100px] me-5" />
            <span class="text-lg italic">
              *Some of these works are animated and the colors are based on their branding
            </span>
          </div>
        </div>

        <div class="flex flex-col items-end p-12">
          <span class="bg-[#BC4700] w-fit text-3xl font-bold text-center px-3 pt-0.5 pb-1">
            Posters and Illustrations
          </span>

          <div class="flex flex-wrap justify-center mt-5">
            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/posters-illustrations/0004.jpg" />
              <img src="./assets/images/works/posters-illustrations/0009.jpg" class="mt-4" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/posters-illustrations/0005.jpg" />
              <img src="./assets/images/works/posters-illustrations/0010.jpg" class="mt-4" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/posters-illustrations/0006.jpg" />
              <img src="./assets/images/works/posters-illustrations/0011.jpg" class="mt-4" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/posters-illustrations/0007.jpg" />
              <img src="./assets/images/works/posters-illustrations/0012.jpg" class="mt-4" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/posters-illustrations/0008.jpg" />
              <img src="./assets/images/works/posters-illustrations/0013.jpg" class="mt-4" />
            </div>
          </div>
        </div>

        <div class="flex flex-col p-12">
          <span class="bg-[#BC4700] w-fit text-3xl font-bold text-center px-3 pt-0.5 pb-1">
            Video Thumbnails
          </span>

          <div class="flex flex-wrap justify-center mt-5">
            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0004.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0005.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0006.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0007.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0008.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0009.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/video-thumbnails/0010.jpg" />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center p-12">
          <span class="bg-[#BC4700] w-fit text-3xl font-bold text-center px-3 pt-0.5 pb-1">
            Logo and Branding
          </span>

          <div class="flex flex-wrap justify-center mt-5">
            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/logo-branding/0004.jpg" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/logo-branding/0005.jpg" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/logo-branding/0006.jpg" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/logo-branding/0007.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/logo-branding/0008.jpg" />
            </div>

            <div class="basis-1/4 p-2">
              <img src="./assets/images/works/logo-branding/0009.jpg" />
            </div>

            <div class="basis-1/5 p-2">
              <img src="./assets/images/works/logo-branding/0010.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-shadow {
  color: #f1b434;
  text-shadow: 8px 0px 0px #fff;

  @apply text-9xl font-bold uppercase tracking-widest;
}
</style>
