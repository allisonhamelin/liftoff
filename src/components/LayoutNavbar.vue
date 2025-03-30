<template>
  <header>
    <div class="navbar bg-base-100 shadow-sm flex justify-between px-4">
      <a href="/" class="btn btn-ghost normal-case text-3xl header"> LIFTOFF </a>
      <div class="flex items-center gap-4">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink class="text-secondary" to="/">Home</RouterLink></li>
          <li>
            <RouterLink class="text-secondary" href="/create-launch">Create Launch</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
