<template>
    <div>
        <v-row>
            <v-col>
                <User
                    v-for="follow in follows"
                    :key="follow.id"
                    :user="follow.following"
                ></User>
            </v-col>
        </v-row>
        <!-- Following: <Following v-for="followedUser in followedUsers" :following="followedUser.following" :key="followedUser.id"></Following> -->
    </div>
</template>


<script>
import User from './User.vue'
export default {
    components: {
        User
    },
    props: ['follows'],
}
</script>