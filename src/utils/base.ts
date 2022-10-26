/**
 * @description: 常用基础工具函数
 */
import dayjs from 'dayjs'

/**
 *获取url参数
 * @param {String} name 要查询参数的键名，非必传
 * @returns {Any} 传入name返回value，否则返回全部
 */

type Params = {
  [key in string]: string
}
export const getUrlParams = (name = ''): Params | string => {
  const params: Params = {}
  try {
    const search = location.search.slice(1)
    if (search) {
      search.split('&').forEach(str => {
        const [key, value] = str.split('=')
        params[key] = decodeURIComponent(value)
      })
    }
  } catch {}
  return name ? params[name] : params
}

/**
 * 时长格式化
 * 时:分：秒
 */

export function dateTransfer(t: number) {
  const e = Math.round(t),
    i = e % 60,
    n = Math.floor(e / 60) % 60,
    s = Math.floor(e / 60 / 60)
  return `${10 <= s ? s : `0${s}`}:${10 <= n ? n : `0${n}`}:${10 <= i ? i : `0${i}`}`
}

/**
 * 格式化时间
 */

export const formatDate = (time: string, formatString = 'YYYY-MM-DD') => {
  if (!time) return ''
  return dayjs(time).format(formatString)
}

// 文件大小转换
export function converByte(bytes: number) {
  if (!bytes || !Number(bytes)) return '0B'
  const k = 1024,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k))
  const num = bytes / k ** i
  if (num > 1000) {
    return (num / 1024).toPrecision(2) + sizes[i + 1]
  } else {
    return num.toPrecision(3) + sizes[i]
  }
}

// 过滤html标签，获取纯文本
export function getContentText(content: string) {
  if (!content) return ''
  const output = content
    .replace(/(\n)/g, '')
    .replace(/(\t)/g, '')
    .replace(/(\r)/g, '')
    .replace(/<\/?[^>]*>/g, '')
    .replace(/\s*/g, '')
    .replaceAll('&nbsp;', ' ')
  const temp = document.createElement('div')
  temp.innerHTML = output
  // eslint-disable-next-line unicorn/prefer-dom-node-text-content
  return temp.innerText || temp.textContent
}

/**
 * @description: js 加载完成后调用
 * @param {string} src url
 * @return {*} Promise
 */
export function loadJs(src: string) {
  return new Promise((resolve, reject) => {
    // 判断当前页面是否存在这个标签 存在就不创建
    let script = document.querySelector(`[src='${src}']`) as HTMLScriptElement

    if (script) {
      script.addEventListener('load', () => {
        resolve(null)
      })
    } else {
      script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = src
      document.querySelectorAll('head')[0].append(script)

      script.addEventListener('load', () => {
        resolve(null)
      })
      // eslint-disable-next-line unicorn/prefer-add-event-listener
      script.addEventListener('error', () => {
        reject()
      })
    }
  })
}

/**
 * 加载本地图片路径
 * @param {string} name
 */
export const getImage = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

/**
 * 深度克隆
 * @param target
 * @returns
 */
export function deepClone(target: { [key: string | number]: any }) {
  // 定义一个变量
  let result: any
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = [] // 将result赋值为一个数组，并且执行遍历
      // eslint-disable-next-line no-restricted-syntax
      for (const i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {}
      // eslint-disable-next-line no-restricted-syntax
      for (const i in target) {
        result[i] = deepClone(target[i])
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target
  }
  // 返回最终结果
  return result
}
