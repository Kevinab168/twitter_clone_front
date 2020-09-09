<template>
    <div>
        <router-link :to="link"><p>{{ post.content }}</p></router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: ['post'],
    computed: {
        link() {
            return `/posts/${this.post.id}`
        }
    }
}
</script>