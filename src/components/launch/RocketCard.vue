<template>
  <div class="card card-border min-h-42 md:h-auto bg-base-100 w-full">
    <div class="card-body gap-10 flex-row justify-between items-center">
      <div class="flex flex-col h-full">
        <h2 class="card-title mb-4">Rocket</h2>
        <p class="text-2xl md:text-3xl grow-0">{{ launch?.rocket.rocket_name }}</p>
      </div>
      <RocketImage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RocketImage from '@/components/RocketImage.vue'

import type { PropType } from 'vue'
import type { Launch } from '@/types.ts'

export default defineComponent({
  components: { RocketImage },
  props: {
    launch: {
      type: Object as PropType<Launch | undefined>,
      required: true,
    },
  },
})
</script>
