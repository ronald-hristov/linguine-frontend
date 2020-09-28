<template>
  <div class="homeLauout">
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Linguine</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>My Snippets</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <slot name="view"></slot>

  </div>
</template>

<script>
export default {
  name: 'LayoutUser',
  data () {
    return {
      routes: [
        { path: '/search', name: 'Search', icon: 'mdi-magnify', active: false },
        { path: '/matches', name: 'Matches', icon: 'mdi-star', active: false },
        { path: '/referrals', name: 'Referrals', icon: 'mdi-account-multiple', active: false }
      ],
      loading: false,
    }
  },
  methods: {
    nav (event) {
      console.log('clicked')
      const path = event.target.getAttribute('href')
      console.log(event.target)
      if (path === window.location.pathname) {
        return null
      }
      this.routes.forEach(function (item, index) {
        item.active = path === item.path
      })
      this.$router.push(path)
    },
    logout () {
      this.$router.push('/')
    }
  },
  created () {
    this.routes.forEach(function (item, index) {
      item.active = window.location.pathname === item.path
    })
    console.log('Created')
  },
  mounted () {
    console.log('Mounted')
  }
}
</script>

<style>
  /*@import './assets/css/style.css';*/
</style>
