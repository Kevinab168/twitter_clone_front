<template>
    <div>
        <v-row>
            <v-col>
                  <v-card dark color="#5E89A1" :to="link" class="mx-auto" max-width="400">
                      <v-card-title>
                          <v-avatar color="blue">
                              <span class="white--text headline">TT</span>
                          </v-avatar>
                      </v-card-title>
                      <v-card-text>
                          <span data-test="post-item">"{{ post.content }}"</span>
                          <v-spacer></v-spacer>
                      </v-card-text>
                      <v-card-actions>
                          <v-row align="center" justify="end">
                            <v-icon class="mr-2">mdi-heart</v-icon>
                            <v-icon class="mr-2">mdi-message</v-icon>
                            <v-icon class="mr-2">mdi-account-box</v-icon>
                          </v-row>
                      </v-card-actions>
                      <router-view/>
                  </v-card>
                  
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: ['post'],
    computed: {
        link() {
            return `/posts/${this.post.id}`
        }
    }
}
</script>