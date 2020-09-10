<template>
    <div>
        <p>Followers:</p>
        <Follower v-for="follower in followers" :follower="follower.follower" :key="follower.id"></Follower>
    </div>
</template>


<script>
import Follower from './Follower.vue'
import { mapState } from 'vuex'
export default {
    components: {
        Follower
    },
    data: () => ({
        followers: []
    }),
    computed: {
        ...mapState(['token'])
    },
    props: ['user'],
    async created() {
        const response = await this.$http.get(`follows?following=${this.user}`)
        this.followers = response.data
    }
}
</script>