import SvgIcon from './index.vue'
import type { App } from 'vue'

SvgIcon.name = 'svg-icon'

SvgIcon.install = (app: App) => {
  app.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
