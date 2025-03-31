<template>
  <div class="navbar bg-base-100 shadow-sm flex justify-between px-4">
    <RouterLink to="/" class="btn btn-ghost normal-case text-3xl heading"> LIFTOFF </RouterLink>
    <div class="flex items-center gap-4">
      <ul class="menu menu-horizontal px-1 gap-3">
        <li><RouterLink class="text-secondary text-base" to="/">Home</RouterLink></li>
        <li>
          <RouterLink class="text-secondary text-base" to="/create-launch">
            Create Launch
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutNavbar',
})
</script>
