<template>
  <div class="card card-border bg-base-100 w-full md:col-span-2 min-h-42">
    <div class="card-body w-full">
      <h2 class="card-title mb-4">Details</h2>
      <p class="text-lg">{{ launch?.details }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import type { PropType } from 'vue'
import type { Launch } from '@/types.ts'

export default defineComponent({
  props: {
    launch: {
      type: Object as PropType<Launch | undefined>,
      required: true,
    },
  },
})
</script>
