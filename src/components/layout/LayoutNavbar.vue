<template>
  <div class="navbar bg-base-100 shadow-sm flex justify-between px-4">
    <RouterLink to="/" class="btn btn-ghost normal-case text-3xl heading"> LIFTOFF </RouterLink>

    <nav role="navigation" aria-label="Main menu" class="hidden md:block">
      <ul class="hidden md:flex menu menu-horizontal px-1 gap-3">
        <li><RouterLink class="text-secondary text-base" to="/">Home</RouterLink></li>
        <li>
          <RouterLink class="text-secondary text-base" to="/create-launch">
            Create Launch
          </RouterLink>
        </li>
      </ul>
    </nav>

    <MobileNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MobileNav from '@/components/layout/MobileNav.vue'

export default defineComponent({
  components: { MobileNav },
})
</script>
