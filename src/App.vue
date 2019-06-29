<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    
  },
  

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
*{
  margin:0;
  padding:0
}
li{
  list-style: none;
}
a{
  text-decoration:none;
  color: #B3BCC5
}
.LeftSidebar{
  position: fixed;
  top: 0;
  left: 0;
}
.userManage{
  margin-left: 250px;
}
</style>
