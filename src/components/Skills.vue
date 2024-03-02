<script setup lang="ts">
import { content } from '@/assets/data/skills'
</script>

<template>
  <section>
    <div class="relative container mx-auto py-8 border-r" />

    <div class="border-t">
      <div class="relative container mx-auto">
        <div
          class="absolute top-[2.5px] -right-[30.1px] flex items-center justify-center"
          style="width: 60px; height: 50px"
        >
          <img src="@/assets/images/star.png" alt="MJay Molit" />
        </div>

        <div id="skills" class="border-e">
          <div class="relative w-fit -mt-7">
            <span class="absolute bg-primary -ms-2.5 mt-0.5" style="width: 110%; height: 100%" />
            <span class="relative text-secondary text-5xl italic font-extrabold tracking-wider">
              Technical Skills
            </span>
          </div>

          <div class="flex pt-20 p-12">
            <div class="basis-1/6 flex flex-col pt-8 pb-6 me-5">
              <span
                v-for="(item, index) in content"
                :key="index"
                class="flex items-center justify-end text-xl text-end h-[70px] mb-2"
              >
                {{ item.skill }}
              </span>
            </div>

            <div class="basis-4/6 relative flex flex-col border-s border-b pt-8 pb-6">
              <span
                v-for="(item, index) in content"
                :key="index"
                class="bg-white w-[100%] h-[70px] mb-2"
                :style="`width: ${item.level}%;`"
              />

              <div class="absolute -bottom-10 flex justify-between" style="width: 100%">
                <span class="text-2xl font-mono text-start">0</span>
                <span
                  v-for="(item, index) in [20, 40, 60, 80, 100]"
                  :key="index"
                  class="basis-1/5 text-2xl font-mono text-end"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <div class="basis-1/6 flex flex-col pt-8 pb-6 ms-14">
              <div
                v-for="(item, itemIndex) in content"
                :key="itemIndex"
                class="flex items-center justify-start h-[70px] mb-2"
              >
                <span
                  v-for="(icon, iconIndex) in item.icons"
                  :key="iconIndex"
                  class="bg-white text-secondary text-3xl font-bold px-2.5 py-2 rounded-md me-2"
                >
                  {{ icon }}
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
