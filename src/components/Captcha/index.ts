import Captcha from './index.vue'
import type { App } from 'vue'

Captcha.name = 'captcha'

Captcha.install = (app: App) => {
  app.component(Captcha.name, Captcha)
}

export * from './types'

export default Captcha
