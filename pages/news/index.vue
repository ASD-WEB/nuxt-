<template>
  <div class="news">
    <Header/>
    <h2>新闻列表</h2>
    <ul>
      <nuxt-link tag="li" to="/news/1"><a>新闻1</a></nuxt-link>
      <nuxt-link tag="li" to="/news/2"><a>新闻2</a></nuxt-link>
      <nuxt-link tag="li" to="/news/我的"><a>新闻3（路由校验）</a></nuxt-link>
    </ul>
    <nuxt-link class="button--grey" :to="{name: 'index'}">首页</nuxt-link>
  </div>
</template>
<script>
import Header from '~/components/public/header'
  export default {
    head() {
      return {
        title: '新闻列表'
      }
    },
    components:{
      Header
    },
    transition(to, from) {
      //console.log("列表页", to);
      if (to.name === 'news') {
        //设置动画名称
        return 'slide-left'
      } else {
        return 'slide-right'
      }
    }
  }
</script>