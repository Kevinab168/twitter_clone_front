<template>
    <div>
        <input type="text" v-model="userTextContent">
        <button @click="submitPost">Create Post</button>
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