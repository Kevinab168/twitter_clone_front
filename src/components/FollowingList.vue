<template>
    <div>
        Following: <Following v-for="followedUser in followedUsers" :following="followedUser.following" :key="followedUser.id"></Following>
    </div>
</template>


<script>
import Following from './Following.vue'
import { mapState } from 'vuex'
export default {
    components: {
        Following
    },
    data: () => ({
        followedUsers: []
    }),
    props: ['user'],
    computed: {
        ...mapState(['token'])
    },
    methods: {
        async getFollowingList() {
            const response = await this.$http.get(`follows?follower=${this.user}`)
            this.followedUsers = response.data
        }
    },
    created() {
        this.getFollowingList()
        console.log('You got to this point')
    }
}
</script>