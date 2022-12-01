<template>
  <form class="row flex flex-center" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <h2>Login</h2>
      <div>
        <span @click="setAuthEmail()">Email</span>
        &nbsp;|&nbsp;
        <span @click="setAuthGithub()">GitHub</span>
      </div>
      <div v-show="authType == 'email'">
        <p class="description">Sign in via magic link with your email below</p>
        <div>
          <input class="inputField" type="email" placeholder="Your email" v-model="email" />
        </div>
        <div>
          <input type="submit" class="button block" :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading" />
        </div>
      </div>
      <div v-show="authType == 'github'">
        <p @click="signInWithGitHub()">Sign In with GitHub</p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue"
import { useGlobalUserState, useGlobalUserMetaState } from "../store";
import { supabase } from "../supabase"

const loading = ref(false)
const email = ref("")
const authType = ref("email")
// const store = useGlobalState()
const user = useGlobalUserState()
const user_meta = useGlobalUserMetaState()

const setAuthEmail = () => {
  authType.value = 'email'
}

const setAuthGithub = () => {
  authType.value = 'github'
}

const signInWithGitHub = async () => {
  try {
    console.log(supabase.auth)
    console.log(supabase)
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    user.value = supabase.auth.user()
    // user_meta.value = data.app_metadata
    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signIn({ email: email.value })
    if (error) throw error
    alert("Check your email for the login link!")
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>
