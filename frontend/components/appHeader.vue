<template>
  <v-app-bar flat>
    <v-container>
      <v-row align="center">
        <v-col cols="1">
          <nuxt-link to="/">
            <v-img
              src="/icon.png"
              alt="Logo"
            ></v-img>
          </nuxt-link>
        </v-col>

        <v-col cols="auto">
          <v-tabs>
            <v-tab to="/">Home</v-tab>
            <v-tab v-for="{ text, link} in links" :key="link" :to="link" >
              {{ text }}
            </v-tab>
          </v-tabs>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-btn @click="toggleTheme()" class="rounded-pill" icon="mdi-theme-light-dark"></v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
const theme = useTheme();

function toggleTheme() { // composable?
  theme.global.name.value = !theme.current.value.dark ? "dark" : "light";
}
</script>

<script lang="ts">
export default {
  data: () => ({
    links: [
      {
        text: "Login",
        link: "/auth/login"
      }
    ],
  }),
}
</script>
