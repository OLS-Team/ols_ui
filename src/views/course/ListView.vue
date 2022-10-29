<template>
  <div>
    <h3>Courses</h3>

    <ul>
      <li v-for="course in courses">
        <RouterLink :to="{name: 'course.show', params:{id: course.id}}">
          {{ course.name }}
        </RouterLink><br>
        &nbsp;&nbsp;&nbsp;(&nbsp;by:
        <span v-for="(creator, index) in course.creators">{{creator.profiles.username}}<span
            v-if="index != (course.creators.length - 1)">, </span></span>
        &nbsp;)<br>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../../supabase"
import { ref, onMounted, computed } from 'vue';
import router from '../../router/index';

// console.log({ data: data, error: error })
const courses = ref()
const creators = ref()
const profiles = ref()
const courseCount = computed(() => {
  return courses.value.length
})

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

// onMounted(() => {
//   getCourses()
// })
getCourses()
</script>