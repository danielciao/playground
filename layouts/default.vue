<template lang="pug">
  v-app
    v-navigation-drawer(
      v-model="drawer"
      mini-variant
      fixed
      app
    )
      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        )
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(
      fixed
      app
      dark
    )
      v-toolbar-side-icon(@click="drawer = !drawer") 
      v-toolbar-title(v-text="title")
    v-content
      v-container
        nuxt
    v-footer.pa-3(
      fixed
      app
    )
      v-spacer
      span(v-html="copyright")
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [{ icon: 'apps', title: 'Welcome', to: '/' }],
      title: 'GameBreak'
    };
  },
  computed: {
    copyright() {
      return `Copyright &copy; ${new Date().getFullYear()} GameBreak`;
    }
  }
};
</script>
