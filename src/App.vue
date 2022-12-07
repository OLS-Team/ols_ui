<template>
  <Layout>
    <div class="container" style="padding: 50px 0 100px 0">
      <RouterLink to="/course">Course</RouterLink>
      &nbsp;|&nbsp;
      <RouterLink to="/creator">Creator</RouterLink>
      &nbsp;|&nbsp;
      <RouterLink to="/about">About</RouterLink>
      &nbsp;&nbsp;&nbsp;
      <!-- <span v-if="'id' in store.user">
      <RouterLink to="/login">{{ store.user_meta.username }}</RouterLink>
    </span>
    <span v-else>
      <RouterLink to="/login">Sign In</RouterLink>
    </span> -->
      <router-view />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalUserState, useGlobalUserMetaState } from "./store"
import { supabase, signInWithGitHub, signOutOfGitHub, getUser, getSession } from "./supabase"
import Layout from "./components/layouts/DefaultLayout.vue";

const user_meta = useGlobalUserMetaState()
// const user = useGlobalUserState()

const user = ref()
// user = supabase.auth.getUser()

window.addEventListener('hashchange', () => {
  checkUser()
})

const checkUser = async () => {
  console.log('check user called')
  const myUser = await supabase.auth.getUser()
  user.value = myUser
}

const session = ref()

const checkSession = async () => {
  console.log('check session called')
  session.value = await supabase.auth.getSession()
}

</script>