<template>
    <div >
        <v-row>
            <v-col>
                <v-card width="400"  class="mx-auto">
                    <v-card-title>
                        Make a Comment
                    </v-card-title>
                    <v-card-text>
                        <v-textarea solo  maxlength="100" flat auto-grow dense v-model="commentText"></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                          <v-row align="center" justify="end">
                              <v-btn icon class="mr-4" @click="createNewComment">
                                <v-icon >mdi-comment</v-icon>
                              </v-btn>
                          </v-row>
                      </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
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