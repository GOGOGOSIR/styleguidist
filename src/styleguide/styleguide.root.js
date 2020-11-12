import Vue from 'vue'
import Vuex from 'vuex'
import store from '../src/store'
import '../src/assets/css/iconfont.css'
Vue.use(Vuex)

export default previewComponent => {
  return {
    // ElementUI: new ElementUI(),
    store,
    render (createElement) {
      return createElement(previewComponent)
    }
  }
}
