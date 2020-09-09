<template>
    <div>
        <User v-for="user in users" :user="user" :key="user.id"></User>
    </div>
</template>

<script>
import User from './User.vue'
import { mapState } from 'vuex'

export default {
    name: 'UserList',
    data: () => ({
        users: []
    }),
    components: {
        User
    },
    computed: {
        ...mapState(['searchQuery'])
    },
    created(){
        fetch(`http://localhost:8000/api/users?username=${this.searchQuery}`)
            .then(response => response.json())
            .then(data => this.users = data)
    }
}
</script>