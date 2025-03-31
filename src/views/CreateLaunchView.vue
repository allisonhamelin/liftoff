<template>
  <div>
    <LayoutNavbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'

export default defineComponent({
  components: {
    LayoutNavbar,
  },
})
</script>
