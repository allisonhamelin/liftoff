<template>
  <BaseLayout>
    <div class="w-4xl flex flex-col py-10 h-full">
      <div class="flex justify-between flex-wrap mb-14 gap-y-10">
        <div>
          <p class="text-secondary-200 text-base font-semibold mb-3 heading">Mission</p>
          <h1 class="text-5xl">{{ launch?.mission_name }}</h1>
        </div>
        <a
          v-if="launch?.links?.article_link"
          class="btn btn-secondary"
          :href="launch?.links?.article_link"
          target="_blank"
          rel="noopener"
        >
          View Article
          <IconExternal class="size-5 text-secondary-content" />
        </a>
      </div>
      <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8 md:gap-y-12">
        <div class="card card-border min-h-42 md:h-auto bg-base-100 w-full">
          <div class="card-body gap-10 flex-row justify-between items-center">
            <div class="flex flex-col h-full">
              <h2 class="card-title mb-4">Rocket</h2>
              <p class="text-2xl md:text-3xl grow-0">{{ launch?.rocket.rocket_name }}</p>
            </div>
            <div
              class="bg-secondary rounded-full size-22 sm:size-30 flex justify-center items-center"
            >
              <IconRocket class="size-10 sm:size-14 text-secondary-content" />
            </div>
          </div>
        </div>
        <div class="card card-border min-h-42 md:h-auto bg-base-100 w-full">
          <div class="card-body">
            <h2 class="card-title mb-4">Launch Date</h2>
            <p class="text-lg">{{ launchDate }}</p>
          </div>
        </div>
        <div class="card card-border bg-base-100 w-full md:col-span-2 min-h-42">
          <div class="card-body w-full">
            <h2 class="card-title mb-4">Details</h2>
            <p class="text-lg">{{ launch?.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '@/components/layout/BaseLayout.vue'
import IconExternal from '@/components/icons/IconExternal.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import type { Launch, Launches } from '@/types.ts'

interface LaunchViewData {
  launch: Launch | undefined
}

export default defineComponent({
  components: { BaseLayout, IconExternal, IconRocket },
  props: {
    id: String,
  },
  data(): LaunchViewData {
    return {
      launch: undefined,
    }
  },
  computed: {
    launchDate() {
      return this.launch
        ? new Date(this.launch?.launch_date_utc || '').toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : ''
    },
  },
  mounted() {
    const launches: Launches = JSON.parse(localStorage.getItem('launches') || '')
    this.launch = launches.find((launch) => launch.id === this.id)
  },
})
</script>
