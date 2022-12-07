<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const user = useUserStore();
</script>

<template>
  <div class="header">
    <div style="float: left">Logo</div>
    <h3 style="float: left">Open Learning Server</h3>
    <div style="float: right">
      <span v-if="user.name.length">{{ user.name }}</span>
      <span v-else><router-link to="/login">Login</router-link></span>
    </div>
    <br />
    <router-link to="/">Home</router-link>
    &nbsp;|&nbsp;
    <router-link to="/about">About Us</router-link>
    &nbsp;|&nbsp;
    <router-link to="/courses">Courses</router-link>
    &nbsp;|&nbsp;
    <router-link to="/creators">Creators</router-link>
  </div>
  <slot></slot>

  <footer>Footer

    <button @click="signInWithGitHub">Sign In Via GitHub</button>
    &nbsp;
    <button @click="signOutOfGitHub">Sign Out Of GitHub</button>
    &nbsp;
    <button @click="checkUser">Check User</button>
    &nbsp;
    <button @click="checkSession">Check Session</button>
    <hr>

    <p>user_meta: {{ user_meta }}</p>
    <p>user: {{ user }}</p>
    <p>session: {{ session }}</p>
    <!-- <p>{{ user }}</p> -->
  </footer>
</template>
