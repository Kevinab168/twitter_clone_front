<template>
    <div>
        <p>{{ user.username }}</p>
    </div>
</template>

<script>
export default {
    name: 'User',
    props:['user']
}
</script>