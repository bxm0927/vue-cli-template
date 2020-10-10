<template>
  <div class="page">
    <h1>404, Page Not Found!</h1>
    <van-button type="primary" url="/">回到首页</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {
  name: 'NotFound',
}
</script>
