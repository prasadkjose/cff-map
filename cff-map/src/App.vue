<template>
  <div>
    <div class="header-background">
      <div class="banner"></div>
    </div>
    <div class="main-wrapper">
      <div class="header">
        <span class="display-1">Explore swiss railway stations</span>
        <p>
          An interactive map that let you explorer the dense
          network of railway stations in Switzerland
        </p>
      </div>
      <div class="main">
        <container />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import container from './components/Container.vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)


export default {
  name: 'app',
  components: {
    container
  },
  // HTML Header components goes here 
  metaInfo: () => ({
    title: 'CFF Map - Railway stations in Switzerland',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    },
    headAttrs: {
      test: true
    },
    meta: [
      { name: 'description', content: 'A VueJs client application for SBB-CFF station information. ', vmid: 'test' },
      { charset: 'utf-8'  },
      {name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {'http-equiv':"X-UA-Compatible", content:"IE=edge"}

    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700|Material+Icons' },
      { rel: 'favicon', href: '<%= BASE_URL %>favicon.ico' }
    ],
    script: [
      // Add HTML script Tags/links in future
    ],
    __dangerouslyDisableSanitizers: ['script']
  })
}
</script>

<style>
/** Global styles **/
html {
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.87);
}

body {
  margin: 0;
  background: #f5f5f5;
}

* {
  box-sizing: border-box;
}

p {
  font-size: 1rem;
}

a {
  text-decoration: none;
}

.display-1 {
  line-height: 1.3;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.title {
  line-height: 1.5;
  font-size: 1.3125rem;
  font-weight: bold;
}

.subheading {
  line-height: 1.5;
  font-size: 1.3125rem;
  font-weight: 400;
}

.body-1 {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
}

.header-background {
  position: relative;
  min-height: 900px;
  background: linear-gradient(0deg, rgba(65, 65, 65, 0.85), rgba(65, 65, 65, 0.85)),
    url('./assets/header-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.banner {
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: #ec0000;
}

.main-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 600px;
  max-width: 916px;
  margin: -900px auto auto;
}

.header {
  text-align: center;
  color: #fff;
  margin: 70px 0 80px 0;
  padding: 0 16px;
}

.main {
  background: #fff;
  min-height: 800px;
}
@media screen and (min-width: 200px) {
  .main-wrapper {    
    min-width: 50px;
  }  
}

</style>
