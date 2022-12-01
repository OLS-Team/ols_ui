<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <h3>Working?</h3>
    <Profile v-if="user.id != 0" />
    <Auth v-else />
    <hr>
    <h3>Login</h3>
    {{ user }}
    <hr>
  </div>
</template>

<script setup lang="ts">
import { useGlobalUserState, useGlobalUserMetaState } from "../store";
import { supabase } from "../supabase"
import Auth from "../components/Auth.vue"
import Profile from "../components/Profile.vue"

const user = useGlobalUserState()
const user_meta = useGlobalUserMetaState()

console.log(supabase.auth)
// console.log(store)
// store.user = supabase.auth.user()
supabase.auth.onAuthStateChange((_, session) => {
  user = session.user
})
</script>