<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-text-field class="mx-auto"
                v-model="username"
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
                class="mx-auto" 
                dark 
                color="primary"
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
            this.$store.dispatch('login', {username, userID, token})
        }
    }
    
}
</script>