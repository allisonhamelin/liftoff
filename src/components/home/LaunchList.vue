<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li
      v-for="item in launches"
      :key="item.id"
      class="not-last:[&_a]:rounded-b-none not-last:[&_a]:border-b-2 not-last:[&_a]:border-base-300"
    >
      <RouterLink :to="`/launches/${item.id}`" class="list-row flex flex-row p-6">
        <RocketImage class="hidden md:flex shrink-0" />
        <div class="flex flex-col w-full">
          <div class="flex justify-between w-full mb-6 md:mb-4 gap-4">
            <h2 class="text-2xl mb-2">Mission: {{ item.mission_name || item.id }}</h2>
            <p class="text-xl shrink-0">{{ item.launch_year }}</p>
          </div>
          <p class="text-base font-light">{{ item.details }}</p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import RocketImage from '@/components/RocketImage.vue'
import type { Launches } from '@/types'

export default defineComponent({
  components: { RocketImage },
  props: {
    launches: {
      type: Array as PropType<Launches>,
    },
  },
})
</script>
