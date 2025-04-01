<template>
  <nav role="navigation" aria-label="Main menu" class="md:hidden dropdown dropdown-end">
    <button aria-expanded="true" class="btn btn-ghost rounded-field">
      <IconMenu class="size-6" aria-hidden="true" focusable="false" />
      <span class="hidden" aria-hidden="false">Menu</span>
    </button>
    <ul class="visible menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
      <li><RouterLink class="text-secondary text-base" to="/">Home</RouterLink></li>
      <li>
        <RouterLink class="text-secondary text-base" to="/create-launch">
          Create Launch
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconMenu from '@/components/icons/IconMenu.vue'

export default defineComponent({
  components: { IconMenu },
})
</script>
