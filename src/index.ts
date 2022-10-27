import RhzCaptcha, { type IcaptchaCb } from '@/components/Captcha'
import RhzEmpty from '@/components/Empty'
import RhzSvgIcon from '@/components/SvgIcon'
import RhzGroundGlassbg from '@/components/GroundGlassbg'

import type { App } from 'vue'

const prefix = 'rhz-'

const components = [RhzCaptcha, RhzEmpty, RhzSvgIcon, RhzGroundGlassbg]

const install = (app: App) => {
  components.map(item => {
    return app.component(prefix + item.name, item)
  })
}

export { RhzCaptcha, RhzEmpty, RhzSvgIcon, RhzGroundGlassbg, IcaptchaCb }

export * from '@/utils'

export default {
  install,
  ...components
}
