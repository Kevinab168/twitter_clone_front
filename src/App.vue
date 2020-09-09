<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link :to="userpage">Profile</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: { 
    ...mapState(['user', 'token']),
    userpage() {
      return `/profile/${this.user}`
    },
  },
  methods: {
    ...mapMutations(['setUser'])
  },
  created() {
    if (localStorage.credtionals) {
      const credtionals = JSON.parse(localStorage.credtionals)
      this.setUser(credtionals)
    }
  }
}
</script>


