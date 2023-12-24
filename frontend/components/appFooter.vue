<template>
  <v-footer>
     <v-row justify="center" align-content="center" no-gutters>
      <v-col v-show="!$vuetify.display.xs" cols="1"></v-col>

      <v-spacer v-show="!$vuetify.display.xs"></v-spacer>

      <v-btn v-for="(item, index) in footerLinks" :key="index" :href="item.link" target="_blank" v-text="item.text" variant="plain"></v-btn>

      <v-spacer v-show="!$vuetify.display.xs"></v-spacer>

      <v-col cols="6" sm="1">
        <a href="/" target="_blank">
          <v-img
            src="/icon.png"
            alt="Logo"
          ></v-img>
        </a>
      </v-col>
     </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
const theme = useTheme();

const footerLinks: any = [
  // {
  //   text: "Impressum",
  //   link: ""
  // },{
  //   text: "Datenschutz",
  //   link: ""
  // }
]
</script>