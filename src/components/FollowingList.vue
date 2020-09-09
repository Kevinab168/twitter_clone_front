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
            const response = await fetch(`http://localhost:8000/api/follows?follower=${this.user}`, {
                headers: {
                    'Authorization': `Token ${this.token}`
                }
            })
            const data = await response.json()
            this.followedUsers = data
        }
    },
    created() {
        this.getFollowingList()
        console.log('You got to this point')
    }
}
</script>