<template>
  <span ref="trigger" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ScrollTriggerData {
  observer: IntersectionObserver | null
}

export default defineComponent({
  data(): ScrollTriggerData {
    return {
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        this.$emit('intersected')
      }
    })

    const trigger = this.$refs.trigger as HTMLElement
    this.observer.observe(trigger)
  },
  beforeUnmount() {
    this.observer?.disconnect()
  },
})
</script>
