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
        const response = await fetch(`http://localhost:8000/api/follows?following=${this.user}`, {
            headers: {
                'Authorization': `Token ${this.token}`
            }
        })
        const data = await response.json()
        this.followers = data
    }
}
</script>