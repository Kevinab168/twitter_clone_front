<template>
    <div>
        <CommentList :comments="comments"></CommentList>
    </div>
</template>


<script>
import CommentList from '../../components/CommentList.vue'
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
    created() {
        fetch(`http://localhost:8000/api/comments?search=${this.searchQuery}`)
            .then(response => response.json())
            .then(data => this.comments = data)
    }
}
</script>