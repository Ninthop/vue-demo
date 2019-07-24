<template>
  <div id="app">
    <keep-alive exclude="Detail,City">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import './assets/icon-font/iconfont.js'
export default {
  name: 'app'
}
</script>


<style>

</style>
