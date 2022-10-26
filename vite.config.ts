import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// import dts from 'vite-plugin-dts'
import svgLoader from 'vite-svg-loader'

const resolve = p => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    svgLoader(),
    // dts({
    //   insertTypesEntry: true,
    //   copyDtsFiles: true,
    //   cleanVueFileName: true
    // }),
    AutoImport({
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      // targets to transform
      include: [
        /\.[jt]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: ['vue'],
      dts: resolve('typings/auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // Auto register Element Plus components
        ElementPlusResolver()
      ],
      dts: resolve('typings/components.d.ts')
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        additionalData: `@use "@/style/mixin.scss" as *;`
      }
    }
  },
  esbuild: {
    sourcemap: true
  },
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'zhsComponentLibrary',
      formats: ['es'],
      fileName: () => {
        return 'index.js'
      }
    },
    rollupOptions: {
      external: ['vue', 'element-plus', 'ant-design-vue'],
      // preserveModules: true,
      output: {
        format: 'es',
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'antDesignVue',
          'element-plus': 'elementPlus'
        }
      }
    }
  }
})
