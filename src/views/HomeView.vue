<template>
  <BaseLayout>
    <div class="w-[1280px] flex flex-col py-16 md:py-10 h-full">
      <div class="flex justify-between mb-10 gap-x-10 gap-y-6 flex-wrap">
        <h1 class="text-4xl">Launches</h1>
        <div class="flex gap-2 items-center">
          <label class="input w-60 md:w-80">
            <IconSearch class="size-4" />
            <input type="search" placeholder="Search" @input="onSearch" />
          </label>
          <button class="btn btn-secondary btn-sm" @click="onSort">
            Sort by year
            <IconArrowDown
              class="size-3 transition-transform text-secondary-content"
              :class="{ 'rotate-180': sort === 'asc' }"
            />
          </button>
        </div>
      </div>

      <LaunchList :launches="launchesInView" />

      <ScrollTrigger class="mt-20" @intersected="loadMore" />
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '@/components/layout/BaseLayout.vue'
import IconArrowDown from '@/components/icons/IconChevronDown.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import LaunchList from '@/components/home/LaunchList.vue'
import ScrollTrigger from '@/components/ScrollTrigger.vue'
import payloadJson from '@/Payload.json'

import type { Launch, Launches } from '@/types'

interface HomeViewData {
  page: number
  pageSize: number
  search: string
  sort: string
  filteredSortedLaunches: Launches
  launchesInView: Launches
}

export default defineComponent({
  components: {
    BaseLayout,
    IconArrowDown,
    IconSearch,
    LaunchList,
    ScrollTrigger,
  },
  setup() {
    if (!localStorage.launches) {
      localStorage.setItem('launches', JSON.stringify(payloadJson.data.launches))
    }

    const launches: Launches = JSON.parse(localStorage.getItem('launches') || '')

    return { launches }
  },
  data(): HomeViewData {
    return {
      page: 1,
      pageSize: 5,
      search: '',
      sort: 'asc',
      filteredSortedLaunches: [],
      launchesInView: [],
    }
  },
  mounted() {
    this.filterAndSortLaunches()
  },
  methods: {
    filterAndSortLaunches() {
      let filteredLaunches = this.launches

      if (this.search !== '') {
        filteredLaunches = this.getFilteredLaunches()
      }

      filteredLaunches.sort(this.sortLaunches)

      this.filteredSortedLaunches = filteredLaunches
      this.launchesInView = filteredLaunches.slice(0, this.page * this.pageSize)
    },
    getFilteredLaunches() {
      return this.launches.filter((launch) => {
        return (
          launch.mission_name.toLowerCase().includes(this.search.toLowerCase()) ||
          launch.rocket.rocket_name.toLowerCase().includes(this.search.toLowerCase()) ||
          launch.launch_year.includes(this.search)
        )
      })
    },
    sortLaunches(launchA: Launch, launchB: Launch) {
      if (this.sort === 'desc') {
        if (launchA.launch_year < launchB.launch_year) {
          return 1
        } else if (launchA.launch_year > launchB.launch_year) {
          return -1
        }
        return 0
      }

      if (launchA.launch_year < launchB.launch_year) {
        return -1
      } else if (launchA.launch_year > launchB.launch_year) {
        return 1
      }
      return 0
    },
    onSearch(event: Event) {
      const target = event.target as HTMLInputElement
      this.search = target?.value
      this.filterAndSortLaunches()
    },
    loadMore() {
      this.page++
      this.launchesInView = this.filteredSortedLaunches.slice(0, this.page * this.pageSize)
    },
    onSort() {
      if (this.sort === 'asc') {
        this.sort = 'desc'
      } else if (this.sort === 'desc') {
        this.sort = 'asc'
      }
      this.filterAndSortLaunches()
    },
  },
})
</script>
