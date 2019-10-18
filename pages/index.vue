<template>
  <div>
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="300px">
          <el-card class="box-card">
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">公告</h3>
              </div>
              <div class="panel-body">
                科技行业发展日新月异，尤其对前端这个行业又是个快速更新，知识面光，技术玲珑复杂的领域，前端工程师们应该及早准备，时刻关注变化，因为很可能一不留神就掉队了。
              </div>
            </div>
            <div class="block">
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1"
              >
              </el-date-picker>
            </div>
          </el-card>
          <el-card class="box-card">
            111111
          </el-card>
          <el-card class="box-card">
            111111
          </el-card>
          <el-card class="box-card">
            111111
          </el-card>
          <el-card class="box-card">
            111111
          </el-card>
        </el-aside>
        <el-main>
          <el-card class="box-card">
            <section class="container">
              <div>
                <app-logo />
                <h1 class="title">
                  晓辉的博客
                </h1>
                <h2 class="subtitle">
                  二次开发中
                </h2>
                <div class="links">
                  <nuxt-link
                    class="button--grey"
                    :to="{
                      name: 'about',
                      params: { aboutID: 123, aboutTitle: 'About' }
                    }"
                  >
                    about
                  </nuxt-link>
                  <nuxt-link class="button--grey" :to="{ name: 'news' }">
                    news
                  </nuxt-link>
                  <nuxt-link class="button--grey" :to="{ name: 'content' }">
                    content
                  </nuxt-link>
                </div>
                <div class="list-group">
                  <a href="#" class="list-group-item active">
                    Cras justo odio
                  </a>
                  <a href="#" class="list-group-item"
                    >Dapibus ac facilisis in</a
                  >
                  <a href="#" class="list-group-item">Morbi leo risus</a>
                  <a href="#" class="list-group-item"
                    >Porta ac consectetur ac</a
                  >
                  <a href="#" class="list-group-item">Vestibulum at eros</a>
                </div>
                <div class="links">
                  <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    class="button--green"
                    >Nuxt官网</a
                  >
                  <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="button--grey"
                    >GitHub</a
                  >
                </div>
              </div>
            </section>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import Header from "../components/public/header";
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  components: {
    AppLogo,
    Header
  }
};
</script>

<style>
</style>

