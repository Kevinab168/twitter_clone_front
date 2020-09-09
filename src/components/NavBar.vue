<template>
    <div>
        <aside>
            <p v-for="tab in tabs" :key="tab">{{ tab }}</p>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        tabs: [
            'Home',
            'Posts',
            'Comments',
            'Followers',
            'Following'
        ]
    })
}
</script>