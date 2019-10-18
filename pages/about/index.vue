<template>
  <div class="about">
    <Header/>
    <h2>about</h2>
 
    <p>参数：{{$route.params.aboutID}}</p>
    <p>参数：{{$route.params.aboutTitle}}</p>
    <p>
      <nuxt-link :to="{name: 'index'}">首页</nuxt-link>
    </p>
  </div>
</template>
<script>
import Header from '~/components/public/header'
export default {
    components:{
      Header,
    }
}
</script>
<style>
    
</style>