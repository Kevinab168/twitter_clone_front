<template>
    <div>
        <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>
    </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
    name: 'CommentList',
    props: ['comments'],
    components: {
        Comment
    },
}
</script>