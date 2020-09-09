<template>
    <div>
        <p>{{ comment.comment_content }}</p>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['comment'],
}
</script>