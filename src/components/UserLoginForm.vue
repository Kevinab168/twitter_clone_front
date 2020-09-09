<template>
    <div>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <button @click="login">Log In</button>
    </div>
</template>


<script>
// import { mapActions } from 'vuex'

export default {
    name: 'UserLoginForm',
    data: () => ({
        username: '',
        password: '',
    }),
    methods: {
        login() {
            this.$store.dispatch('login', {username: this.username, password: this.password})
        }
    }
    
}
</script>