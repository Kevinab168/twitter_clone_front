<template>
    <div>
        <v-row>
            <v-avatar color="indigo" class="ml-3">
                <span class="white--text headline">AD</span>
            </v-avatar>
        </v-row>
        <v-row>
            <v-subheader>{{ user }}</v-subheader>
        </v-row>
        <v-row dense>
            <!-- About User -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut dignissimos quisquam aperiam consequatur rem ex ratione labore, enim temporibus delectus, eum, nobis ullam architecto atque quaerat! Ab ut praesentium aspernatur sequi? Excepturi, minus.</p>
        </v-row>
        <v-row>
            <v-col>
                <!-- Follower Counts -->
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <component v-bind:is="currentTabComponent" :key="currentTab"></component>
            </v-col>
        </v-row>
        <v-row>
              <v-tabs
                class="elevation-2"
                dark
                grow
                >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab
                        v-for="tab in tabs"
                        :key="tab.name"
                    >
                        {{ tab.name }}
                    </v-tab>
            </v-tabs>
        </v-row>
        <v-row>
            <component :is="currentTab"></component>
        </v-row>
        <!-- <FollowerList :user="user"></FollowerList>
        <FollowingList :user="user"></FollowingList> -->
    </div>
</template>


<script>
import FollowerList from '@/components/FollowerList.vue'
import FollowingList from '@/components/FollowingList.vue'
import PostList from '@/components/PostList.vue'
import CommentList from '@/components/CommentList.vue'
import { mapState } from 'vuex'
export default {
    components: {
        FollowerList,
        FollowingList,
        PostList,
        CommentList
    },
    data: () => ({
        currentTab: null,
        posts: [],
        comments: [],
        tabs: [
            {
                name: 'Posts',
                action: 'PostList'
            },
            {
                name: 'Comments',
                action: 'more random stuff'
            },
            {
                name: 'Followers',
                action: 'follower action'
            },
            {
                name: 'Following',
                action: 'random'
            }
        ]
    }),
    computed:{
        // Get user
        ...mapState(['user', 'userID'])
    },
    methods: {
        currentTabComponent() {
            return this.currentTab + 'List'
        },
        async getPosts() {
            const response = await this.$http.get(`/users/${this.userID}/posts/`)
            this.posts = response.data
        },
    },
    created() { 
        this.getPosts()
    }

}
</script>