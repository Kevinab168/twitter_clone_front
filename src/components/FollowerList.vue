<template>
    <div>
        <v-row>
            <v-col>
                <User
                    v-for="follower in followers"
                    :key="follower.id"
                    :user="follower.follower"
                ></User>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import User from './User.vue'
export default {
    components: {
        User
    },
    props: ['followers']
}
</script>