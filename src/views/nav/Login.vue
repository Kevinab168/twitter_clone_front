<template>
    <div>
        <v-row>
            <v-col align-self="end">
                <UserLoginForm></UserLoginForm>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import UserLoginForm from '@/components/UserLoginForm.vue'
export default {
    components: {
        UserLoginForm
    }
}
</script>