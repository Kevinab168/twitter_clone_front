<template>
  <v-app>
    <div id="app">
      <v-app-bar app dark dense>
        <v-toolbar-title>Chirper</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/home">
            <v-btn icon>
              <v-icon class="mx-3">mdi-home</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/explore">
            <v-btn icon>
              <v-icon class="mx-3">mdi-magnify</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/profile">
            <v-btn icon>
              <v-icon class="mx-3">mdi-account-box</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/login">
            <v-btn icon>
              <v-icon class="mx-3">mdi-login</v-icon>
            </v-btn>
        </router-link>
      </v-app-bar>
      <v-main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
      </v-main>
    </div>
  </v-app>
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
    if (localStorage.credentials) {
      const credentials = JSON.parse(localStorage.credentials)
      this.setUser(credentials)
      this.$http.defaults.headers.common['Authorization'] = credentials.token
    }
  },
  
}
</script>