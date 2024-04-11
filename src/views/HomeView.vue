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
        <v-app-bar-title style="text-align: center">时间线</v-app-bar-title>
        <template v-slot:append>
          <v-btn icon="mdi-logout"></v-btn>
        </template>
      </v-app-bar>

      <v-main>

        <v-scroll-x-transition>
        <v-btn elevation="4" id="menu-activator"

               style="z-index:999;position:absolute;bottom: 20px;right: 30px;" :icon="!isActiveMenu?'mdi-arrow-up':'mdi-arrow-down'" variant="tonal">
        </v-btn>
        </v-scroll-x-transition>

        <v-menu v-model="isActiveMenu" activator="#menu-activator" opacity="0.5">
          <v-btn elevation="4" style="margin-bottom: 10px" icon="mdi-plus" variant="tonal">
          </v-btn>
          <v-btn elevation="4" style="margin-bottom: 10px" icon="mdi-plus" variant="tonal">
          </v-btn>
          <v-btn elevation="4" style="margin-bottom: 10px" icon="mdi-plus" variant="tonal">
          </v-btn>
        </v-menu>
      <div style="padding: 20px;height: 100%;overflow: auto">
        <v-timeline side="end">
          <v-timeline-item
              v-for="item in cardList"
              :key="item.id"
              :dot-color="item.color"
              size="small"
          >
            <template v-slot:opposite>
              <span>2024-04-09</span>
            </template>
<!--            <v-alert-->
<!--                :color="item.color"-->
<!--                :icon="item.icon"-->
<!--                :value="true"-->
<!--            >-->
<!--              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.-->
<!--            </v-alert>-->
            <v-card
                class="mx-auto d-flex align-start justify-start"
                style="width: 500px"
                :color="item.color"
                v-ripple
                hover
            >
<!--              <v-card-item>-->
<!--                <v-card-title>-->
<!--                  Card title-->
<!--                </v-card-title>-->
<!--                <v-card-subtitle>-->
<!--                  Card subtitle secondary text-->
<!--                </v-card-subtitle>-->
<!--              </v-card-item>-->

<!--              <v-card-text>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--              </v-card-text>-->

              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                    class="ma-3"
                    rounded="0"
                    size="125"
                >
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5">
                    Halcyon Days
                  </v-card-title>

                  <v-card-subtitle style="text-decoration:line-through">Ellie Goulding</v-card-subtitle>
                  <v-card-subtitle>Ellie Goulding</v-card-subtitle>
                  <v-card-subtitle>Ellie Goulding</v-card-subtitle>
                  <v-card-subtitle>Ellie Goulding</v-card-subtitle>


                </div>
                <div class="d-flex justify-center align-center" style="padding: 10px;">
                  <v-progress-circular :size="100" :rotate="0" :width="15"  :model-value="min">
                    <template v-slot:default> {{ percent }} % </template>
                  </v-progress-circular>
                </div>


              </div>


            </v-card>


          </v-timeline-item>
        </v-timeline>
      </div>
      </v-main>
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
import {ref, watch} from 'vue'

const drawer = ref(null)

const isActiveMenu = ref(false)

watch(drawer, () => {
  console.log("发生了改变：", drawer.value)
})

watch(isActiveMenu, () => {
  console.log("发生了改变：", isActiveMenu.value)
})

const items = ref([
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me 2'},
])

const cardList = ref([
  {
    id: 1,
    color: 'info',
    icon: 'mdi-information',
  },
  {
    id: 2,
    color: 'error',
    icon: 'mdi-alert-circle',
  },
  {
    id: 3,
    color: 'success',
    icon: 'mdi-alert-circle',
  },
  {
    id: 4,
    color: 'warning',
    icon: 'mdi-alert-circle',
  },
  {
    id: 5,
    color: 'primary',
    icon: 'mdi-alert-circle',
  },
  {
    id: 6,
    color: '#ffffff',
    icon: 'mdi-alert-circle',
  },
])

const percent = ref(0)

const min = ref(0)

// setInterval(()=>{
//   if(min.value >= 100){
//     min.value = 0;
//     return;
//   }
//   min.value += 20
// },1000)

</script>

<!--<script>-->
<!--export default {-->
<!--  data: () => ({ drawer: null }),-->
<!--}-->
<!--</script>-->
