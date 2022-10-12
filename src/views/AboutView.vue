<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore();
console.log(counter)
</script>

<template>
  My About View
  <hr>
  <button @click="counter.increment()">{{ counter.count }}</button>
</template>