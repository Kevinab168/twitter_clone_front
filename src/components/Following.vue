<template>
    <div>
        <p>{{ following.username }}</p>
    </div>
</template>

<script>
export default {
    name: 'Following',
    props: ['following']
}
</script>