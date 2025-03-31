<template>
  <header>
    <LayoutNavbar />
  </header>
  <main class="flex flex-col">
    <div class="w-full flex justify-center bg-base-300 px-6 h-full">
      <div class="w-[1280px] flex flex-col py-10 h-full">
        <slot />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'

export default defineComponent({
  components: { LayoutNavbar },
})
</script>
