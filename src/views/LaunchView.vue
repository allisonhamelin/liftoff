<template>
  <BaseLayout>
    <div class="py-16">
      <div class="lg:w-4xl flex flex-col h-full">
        <div class="flex justify-between flex-wrap mb-14 gap-10">
          <div>
            <p class="text-secondary-200 text-base font-semibold mb-3 heading">Mission</p>
            <h1 class="text-5xl">{{ launch?.mission_name }}</h1>
          </div>
          <LaunchActions :launch="launch" />
        </div>
        <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8 md:gap-y-12">
          <RocketCard :launch="launch" />
          <DateCard :launch="launch" />
          <div class="card card-border bg-base-100 w-full md:col-span-2 min-h-42">
            <div class="card-body w-full">
              <h2 class="card-title mb-4">Details</h2>
              <p class="text-lg">{{ launch?.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '@/components/layout/BaseLayout.vue'
import DateCard from '@/components/launch/DateCard.vue'
import LaunchActions from '@/components/launch/LaunchActions.vue'
import RocketCard from '@/components/launch/RocketCard.vue'

import type { Launch, Launches } from '@/types.ts'

interface LaunchViewData {
  launch: Launch | undefined
}

export default defineComponent({
  components: { BaseLayout, DateCard, LaunchActions, RocketCard },
  props: {
    id: String,
  },
  data(): LaunchViewData {
    return {
      launch: undefined,
    }
  },
  mounted() {
    const launches: Launches = JSON.parse(localStorage.getItem('launches') || '')
    this.launch = launches.find((launch) => launch.id === this.id)
  },
})
</script>
