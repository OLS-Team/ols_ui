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
    <!-- <span v-if="'id' in store.user">
      <RouterLink to="/login">{{ store.user_meta.username }}</RouterLink>
    </span>
    <span v-else>
      <RouterLink to="/login">Sign In</RouterLink>
    </span> -->
    <h3>Open Learning Server</h3>
    <router-view />
    <p>user_meta: {{ user_meta }}</p>
    <p>user: {{ user }}</p>
    <p>session: {{ session }}</p>
    <!-- <p>{{ user }}</p> -->
    <hr>
    <button @click="signInWithGitHub">Sign In Via GitHub</button>
    <hr>
    <button @click="signOutOfGitHub">Sign Out Of GitHub</button>
    <hr>
    <button @click="checkUser">Check User</button>
    <hr>
    <button @click="checkSession">Check Session</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalUserState, useGlobalUserMetaState } from "./store"
import { supabase, signInWithGitHub, signOutOfGitHub, getUser, getSession } from "./supabase"

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