<template>
  <div>
    <LayoutNavbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutNavbar from '@/components/LayoutNavbar.vue'

export default defineComponent({
  components: {
    LayoutNavbar,
  },
})
</script>
