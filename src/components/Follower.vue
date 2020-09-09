<template>
    <div>
        <p>{{ follower.username }}</p>
    </div>
</template>

<script>
export default {
    name: 'Follower',
    props: ['follower']
}
</script>