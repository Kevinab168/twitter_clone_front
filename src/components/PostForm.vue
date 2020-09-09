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
            const response = await fetch('http://localhost:8000/api/posts/', {
                method: 'POST',
                body: JSON.stringify({
                    content: this.userTextContent,
                    user: this.userID
                }),
                headers: {
                    'Authorization': `Token ${this.token}`,
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            this.$emit('createdPost', data) 
        },
    },
    computed: {
        ...mapState(['userID', 'token', 'posts'])
    }
}
</script>