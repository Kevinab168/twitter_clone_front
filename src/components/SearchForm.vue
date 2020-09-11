<template>
    <div>
        <input type="text" v-model="searchQuery">
        <button @click="setSearchQuery">Search</button>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    data: () => ({
        searchQuery: ''

    }),
    methods: {
        setSearchQuery() {
            this.$store.commit('setSearchQuery', this.searchQuery)
        }
    }
}
</script>