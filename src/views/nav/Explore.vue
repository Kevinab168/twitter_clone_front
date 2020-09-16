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
            <v-col>
                <v-tabs
                    v-model="tab"
                    grow
                >
                    <v-tab
                        v-for="tabName in tabs"
                        :key="tabName"
                    >
                        {{ tabName }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items
                    v-model="tab"
                >
                    <v-tab-item
                        v-for="tab in tabs"
                        :key="tab"
                    >
                        <v-card flat>
                            <v-card-text>
                                <component :is="tab + 'Search'" :search="search" :key="search"></component>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
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
        tab: null,
        tabs: ['Users', 'Posts', 'Comments'],
        search: null 
    }),
    computed: {
        currentTabComponent: function() {
            return this.currentTab + 'Search'
        },
    },
    methods: {
        checkSearchRoute() {
            const searchQuery = this.$route.params.search
            if (searchQuery) {
                this.search = searchQuery
            }
        }
    },
    created() {
        this.checkSearchRoute()
    },
    watch: {
        '$route.params.search': function() {
            this.checkSearchRoute()
        }
    }
}
</script>
