# Rhz Components Library

---

tips

- 组件库基于 vue3 只有 vue3 项目可用
- 工具函数 任何项目都可用
- 项目开发需要 node >= 16
- 建议使用 [pnpm](https://www.pnpm.cn/) 包管理工具

## 项目结构说明

```
rhz-component-library
├─ client  // 开发调试组件
│  ├─ App.vue
│  └─ main.ts
├─ docs  // 组件文档
│  ├─ package.json
│  └─ press
│     └─ index.md
├─ public  // 公共文件
│  └─ vite.svg
├─ script  // 脚本
│  └─ build-types.js
├─ src  // 源码
│  ├─ components   // 组件存放位置
│  ├─ styles // 组件依赖样式
│  ├─ utils   // 工具
│  ├─ assets // 图片 字体相关
│  └─ index.ts  // 统一导出
├─ .npmrc
├─ README.md
├─ index.html
├─ package.json
├─ .eslintignore
├─ .eslintrc.json
├─ .prettierrc
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ tsconfig.json
├─ tsconfig.node.json
├─ typings  // 声明文件
│  ├─ auto-imports.d.ts
│  ├─ components.d.ts
│  └─ vite-env.d.ts
└─ vite.config.ts

```

## 开发启动

```json
{
  "dev": "vite", // 开发环境
  "dev:docs": "pnpm run -C docs dev", // doc开发环境
  "build": "vite build", // lib 打包
  "build:docs": "vite build docs", // doc 打包
  "lint": "eslint .", // eslint 检查
  "lint:fix": "eslint --ext .js,.ts,.vue,.json,.md --fix .", // eslint 检查并修复
  "release": "vite build && standard-version -r patch && npm publish" // 版本自动化
}
```

## 组件安装

```javascript
npm install rhz-component-library
```

## 组件使用

### 主文件导入

```javascript
// 样式在main中统一导入
import 'rhz-component-library/dist/style.css'
// 全部组件导入
import rhz from 'rhz-component-library'

app.use(rhz)
```

### 组件导入

```javascript
// 样式在main中统一导入
import 'rhz-component-library/dist/style.css'
// 组件按需导入
import { RhzCaptcha } from 'rhz-component-library'
```
