<template>
  <v-app>
    <div id="app">
      <v-navigation-drawer 
        class="deep-purple accent-4" 
        dark
        app
        >
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Chirper
          </v-list-item-title>
          <v-list-item-subtitle>
            Welcome {{ user }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item to="/home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item to="/explore">
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item :to="userpage">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid >
            <v-row>
              <v-col cols="8">
                <router-view></router-view>
              </v-col>
              <v-col cols="4">
                <AppSearch></AppSearch>
              </v-col>
            </v-row>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import AppSearch from '@/components/AppSearch.vue'
export default {
  computed: { 
    ...mapState(['user', 'token', 'userID']),
    userpage() {
      return `/profile/${this.userID}`
    },
  },
  data: () => ({
    routes: []
  }),
  methods: {
    ...mapMutations(['setUser'])
  },
  components: {
    AppSearch
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