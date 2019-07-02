<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      v-if="false"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      v-if="showBar"
      color="blue"
      dark
    >
      <!--      <v-toolbar-side-icon @click="drawer = !drawer"/>-->
      <!--      <v-btn-->
      <!--        icon-->
      <!--        @click.stop="miniVariant = !miniVariant"-->
      <!--      >-->
      <!--        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
      <!--      </v-btn>-->
      <!--      <v-btn-->
      <!--        icon-->
      <!--        @click.stop="clipped = !clipped"-->
      <!--      >-->
      <!--        <v-icon>web</v-icon>-->
      <!--      </v-btn>-->
      <!--      <v-btn-->
      <!--        icon-->
      <!--        @click.stop="fixed = !fixed"-->
      <!--      >-->
      <!--        <v-icon>remove</v-icon>-->
      <!--      </v-btn>-->
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-btn
        @click.stop="signOut"
        flat
        >
        <v-icon>lock</v-icon>
        Sign out
      </v-btn>
    </v-toolbar>
    <v-content :class="{ background: true }">
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
      v-if="showBar"
    >
      <span style="margin: auto">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'bubble_chart',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        title: 'Education Academy'
      }
    },
    methods: {
      signOut() {
        this.$store.commit('flipBarAppearance');
        this.$router.replace('/');
      }
    },
    computed: {
      showBar() {
        return this.$store.getters.isAuthenticated;
      }
    }
  }
</script>

<style scoped>
  .background {
    background-image: url(../static/schoolBackground.jpg);
    /* Full height */
    color: white;
    height: 100%;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
