<template>
  <v-app id="inspire">
    <v-layout>
      <v-navigation-drawer
        temporary
        v-model="drawer"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon v-if="!drawer" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <template v-slot:append>
          <v-btn icon="mdi-logout"></v-btn>
        </template>
      </v-app-bar>

      <v-main></v-main>
    </v-layout>

    <!--    <v-app-bar>-->
    <!--      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

    <!--    </v-app-bar>-->

    <!--    <v-main>-->
    <!--      &lt;!&ndash;  &ndash;&gt;aaa-->
    <!--    </v-main>-->
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'

const drawer = ref(null)

watch(drawer,()=>{
  console.log("发生了改变：",drawer.value)
})
</script>

<!--<script>-->
<!--export default {-->
<!--  data: () => ({ drawer: null }),-->
<!--}-->
<!--</script>-->
