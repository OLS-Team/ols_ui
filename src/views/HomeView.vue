<template>
  <div>
    <h3>Postively Disrupting Online Education</h3>
    <img alt="Vue logo" src="../assets/OLS-Logo-200-dk.png" />
    <h1>OLS</h1>
    <h3>Open Learning Server</h3>

    item:: {{ item }}

    <!--
    <button @click="getCourses">Get courses</button>
    <ul>
      <li v-for="course in courses">
        {{ course.name }} (by: <span v-for="creator in course.creators">{{ creator.profiles.username }},</span>)
      </li>
    </ul>
    <button @click="getProfiles">Get profiles</button>
    <ul>
      <li v-for="profile in profiles">
        {{ profile.username }}
      </li>
    </ul>
    <button @click="getCreators">Get creators</button>
    <ul>
      <li v-for="creator in creators">
        {{ creator.profiles.username }} (bio: {{ creator.bio }})
      </li>
    </ul>
    <RouterLink to="/login">Sign In</RouterLink>
    <hr>
    {{ test2 }}
    <hr>
    {{ test3 }}
-->
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../supabase";
import { ref, toRefs } from "vue";

const item = ref();
// console.log(data)
const getItem = async () => {
  try {
    const { data, error } = await supabase.from("profiles").select("*").limit(1).single();
    console.log(data, error)
    item.value = data?.username;
  } catch (e) {
    alert(e)
  }
}

getItem()
/*
item.value = data?.name;
import { supabase } from "../supabase"
import { ref, reactive } from 'vue';
import { useGlobalUserState, useGlobalUserMetaState } from "../store";

// console.log({ data: data, error: error })
const courses = ref()
const creators = ref()
const profiles = ref()

const getAuthUser = async () => {
  const authUser = await supabase.auth.getUser()
  return authUser
}
const test2 = getAuthUser()
const test3 = supabase.auth.getSession().then(session => session ? session.data.session?.user : null)

const test = reactive(localStorage.getItem('sb-' + import.meta.env.VITE_SUPABASE_ANON_KEY + '-auth-token'))
console.log(JSON.parse(localStorage[import.meta.env.VITE_SUPABASE_STORAGE_KEY]))
const user = useGlobalUserState(JSON.parse(localStorage[import.meta.env.VITE_SUPABASE_STORAGE_KEY]))
// user.value = JSON.parse(localStorage[import.meta.env.VITE_SUPABASE_STORAGE_KEY])
console.log(user.value.user.user_metadata)

console.log({ sb_auth: supabase.auth })
console.log({ sb_store_key: supabase.auth.storageKey })
console.log({ sb_check: supabase.session })
console.log({ user: user.value })

async function getCourses() {
  console.log('getting courses')
  const { data, error } = await supabase
    .from('courses')
    .select(`
      id,
      name,
      creators (
        profiles(
          username
        )
      )
    `)

  courses.value = data
  console.log(data)
  console.log(courses)
}

async function getCreators() {
  console.log('getting creators')
  const { data, error } = await supabase
    .from('creators')
    .select(`
      bio,
      profiles(
        username
      )
    `)

  creators.value = data
}
async function getProfiles() {
  console.log('getting profiles')
  const { data, error } = await supabase
    .from('profiles')
    .select()

  profiles.value = data
}
*/
</script>


<style>
img {
  border-color: aliceblue;
  border-width: 3px;
}

h1 {
  color: #286291;
}

h3 {
  color: #54afe6;
}
</style>