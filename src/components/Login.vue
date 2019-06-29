<template>
    <div class="Login">
        <div class="container">
            <form>
                  <h1>用户登陆</h1>
                  <label for="">
                      <input type="text" v-model="info.name" name="username" placeholder="请输入您的帐号">
                  </label>
                  <label for="">
                      <input type="password" v-model="info.password" name="password" placeholder="请输入您的密码">
                  </label>
                  <label for="" id="success"></label>
                <el-button type="primary" @click="login" @keyup.enter="jianpan" class="btn" plain>登陆</el-button>
            </form>
        </div>
    </div>
</template>

<script>

import qs from 'qs'
import {setCookie, getCookie, delCookie} from '@/scripts/cookie.js'

export default {
  name: 'Login',
  data(){
      return{
          info:{
                name:"",
                password:"",
            }
      }
  },
  created(){
        var lett = this;
        document.onkeydown = function(e) {
            var key = window.event.keyCode;
            if (key == 13) {
               lett.login()
            }
        }
  },
  methods:{
        login(){
            let userData = {
                adminname:this.info.name,
                password:this.info.password,
            }
            let uD = qs.stringify(userData); 

            this.axios.post('http://47.103.1.220/admin/logining',uD)
            .then((res)=>{
                if(res.data.code == 200){
                    console.log(res.data)
                    this.$cookies.set("username",this.info.name,"1D"); // 设置cookie中存放的生命周期
                    this.$router.push({path:"/"})
                    console.log(this.$cookies.get("username"))
                }else{
                    alert("密码错误")
                }
            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
    height: 100vh;
    width:100%;
    font-size:.5625rem;
}
.Login{
    width: 100%;
    height: 100%;
    position:relative;
}
.Login img{
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    min-width: 100%;
    min-height: 100%;
    transform:translate(-50%,-50%);
}
h1{
    font-weight: 400;
    color: #000
}
.container{
    position: absolute;
    width: 40%;
    height: auto;
    left:35%;
    top: 20vh;
    text-align: left;
}
input{
    width: 60%;
    height: 40px;
    margin-top:30px;
    outline:none;
    padding:0 10px;
    border-radius: 8px;
}
.btn{
    position: relative;
    left:-75px;
    top:75px;
    font-size:15px;
}
</style>