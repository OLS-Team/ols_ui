<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <h3>Site Home Page</h3>


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

  </div>
</template>

<script setup lang="ts">
import { supabase } from "../supabase"
import { ref } from 'vue';

// console.log({ data: data, error: error })
const courses = ref()
const creators = ref()
const profiles = ref()

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
</script>