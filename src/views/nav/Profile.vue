<template>
    <div>
        <v-row>
            <v-avatar color="indigo" class="ml-3">
                <span class="white--text headline">AD</span>
            </v-avatar>
        </v-row>
        <v-row>
            <v-subheader>{{ user.username }}</v-subheader>
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
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <PostList :posts="posts"></PostList>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <CommentList :comments="comments"></CommentList>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-row>
   
    </div>
</template>


<script>
// import FollowerList from '@/components/FollowerList.vue'
// import FollowingList from '@/components/FollowingList.vue'
import PostList from '@/components/PostList.vue'
import CommentList from '@/components/CommentList.vue'
export default {
    components: {
        // FollowerList,
        // FollowingList,
        PostList,
        CommentList
    },
    data: () => ({
        user: '',
        posts: [],
        comments: [],
        tab: null,
        tabs: [
            'Posts', 'Comments'
        ]
    }),
    methods: {
        async getUser() {
            const response = await this.$http.get(`users/${this.userid}`)
            this.user = response.data
        },
        async getPosts() {
            const response = await this.$http.get(`users/${this.userid}/posts`)
            this.posts = response.data
        },
        async getComments() {
            const response = await this.$http.get(`comments?user=${this.userid}`)
            this.comments = response.data
        }
    },
    computed: {
        userid() {
            return this.$route.params.id
        }
    },
    created() {
        this.getUser()
        this.getPosts()
        this.getComments()
    }
}
</script>