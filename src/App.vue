<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <RouterLink to="/">Home</RouterLink>
    &nbsp;|&nbsp;
    <RouterLink to="/course">Courses</RouterLink>
    &nbsp;|&nbsp;
    <RouterLink to="/creator">Creators</RouterLink>
    &nbsp;|&nbsp;
    <RouterLink to="/about">About</RouterLink>
    &nbsp;&nbsp;&nbsp;
    <span v-if="'id' in store.user">
      <RouterLink to="/login">{{ store.user_meta.username }}</RouterLink>
    </span>
    <span v-else>
      <RouterLink to="/login">Sign In</RouterLink>
    </span>
    <h3>Open Learning Server</h3>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { store } from "./store"
</script>