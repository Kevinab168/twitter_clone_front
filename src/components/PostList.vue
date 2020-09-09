<template>
    <div>
        <Post v-for="post in posts" :key="post.id" :post="post"></Post>
    </div>
</template>

<script>
import Post from './Post.vue'


export default {
    name: 'PostList',
    components: {
        Post,
    },
    props: ['posts'],
}
</script>