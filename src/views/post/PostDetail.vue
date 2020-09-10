<template>
    <div>
        <Post :post="post"></Post>
        <CommentForm @createComment="addNewComment"></CommentForm>
        <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import Post from '../../components/Post.vue'
import Comment from '../../components/Comment.vue'
import CommentForm from '../../components/CommentForm.vue'

export default {
    components: {
        Post,
        Comment,
        CommentForm
    },
    data: () => ({
        post: '',
        comments: [],
    }),
    methods: {
        async getPost() {
            const postID = this.$route.params.id
            const response = await this.$http.get(`posts/${postID}/`)
            this.post = response.data
        },
        async getComments() {
            const postID = this.$route.params.id
            const response = await this.$http.get(`posts/${postID}/comments/`)
            this.comments = response.data
        },
        addNewComment(comment) {
            this.comments.unshift(comment)
        }

    },
    computed: {
        ...mapState(['token'])
    },
    created() { 
        this.getPost()
        this.getComments()
    }
}
</script>