<template>
  <div>
    <Header/>
    <div class="news-detail">
      <h2>新闻详细页</h2>
      <p>新闻ID：{{ $route.params.id }}</p>
      <p>
        <nuxt-link :to="{ name: 'news' }">新闻列表</nuxt-link>
      </p>
      <p>
        <nuxt-link :to="{ name: 'index' }">首页</nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
import Header from "~/components/public/header";
export default {
  validate({ params }) {
    //只适配数字的路由
    return /^\d+$/.test(params.id);
  },
  head() {
    return {
      title: "新闻详细页"
    };
  },
  transition(to, from) {
    //console.log("详细页", to);
    if (to.name === "news-id") {
      //设置动画名称
      return "slide-right";
    } else {
      return "slide-left";
    }
  },
  commponents: {
    Header
  }
};
</script>