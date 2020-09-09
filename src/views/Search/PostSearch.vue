<template>
    <div>
        <PostList :posts="posts"></PostList>
    </div>
</template>


<script>
import PostList from '../../components/PostList.vue'
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
    created() {
        fetch(`http://localhost:8000/api/posts?search=${this.searchQuery}`)
            .then(response => response.json())
            .then(data => this.posts = data)
    }
}
</script>