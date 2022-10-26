import Empty from './index.vue'
import type { App } from 'vue'

Empty.name = 'empty'

Empty.install = (app: App) => {
  app.component(Empty.name, Empty)
}

export default Empty
