<template>
    <div>
        <UserList :users="users"></UserList>
    </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
export default {
    name: 'UsersSearch',
    data: () => ({
        users: []
    }),
    components: {
        UserList
    },
    props: ['search'],
    async created() {
        const response = await this.$http.get(`users?username=${this.search}`)
        this.users = response.data
    }
}
</script>
