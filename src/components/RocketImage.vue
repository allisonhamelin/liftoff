<template>
  <div class="bg-secondary rounded-full size-22 sm:size-30 flex justify-center items-center">
    <IconRocket class="size-10 sm:size-14 text-secondary-content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconRocket from '@/components/icons/IconRocket.vue'

export default defineComponent({
  components: { IconRocket },
})
</script>
