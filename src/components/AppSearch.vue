<template>
    <div>
        <v-text-field 
            solo
            v-model="search" 
            rounded
            data-test="right-search-field"
            placeholder="Search"
            prepend-icon="mdi-magnify" 
            @keyup.enter="makeSearchQuery"
            ></v-text-field>
    </div>
</template>


<script>
export default {
    data: () => ({
        search: null,
    }),
    methods: {
        makeSearchQuery() {
            this.$router.push(`/explore/${this.search}`)
        },
        checkRouterPath() {
            return false
        }
    },
}
</script>