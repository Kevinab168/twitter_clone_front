<template>
    <v-app-bar app>
        <v-toolbar-title>Chirper</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/home">
            <v-icon class="mx-3">mdi-home</v-icon>
        </router-link>
        <router-link to="/explore">
            <v-icon class="mx-3">mdi-magnify</v-icon>
        </router-link>
        <router-link to="/profile">
            <v-icon class="mx-3">mdi-account-box</v-icon>
        </router-link>
        <router-link to="/login">
            <v-icon class="mx-3">mdi-login</v-icon>
        </router-link>
    </v-app-bar>
</template>



<script>
export default {
    name: 'Navbar'
}
</script>