<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple-dark ">
          <nuxt-link  to="/" class="title1">旭日东升</nuxt-link>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <nuxt-link to="/">首页</nuxt-link>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <nuxt-link to="about">文档存档</nuxt-link>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          关于我
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
         <nuxt-link to="news">前端导航</nuxt-link> 
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          前端资料小库
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          小工具
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          合作
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.el-row {
  background: #66b1ff;
  margin-bottom: 20px;
  min-height: 60px;
}
.el-row :last-child {
  margin-bottom: 0;
}
.el-col {
  vertical-align: middle;
  line-height: 350%;
  color: #ffffff;
}
.bg-purple-dark {
  background: #66b1ff;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  /* border-radius: 4px; */
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title1 {
  font-size: 20px !important;
  color: #f9fafc !important;
}
a {
  text-decoration: none;
  color: #ffffff;
}
</style>