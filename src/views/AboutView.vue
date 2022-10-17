<script setup>
import { useCounterStore } from '@/stores/counter'
import { store } from "../store"
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"

const counter = useCounterStore();
console.log(counter)
</script>

<template>
  My About View
  <hr>
  <button @click="counter.increment()">{{ counter.count }}</button>
  <hr>
  <QuillEditor theme="snow"></QuillEditor>
</template>

<style>
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover {
  background-color: rgb(52, 52, 114);
}

.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button,
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button,
.ql-snow.ql-toolbar .ql-picker-label,
.ql-snow .ql-toolbar .ql-picker-label,
.ql-snow.ql-toolbar .ql-picker-item,
.ql-snow .ql-toolbar .ql-picker-item {
  background-color: rgb(06, 06, 08);
}
</style>