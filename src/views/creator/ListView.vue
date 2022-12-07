<template>
  <div>
    <h3>Creators</h3>
    <!--
    <ul>
      <li v-for="creator in creators">
        {{ creator.profiles.username }}<br>
        &nbsp;&nbsp;&nbsp;(bio: {{ creator.bio }})
      </li>
    </ul>
  -->

    item: {{ item }}
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../../supabase"
import { ref, computed } from 'vue';

// console.log({ data: data, error: error })
// const courses = ref()
// const creators = ref()
// const profiles = ref()
const item = ref()
// const courseCount = computed(() => {
//   return courses.value.length
// })
const { data } = await supabase.from("mg4").select("*").limit(1).single();
item.value = data?.name;
console.log(data)
async function getCreators() {
  console.log('getting creators soon')
  /*
  const { data, error } = await supabase
    .from('creators')
    .select(`
      bio,
      profiles(
        username
      )
    `)

  creators.value = data
  */
}

getCreators()
</script>