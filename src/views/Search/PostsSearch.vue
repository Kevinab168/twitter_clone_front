<template>
    <div>
        <PostList :posts="posts"></PostList>
    </div>
</template>


<script>
import PostList from '@/components/PostList.vue'
export default {
    components: {
        PostList
    },
    data: () => ({
        posts: []
    }),
    props: ['search'],
    async created() {
        const response = await this.$http.get(`posts?search=${this.search}`)
        this.posts = response.data
    }
}
</script>