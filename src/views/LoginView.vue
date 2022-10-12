<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <h3>Working?</h3>
    <Profile v-if="store.user" />
    <Auth v-else />
  </div>
</template>

<script setup lang="ts">
import { store } from "../store"
import { supabase } from "../supabase"
import Auth from "../components/Auth.vue"
import Profile from "../components/Profile.vue"

store.user = supabase.auth.user()
supabase.auth.onAuthStateChange((_, session) => {
  store.user = session.user
})
</script>