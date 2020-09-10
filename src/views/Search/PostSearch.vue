<template>
    <div>
        <PostList :posts="posts"></PostList>
    </div>
</template>


<script>
import PostList from '@/components/PostList.vue'
import { mapState } from 'vuex'
export default {
    components: {
        PostList
    },
    data: () => ({
        posts: []
    }),
    computed: {
        ...mapState(['searchQuery']),
    },
    async created() {
        const response = await this.$http.get(`posts?search=${this.searchQuery}`)
        this.posts = response.data
    }
}
</script>