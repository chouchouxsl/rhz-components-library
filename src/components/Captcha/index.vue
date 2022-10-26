<script setup lang="ts" name="zhs-captcha">
// 返回结果
// ret         Int       验证结果，0：验证成功。2：用户主动关闭验证码。
// ticket      String    验证成功的票据，当且仅当 ret = 0 时 ticket 有值。
// CaptchaAppId       String    验证码应用ID。
// bizState    Any       自定义透传参数。
// randstr     String    本次验证的随机串，请求后台接口时需带上。

// res（用户主动关闭验证码）= {ret: 2, ticket: null}
// res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
// res（客户端出现异常错误 仍返回可用票据） = {ret: 0, ticket: "String", randstr: "String",  errorCode: Number, errorMessage: "String"}
import type { IcaptchaCb } from './types'

const emit = defineEmits<{
  (e: 'success', val: IcaptchaCb): void
}>()

const label = 'script'

const CaptchaEl = ref<HTMLElement>()

defineExpose({
  show: () => {
    CaptchaEl.value!.click()
  }
})

onMounted(() => {
  ;(window as any).captchaCb = (res: IcaptchaCb) => {
    if (res.ret === 0) {
      emit('success', res)
    }
  }
})

onUnmounted(() => {
  ;(window as any).__CaptchaExists__ = null
})
</script>

<template>
  <div class="captcha-warp">
    <!-- 图形验证码 -->
    <div
      id="CaptchaEl"
      ref="CaptchaEl"
      data-appid="2036785952"
      data-cbfn="captchaCb"
      data-module="0"
      type="primary"
      style="display: none"
    ></div>
    <component :is="label" src="https://captcha.253.com/Captcha.js" />
  </div>
</template>
