<template>
    <div >
        <v-row>
            <v-col>
                <v-card width="400"  class="mx-auto">
                    <v-card-title>
                        Write Something
                    </v-card-title>
                    <v-card-text>
                        <v-textarea solo flat auto-grow dense 
                        data-test="post-content-box"
                        v-model="userTextContent"></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                          <v-row align="center" justify="end">
                              <v-btn icon class="mr-4" data-test="make-post-button" @click="submitPost">
                                <v-icon >mdi-pencil</v-icon>
                              </v-btn>
                          </v-row>
                      </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'UserInputForm',
    data: () => ({
        userTextContent: ''
    }),
    methods: {
        async submitPost() {
            const response = await this.$http.post(`posts/`, {
                content: this.userTextContent,
                user: this.userID
            })
            console.log(response)
            this.$emit('createdPost', response.data) 
        },
    },
    computed: {
        ...mapState(['userID', 'token', 'posts'])
    }
}
</script>