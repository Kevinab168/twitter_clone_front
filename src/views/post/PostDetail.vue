<template>
    <div>
        <CommentForm @createComment="addNewComment"></CommentForm>
        <v-row>
            <v-col>
                  <v-card dark color="#5E89A1"  class="mx-auto" max-width="400">
                      <v-card-title>
                          <v-icon large left>
                              mdi-perm_identity
                          </v-icon>
                          <span class="title">User</span>
                      </v-card-title>
                      <v-card-text>
                          <span>"{{ post.content }}"</span>                          
                           <v-row class="my-6" align="center" justify="end">
                            <v-icon class="mr-2">mdi-heart</v-icon>
                            <v-icon class="mr-2">mdi-message</v-icon>
                            <v-icon class="mr-2">mdi-account-box</v-icon>
                          </v-row>
                          <v-divider></v-divider>
                          <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>
                          <v-divider></v-divider>
                      </v-card-text>
                      <router-view/>
                  </v-card>
                  
            </v-col>
        </v-row>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import Comment from '@/components/Comment.vue'
import CommentForm from '@/components/CommentForm.vue'

export default {
    components: {
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