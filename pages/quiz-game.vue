<template lang="pug">
  v-layout(
    class="center-contents"
    justify-center 
    align-center
  )  
    v-btn(
      class="test"
      color="purple"
      fab
      large
      dark
    )
      v-icon(
        large
      ) play_arrow
    vue-particles(
      class="test"
      color="#fff"
      :hoverEffect="false"
      :clickEffect="false"
    )
</template>

<style lang="sass" scoped>
.center-contents > *
  position: absolute

.center-contents > button
  z-index: 2;
</style>
