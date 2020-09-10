<template>
    <div>
        <CommentList :comments="comments"></CommentList>
    </div>
</template>


<script>
import CommentList from '@/components/CommentList.vue'
import { mapState } from 'vuex'
export default {
    components: {
        CommentList
    },
    data: () => ({
        comments: []
    }),
    computed: {
        ...mapState(['searchQuery']),
    },
    async created() {
        const response = await this.$http.get(`comments?search=${this.searchQuery}`)
        this.comments = response.data
    }
}
</script>