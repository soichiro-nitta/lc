import Vue from 'vue'
import VueWindowSize from 'vue-window-size'

Vue.use(VueWindowSize)

Vue.mixin({
  computed: {
    isMobile() {
      return this.windowWidth < 768
    }
  },
  methods: {
    $imageOnLoad(src, func) {
      const img = new Image()
      img.onload = () => {
        func()
      }
      img.src = src
    },
    $delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
})
