<template>
    <div>
        <v-row>
            <v-col>
                <v-text-field
                    placeholder="Search"
                    v-model="search"
                    prepend-icon="mdi-magnify"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col  
                class="mx-auto" 
                v-for="tab in tabs" 
                :key="tab" 
                cols="3"
                >
                    <v-btn block @click="currentTab = tab" large>{{ tab }}</v-btn>
            </v-col>
           
        </v-row>
        <v-row>
            <v-col>
                <component v-bind:is="currentTabComponent" :search="search" :key="search"></component>
            </v-col>
        </v-row>
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
