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
import { useRouter, useRoute } from 'vue-router'

const courses = ref()
const creators = ref()
const profiles = ref()
const route = useRoute()

async function getCourse() {
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
    .eq('id', route.params.id)

  courses.value = data
}

onMounted(() => {
  getCourse()
})
</script>