<script setup lang="ts">
import { content, education, experience } from '@/assets/data/about'
</script>

<template>
  <section class="-mt-40">
    <div class="relative container mx-auto py-60 -mb-60 border-l border-r pointer-events-none" />

    <div class="border-t">
      <div class="relative container mx-auto">
        <div
          class="absolute top-[2.5px] -right-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="@/assets/images/star.png" alt="MJay Molit" />
        </div>

        <div id="about" class="border-e">
          <div class="relative w-fit -mt-7">
            <span class="absolute bg-primary -ms-2.5 mt-0.5" style="width: 110%; height: 100%" />
            <span class="relative text-secondary text-5xl italic font-extrabold tracking-wider">
              About me
            </span>
          </div>

          <div class="flex pt-8">
            <div class="basis-1/2 flex flex-col p-12">
              <div class="flex">
                <div class="basis-1/3 me-10">
                  <img :src="content.image" :alt="content.fullName" />
                </div>

                <div class="basis-2/3 flex flex-col justify-center">
                  <div class="flex flex-col w-fit">
                    <span class="text-6xl font-bold tracking-wider uppercase">{{
                      content.fullName
                    }}</span>
                    <span class="text-2xl font-mono text-center mt-1.5">{{ content.email }}</span>
                  </div>

                  <p class="text-lg italic mt-5">"{{ content.quote }}"</p>
                </div>
              </div>

              <span class="text-4xl font-bold tracking-wide mt-10 mb-5">Education</span>

              <div
                v-for="(educationItem, educationIndex) in education"
                :key="educationIndex"
                class="flex flex-col mb-8"
              >
                <div class="flex mb-4">
                  <div class="flex flex-col basis-2/3">
                    <span class="bg-accent text-3xl font-bold text-center pt-0.5 pb-1">
                      {{ educationItem.title }}
                    </span>

                    <span class="text-xl italic text-center mt-1.5">{{
                      educationItem.degree
                    }}</span>
                  </div>

                  <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                    {{ educationItem.participationYear }}
                  </span>
                </div>

                <span
                  v-for="(item, itemIndex) in educationItem.items"
                  :key="itemIndex"
                  class="text-xl"
                >
                  • {{ item }}
                </span>
              </div>
            </div>

            <div class="basis-1/2 flex flex-col p-12">
              <span class="text-4xl font-bold tracking-wide mb-5">Work Experience</span>

              <div
                v-for="(experienceItem, experienceIndex) in experience"
                :key="experienceIndex"
                class="flex flex-col mb-8"
              >
                <div class="flex mb-4">
                  <div class="flex flex-col basis-2/3">
                    <span class="bg-accent text-3xl font-bold text-center pt-0.5 pb-1">
                      {{ experienceItem.title }}
                    </span>

                    <span class="text-xl italic text-center mt-1.5">
                      {{ experienceItem.company }}
                    </span>
                  </div>

                  <span class="basis-1/3 text-3xl font-bold italic text-center pt-0.5 pb-1">
                    {{ experienceItem.workingYear }}
                  </span>
                </div>

                <span v-for="item in experienceItem.items" class="text-xl">
                  • {{ item?.main || item }}
                  <small v-if="Boolean(item?.note)" class="text-base text-white/75">
                    ( {{ item?.note }} )
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
