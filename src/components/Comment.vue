<template>
    <div>
        <v-row>
            <v-col>
                  <v-card dark color="cyan" :to="link" class="mx-auto" max-width="400">
                      <v-card-title>
                          <v-icon large left>
                              mdi-perm_identity
                          </v-icon>
                          <span class="title">Response</span>
                      </v-card-title>
                      <v-card-text>
                          <span>"{{ comment.comment_content }}"</span>
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
    name: 'Comment',
    props: ['comment'],
}
</script>