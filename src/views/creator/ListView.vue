<template>
  <div>
    <h3>Creators</h3>

    <ul>
      <li v-for="creator in creators">
        {{ creator.profiles.username }}<br>
        &nbsp;&nbsp;&nbsp;(bio: {{creator.bio}})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../../supabase"
import { ref, onMounted, computed } from 'vue';

// console.log({ data: data, error: error })
const courses = ref()
const creators = ref()
const profiles = ref()
const courseCount = computed(() => {
  return courses.value.length
})

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

getCreators()
</script>