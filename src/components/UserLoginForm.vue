<template>
    <div>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <button @click="login">Log In</button>
    </div>
</template>


<script>
export default {
    name: 'UserLoginForm',
    data: () => ({
        username: '',
        password: '',
    }),
    methods: {
        async login() {
            const username = this.username
            const response = await this.$http.post('login/', {
                username: this.username,
                password: this.password
            })
            const token = response.data.token 
            const userID = response.data.id
            this.$http.defaults.headers.common['Authorization'] = token
            this.$store.dispatch('login', {username, userID, token})
        }
    }
    
}
</script>