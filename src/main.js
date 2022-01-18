import { createApp } from 'vue'
import App from '@/App.vue'
import VueGtag from 'vue-gtag-next'
import VueFacebookPixel from '@/plugins/vue3-facebook-pixel'
import VueLazyLoad from 'vue3-lazyload'
import '@/index.css'
import router from '@/router'
import store from '@/store'
import components from '@/components/ui'
import icons from '@/components/icon'
import directives from '@/directives'

const app = createApp(App)

app.use(VueLazyLoad, {
  log: false,
})

app.use(VueGtag, {
  property: { id: import.meta.env['VITE_GTAG_ID'] },
  useDebugger: !IS_PRODUCTION,
})

app.use(VueFacebookPixel)

components.forEach((component) => {
  app.component(component.name, component)
})

icons.forEach((icon) => {
  app.component(icon.name, icon)
})

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app.use(store).use(router).mount('#app')
