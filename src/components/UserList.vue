<template>
    <div>
        <User v-for="user in users" :user="user" :key="user.id"></User>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    name: 'UserList',
    components: {
        User
    },
    props: ['users'],
}
</script>