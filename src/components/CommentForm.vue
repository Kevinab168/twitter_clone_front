<template>
    <div>
        <input type="text" name="comment" id="comment" v-model="commentText">
        <button @click="createNewComment">Create a new comment</button>
    </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    name: 'CommentForm',
    data: () => ({
        commentText: ''
    }),
    computed: {
        ...mapState(['userID','token'])
    },
    methods: {
        async createNewComment() {
            const response = await this.$http.post('comments/', {
                comment_content: this.commentText,
                post: this.$route.params.id,
                user: this.userID
            })
            this.$emit('createComment', response.data)
        }
    }
}
</script>