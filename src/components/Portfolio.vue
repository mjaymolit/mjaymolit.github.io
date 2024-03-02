<script setup lang="ts">
import { content } from '@/assets/data/portfolio'

const getItemAlign = (target = 'left') => {
  if (target === 'right') return 'end' || 'flex-end'
  if (target === 'center') return 'center'
  return 'start' || 'flex-start'
}
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
          <img src="@/assets/images/star.png" />
        </div>

        <div id="works" class="border-e">
          <div class="relative w-fit -mt-7">
            <span class="absolute bg-primary -ms-2.5 mt-0.5" style="width: 110%; height: 100%" />
            <span class="relative text-secondary text-5xl italic font-extrabold tracking-wider">
              My Works
            </span>
          </div>

          <div class="flex flex-col pt-8 pb-40">
            <div
              v-for="(item, itemIndex) in content"
              :key="itemIndex"
              class="flex flex-col p-12"
              :style="`align-items: ${getItemAlign(item.titleAlign)};`"
            >
              <span class="bg-accent w-fit text-3xl font-bold text-center px-3 pt-0.5 pb-1">
                {{ item.title }}
              </span>

              <div class="flex flex-wrap items-start justify-center mt-5">
                <div
                  v-for="(target, targetIndex) in item.items"
                  :key="targetIndex"
                  class="p-2"
                  :style="`width: ${item.itemsSize}%;`"
                >
                  <div v-if="Array.isArray(target)">
                    <img
                      v-for="(image, imageIndex) in target"
                      :key="imageIndex"
                      :src="image"
                      class="mb-4"
                    />
                  </div>

                  <img v-else :src="target" />
                </div>
              </div>

              <div v-if="Boolean(item?.footnote)" class="flex items-center mt-5">
                <span class="block border-t w-[100px] me-5" />
                <span class="text-lg italic">
                  {{ item?.footnote }}
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
