<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon />
        </template>

        <v-app-bar-title><NuxtLink to="/">YouShop</NuxtLink></v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-cart-outline" />

            <v-btn icon="mdi-account" />

            <v-btn icon="mdi-exit-to-app" />
        </template>
    </v-app-bar>
</template>
