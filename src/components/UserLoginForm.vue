<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-text-field class="mx-auto"
                v-model="username"
                data-test="name-input"
                clearable
                placeholder="Username"
                prepend-icon=""
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
              <v-col cols="6">
                <v-text-field class="mx-auto"
                v-model="password"
                data-test="password-input"
                type="password"
                clearable
                placeholder="Password"
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn 
                large 
                data-test="login-btn"
                class="mx-auto" 
                dark 
                color="primary"
                @click="login"
                >
                    <v-icon left>mdi-login</v-icon>
                    <span>Login</span>
                </v-btn>
            </v-col>
        </v-row>
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
            console.log('Logged In')
            this.$store.dispatch('login', {username, userID, token})
            this.$router.push('/home')
        }
    }
    
}
</script>