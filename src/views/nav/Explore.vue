<template>
    <div>
        <div>
            <input type="text" v-model="search">
        </div>
        <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
        <component v-bind:is="currentTabComponent" class="tab" :search="search" :key="search"></component>
    </div>
</template>

<script>
import UsersSearch from '@/views/Search/UsersSearch.vue'
import PostsSearch from '@/views/Search/PostsSearch.vue'
import CommentsSearch from '@/views/Search/CommentsSearch.vue'
export default {
    components: {
        UsersSearch,
        PostsSearch,
        CommentsSearch,
    },
    data: () => ({
        currentTab: 'Users',
        tabs: ['Users', 'Posts', 'Comments'],
        search: null 
    }),
    computed: {
        currentTabComponent: function() {
            return this.currentTab + 'Search'
        }
    }
}
</script>
