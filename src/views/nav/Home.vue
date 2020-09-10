<template>
  <div class="home">
      <PostForm @createdPost="addNewPost"></PostForm>
      <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '../../components/PostList.vue'
import PostForm from '../../components/PostForm.vue'
export default {
  name: 'Home',
  components: {
    PostList,
    PostForm
  },
  data: () => ({
    text: '',
    addedPost: '',
    posts: [],
  }),
  computed: {
    ...mapState(['user', 'token', 'userID']),
  },
  methods: {
    async getPosts() {
      const response = await this.$http.get(`/users/${this.userID}/posts/`)
      this.posts = response.data
    },
    addNewPost(post) {
      this.posts.unshift(post)
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
