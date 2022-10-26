import GroundGlassbg from './index.vue'
import type { App } from 'vue'

GroundGlassbg.name = 'ground-glassbg'

GroundGlassbg.install = (app: App) => {
  app.component(GroundGlassbg.name, GroundGlassbg)
}

export default GroundGlassbg
