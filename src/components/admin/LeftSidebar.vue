<template>
  <!-- 左侧导航组件 -->
  <div class="LeftSidebar">
    <div class="left">
      <div class="logo">
          <img src="../../assets/logo.png" alt="">
          <span>机老大回收系统</span>
      </div>
      <!-- <el-table ref="multipleTable" class="login" :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="50"></el-table-column> -->
        <!-- <el-table-column prop="username" label="姓名" width="100"></el-table-column> -->
      <div class="login" v-for="(store,index) in tableData" :key="index">
        <p>{{store.adminName}}</p>
        <p>{{store.email}}</p>
        <p ><span @click="tuichu">退出登录</span></p>
      </div>
       <el-col :span="15">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#4d5e70" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/"><img src="../../assets/icon_user_grey.png">用户管理</router-link>
            </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/amendPassword"><img src="../../assets/icon_change_grey.png">修改密码</router-link></template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/itemUpshelf"><img src="../../assets/icon_house_grey.png">商品上架</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/classify"><img src="../../assets/icon_card_grey.png">分类管理</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/trademark"><img src="../../assets/icon_char_grey.png">品牌管理</router-link>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>回收属性管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/recycle"><img src="../../assets/icon_char_grey.png">属性分类</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/commodity"><img src="../../assets/icon_char_grey.png">商品属性</router-link>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/allindent"><img src="../../assets/icon_char_grey.png">所有订单</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/untreatedindent" @click.native="chuli"><img src="../../assets/icon_char_grey.png">待收货订单</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/outstandingpayment" @click.native="jiekuan"><img src="../../assets/icon_user_grey.png">已收货订单</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/doneindent"><img src="../../assets/icon_char_grey.png">取消订单,已退货</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/doneindent"><img src="../../assets/icon_char_grey.png">成功订单</router-link>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span>加价券</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/priceticket"><img src="../../assets/icon_char_grey.png">加价券管理</router-link>
          </template>
        </el-menu-item-group>
        <!-- <el-menu-item-group>
          <template slot="title">
            <router-link to="/untreatedindent" @click.native="chuli"><img src="../../assets/icon_char_grey.png">未处理订单</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/outstandingpayment" @click.native="jiekuan"><img src="../../assets/icon_user_grey.png">未结款订单</router-link>
          </template>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <router-link to="/doneindent"><img src="../../assets/icon_char_grey.png">已完成订单</router-link>
          </template>
        </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSidebar",
  data(){
    return {
      chuanru:0,
      chuanru1:1,
      tableData: [
                {
                  adminName: "111",
                  email: "597304769@qq.com",
                }
        ],
    }
  },
   methods:{
     chuli(){
       var status = 'status=' + this.chuanru
       console.log(status)
       this.axios.post("http://47.103.1.220/admin/queryOrder",status)
       .then((res) => {
         console.log("传入成功")
      })
      .catch((error)=>{
        console.log(error);
      })
     },
     jiekuan(){
       var status = 'status=' + this.chuanru1
       console.log(status)
       this.axios.post("http://47.103.1.220/admin/queryOrder",status)
       .then((res) => {
         console.log("传入成功")
      })
      .catch((error)=>{
        console.log(error);
      })
     },
     tuichu(){
        this.$router.push("/login")
        this.$cookies.remove("username")
     },
     active(){
          background:red;
     },
      handleOpen(key, keyPath){
        console.log(key, keyPath);
      },
      handleClose(key, keyPath){
        console.log(key, keyPath);
      }
    },
    created(){
      this.axios.get("http://47.103.1.220/admin/logining")
      .then((res) => {
        console.log(res.data)
          // var sx = JSON.parse(res.data)
          // this.tableData = sx
          // console.log(res.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  width: 200px;
  height: 100vh;
  background: #4d5e70 bottom;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
    width: 200px;
    min-height: 400px;
  }
.logo{
    padding-left:20px;
    position:relative;
    vertical-align: bottom;
    height: 30px;
    font-size:17px;
    color:#fff;
    text-align:center;
    padding-top:20px;
    padding-bottom:20px;
    background:#354457;
  }
.logo img{
    position:absolute;
    top:22px;
    left:25px;
    width: 20px;
  }
.login{
    padding:10px 0 5px 19px;
    border-bottom: 1px solid #888
  }
.login p{
    padding:3px 0;
    font-size:14px;
    margin-bottom: 10px;
    
  }
.el-menu-item-group{
  position: relative;
  margin-left:20px;
}
.el-menu-item-group img{
  height: 20px;
  position: absolute;
  left:13px;
  top:8px;
}

.el-menu-item-group__title{
  padding-left:20px;
}
.el-menu-item-group__title a{
    font-size:15px;
    color:#aab1b7;
}
.el-menu-item-group:hover{
    color:#fff;
    background: #3d4e60;
    border-right:4px solid #647f9d;
}
.el-submenu{
    border-bottom: 1px solid #888;
}
</style>
