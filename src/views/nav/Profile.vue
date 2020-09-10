<template>
    <div>
        <FollowerList :user="user"></FollowerList>
        <FollowingList :user="user"></FollowingList>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import FollowerList from '@/components/FollowerList.vue'
import FollowingList from '@/components/FollowingList.vue'
export default {
    components: {
        FollowerList,
        FollowingList
    },
    computed: {
        ...mapState(['user'])
    }
}
</script>