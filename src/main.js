import { createApp } from 'vue'
import App from '@/App.vue'
import VueLazyLoad from 'vue3-lazyload'
import '@/index.css'
import router from '@/router'
import store from '@/store'
import components from '@/components/ui'
import icons from '@/components/icon'
import directives from '@/directives'

const app = createApp(App)

app.use(VueLazyLoad)

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
