<template>
    <div>
        hel
        <FollowerList :user="user"></FollowerList>
        <FollowingList :user="user"></FollowingList>
    </div>
</template>


<script>
import FollowerList from '@/components/FollowerList.vue'
import FollowingList from '@/components/FollowingList.vue'
export default {
    components: {
        FollowerList,
        FollowingList
    },
    props:['user'],
}
</script>