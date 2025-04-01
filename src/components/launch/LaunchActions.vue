<template>
  <div class="flex gap-4">
    <RouterLink class="btn hidden md:flex btn-secondary btn-md" to="/">
      <IconArrowLeft class="size-6" /><span class=""> Back to launches</span>
    </RouterLink>
    <RouterLink class="btn btn-circle btn-secondary btn-md md:hidden" to="/">
      <IconArrowLeft class="size-6" />
    </RouterLink>
    <a
      v-if="launch?.links?.article_link"
      class="btn btn-primary"
      :href="launch?.links?.article_link"
      target="_blank"
      rel="noopener"
    >
      View Article
      <IconExternal class="size-5 text-secondary-content" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import IconExternal from '@/components/icons/IconExternal.vue'

import type { PropType } from 'vue'
import type { Launch } from '@/types.ts'

export default defineComponent({
  components: {
    IconArrowLeft,
    IconExternal,
  },
  props: {
    launch: {
      type: Object as PropType<Launch | undefined>,
      required: true,
    },
  },
})
</script>
