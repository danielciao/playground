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
      v-container(
        id="backdrop"
        fluid
        fill-height
      )
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
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'games', title: 'Quiz', to: '/quiz' }
      ],
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

<style lang="sass">
#backdrop
  padding: 0
  background: linear-gradient(-45deg, #ee7752, #e73C7e, #23a6d5, #23d5ab)
  background-size: 400% 400%
  animation: gradient 15s ease infinite

#particles-js
  width: 100%
  height: 100%

@keyframes gradient
  0% 
    background-position: 0 50%
  50% 
    background-position: 100% 50%
  100%
    background-position: 0 50%
</style>
