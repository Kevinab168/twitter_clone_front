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
            const response = await fetch('http://localhost:8000/api/comments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Token ${this.token}`
                },
                body: JSON.stringify({
                    comment_content: this.commentText,
                    post: this.$route.params.id,
                    user: this.userID
                })
            })
            const comment = await response.json()
            this.$emit('createComment', comment)
        }
    }
}
</script>