<template>
    <div>
        <CommentList :comments="comments"></CommentList>
    </div>
</template>


<script>
import CommentList from '@/components/CommentList.vue'
export default {
    components: {
        CommentList
    },
    data: () => ({
        comments: []
    }),
    props: ['search'],
    async created() {
        const response = await this.$http.get(`comments?search=${this.search}`)
        this.comments = response.data
    }
}
</script>