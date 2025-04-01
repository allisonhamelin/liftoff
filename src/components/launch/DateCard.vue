<template>
  <div class="card card-border min-h-42 md:h-auto bg-base-100 w-full">
    <div class="card-body">
      <h2 class="card-title mb-4">Launch Date (UTC)</h2>
      <p class="text-lg">{{ launchDate }}</p>
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
  computed: {
    launchDate() {
      if (this.launch) {
        return new Date(this.launch?.launch_date_utc || '').toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      }
      return ''
    },
  },
})
</script>
