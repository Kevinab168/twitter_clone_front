<template>
    <div>
        <v-row>
            <v-col>
                <v-card
                    hover
                    :to="userPage"
                    rounded="pill"
                    max-width="500"
                    
                >
                    <v-card-title>
                        <v-avatar>
                            <v-icon
                                large
                                left
                            >mdi-account-circle</v-icon>
                        </v-avatar>
                        <span title>{{ user.username }}</span>
                    </v-card-title>
                    <v-card-subtitle class="ml-5">
                        <span>@{{ user.username}}</span>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'User',
    props:['user'],
    computed: {
        userPage() {
            return `/profile/${this.user.id}`
        }
    }
}
</script>