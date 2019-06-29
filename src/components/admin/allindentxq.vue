<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <div class="all_content">
       <div class="content">
          <h1>这是用户选的</h1>
          <div class="box1" v-for="item in tableData" :key="index">
            <el-form label-width="150px" size="small">
              <!-- 内存输入框 -->
              <el-form-item label="内存:">
                <div>{{item.neicun}}{{index}}</div>
                <!-- <el-select v-model="sizeForm.neicun" multiple filterable allow-create default-first-option placeholder="这是内存输入框">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!-- 颜色 -->
              <el-form-item label="颜色:">
                  <div>{{item.color}}</div>
                <!-- <el-select v-model="sizeForm.color" multiple filterable allow-create default-first-option placeholder="这是颜色输入框">
                  <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select> -->
              </el-form-item>

              <!-- 渠道 -->
              <el-form-item label="渠道:">
                  <div>{{item.qudao}}</div>
                <!-- <el-select v-model="sizeForm.qudao" multiple filterable allow-create default-first-option placeholder="这是渠道输入框">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!-- 网络制式 -->
              <el-form-item label="平板网络制式:">
                  <div>{{item.wangluo}}</div>
                <!-- <el-select v-model="sizeForm.wangluo" multiple filterable allow-create default-first-option placeholder="这是平板选项:网络制式输入框">
                  <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!--剩余保修期 -->
              <el-form-item label="剩余保修期:">
                  <div>{{item.shengyu}}</div>
                <!-- <el-select v-model="sizeForm.shengyu" multiple filterable allow-create default-first-option placeholder="这是剩余保修期输入框">
                  <el-option  v-for="item in options4"  :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!-- 机身外观 -->
              <el-form-item label="机身外观:">
                  <div>{{item.jishenwg}}</div>
                <!-- <el-select v-model="sizeForm.jishenwg" multiple filterable allow-create default-first-option placeholder="这是机身外观输入框">
                  <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!-- 机身外观 -->
              <el-form-item label="屏幕外观:">
                    <div>{{item.pingmuxs}}</div>
                <!-- <el-select v-model="sizeForm.pingmuwg" multiple filterable allow-create default-first-option placeholder="这是机身外观输入框">
                  <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!-- 屏幕显示 -->
              <el-form-item label="屏幕显示:">
                    <div>{{item.pingmuwg}}</div>
                <!-- <el-select v-model="sizeForm.pingmuxs" multiple filterable allow-create default-first-option placeholder="这是屏幕显示输入框">
                  <el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!--维修拆机史  -->
              <el-form-item label="维修拆机史:">
                    <div>{{item.wxcjs}}</div>
                <!-- <el-select v-model="sizeForm.wxcjs" multiple filterable allow-create default-first-option placeholder="这是维修拆机史输入框">
                  <el-option v-for="item in options8" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!--开机情况  -->
              <el-form-item label="开机情况:">
                  <div>{{item.kiaji}}</div>
                <!-- <el-select v-model="sizeForm.kiaji" multiple  filterable allow-create default-first-option placeholder="这是开机情况输入框">
                  <el-option v-for="item in options9" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!--icloud账户  -->
              <el-form-item label="icloud账户:">
                   <div>{{item.zhanghu}}</div>
                <!-- <el-select v-model="sizeForm.zhanghu" multiple filterable allow-create default-first-option placeholder="这是icloud账户输入框">
                  <el-option v-for="item in options10" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <!--功能问题  -->
              <el-form-item label="功能问题:">
                  <div>{{item.gongneng}}</div>
                <!-- <el-select v-model="sizeForm.gongneng" multiple filterable allow-create default-first-option placeholder="这是功能问题输入框">
                  <el-option v-for="item in options11" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->
              </el-form-item>

              <el-form-item label="估价金额:">
                  <div>{{item.money}}</div>
                <!-- <el-input placeholder="请输入金额" class="jine" v-model="message" clearable></el-input> -->
              </el-form-item>
              <el-form-item label="快递单号:">
                  <div>{{item.order}}</div>
                <!-- <el-input placeholder="退货订单号" class="jine" v-model="tuihuo" clearable></el-input> -->
              </el-form-item>
            </el-form>
            <el-button class="primary_btn" v-on:click="cancelorder" type="primary" plain>取消订单</el-button>
          </div>
        </div>

      <!-- 这是检测出来的问题 -->
        <div class="content1">
          <h1>这是检测出来的问题</h1>
          <div class="box1">
            <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 70%">
              <!-- 内存输入框 -->
              <el-form-item label="内存:" v-model="value">
                <el-select v-model="sizeForm.neicun" multiple filterable allow-create default-first-option placeholder="这是内存输入框">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!-- 颜色 -->
              <el-form-item label="颜色:" v-model="value1">
                <el-select v-model="sizeForm.color" multiple filterable allow-create default-first-option placeholder="这是颜色输入框">
                  <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>

              <!-- 渠道 -->
              <el-form-item label="渠道:" v-model="value2">
                <el-select v-model="sizeForm.qudao" multiple filterable allow-create default-first-option placeholder="这是渠道输入框">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!-- 网络制式 -->
              <el-form-item label="平板网络制式:" v-model="value3">
                <el-select v-model="sizeForm.wangluo" multiple filterable allow-create default-first-option placeholder="这是平板选项:网络制式输入框">
                  <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!--剩余保修期 -->
              <el-form-item label="剩余保修期:" v-model="value4">
                <el-select v-model="sizeForm.shengyu" multiple             filterable allow-create default-first-option placeholder="这是剩余保修期输入框">
                  <el-option  v-for="item in options4"  :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!-- 机身外观 -->
              <el-form-item label="机身外观:" v-model="value5">
                <el-select v-model="sizeForm.jishenwg" multiple filterable allow-create default-first-option placeholder="这是机身外观输入框">
                  <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!-- 机身外观 -->
              <el-form-item label="屏幕外观:" v-model="value6">
                <el-select v-model="sizeForm.pingmuwg" multiple filterable allow-create default-first-option placeholder="这是屏幕外观输入框">
                  <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!-- 屏幕显示 -->
              <el-form-item label="屏幕显示:" v-model="value7">
                <el-select v-model="sizeForm.pingmuxs" multiple filterable allow-create default-first-option placeholder="这是屏幕显示输入框">
                  <el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!--维修拆机史  -->
              <el-form-item label="维修拆机史:" v-model="value8">
                <el-select v-model="sizeForm.wxcjs" multiple filterable allow-create default-first-option placeholder="这是维修拆机史输入框">
                  <el-option v-for="item in options8" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!--开机情况  -->
              <el-form-item label="开机情况:" v-model="value9">
                <el-select v-model="sizeForm.kiaji" multiple  filterable allow-create default-first-option placeholder="这是开机情况输入框">
                  <el-option v-for="item in options9" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!--icloud账户  -->
              <el-form-item label="icloud账户:" v-model="value10">
                <el-select v-model="sizeForm.zhanghu" multiple filterable allow-create default-first-option placeholder="这是icloud账户输入框">
                  <el-option v-for="item in options10" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <!--功能问题  -->
              <el-form-item label="功能问题:" v-model="value11">
                <el-select v-model="sizeForm.gongneng" multiple filterable allow-create default-first-option placeholder="这是功能问题输入框">
                  <el-option v-for="item in options11" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="金额:">
                <el-input placeholder="请输入金额" class="jine" v-model="message" clearable></el-input>
              </el-form-item>
              <el-form-item label="退货订单号:">
                <el-input placeholder="退货订单号" class="jine" v-model="tuihuo" clearable></el-input>
              </el-form-item>
            </el-form>
            <el-button class="primary_btn" v-on:click="queding" type="primary" plain>确定按钮</el-button>
          </div>
        </div>
       
    </div>
    
  </div>
</template>

<script>
import qs from 'qs'
import LeftSidebar from './LeftSidebar.vue'
export default {
  name: "userManage",
  components:{
    LeftSidebar
  },
  data() {
    return {
      options: [{value: '32G',label: '32G'}, {value: '64G',label: '64G'}, {value: '128G',label: '128G' }],  //内存输入框
      value:[],
      options1: [{value: '黑色',label: '黑色'}, {value: '白色',label: '白色'}, {value: '红色',label: '红色' }],
      value1: [],
      options2: [{value: '港版',label: '港版'}, {value: '国行移动版',label: '国行移动版'}, {value: '水货',label: '水货' }, {value: '大陆国行',label: '大陆国行' }],
      value2: [],
      options3: [{value: 'WIFI',label: 'WIFI'}, {value: 'WIFI 3G/4G',label: 'WIFI 3G/4G'}],  //网络
      value3: [],
      options4: [{value: '剩余保修期一个月或一个月以上',label: '剩余保修期一个月或一个月以上'}, {value: '保修期低于一个月或过保',label: '保修期低于一个月或过保'}],
      value4: [],
      options5: [{value: '外壳完好无痕迹',label: '外壳完好无痕迹'}, {value: '外壳有轻微划痕',label: '外壳有轻微划痕'}, {value: '外壳严重磕碰/大面积掉漆',label: '外壳严重磕碰/大面积掉漆'}, {value: '机身弯曲/变形',label: '机身弯曲/变形'}, {value: '后盖玻璃裂',label: '后盖玻璃裂'}],
      value5: [],
      options6: [{value: '触屏完美无划痕',label: '触屏完美无划痕'}, {value: '触屏有细微划痕',label: '触屏有细微划痕'}, {value: '触屏有明显/严重、划痕',label: '触屏有明显/严重、划痕' }, {value: '触屏破损未失灵',label: '触屏破损未失灵' }, {value: '触屏失灵',label: '触屏失灵' }],
      value6: [],
      options7: [{value: '显示正常',label: '显示正常'}, {value: '轻微老化/色斑/亮点',label: '轻微老化/色斑/亮点'}, {value: '严重老化/透图字',label: '严重老化/透图字'}, {value: '黑屏/漏液/显示异常',label: '黑屏/漏液/显示异常'}],
      value7:[],
      options8: [{value: '无拆无修',label: '无拆无修'}, {value: '换过屏幕<非组装屏幕>',label: '换过屏幕<非组装屏幕>'}, {value: '换过屏幕<组装屏幕>',label: '换过屏幕<组装屏幕>'}, {value: '主板维修',label: '主板维修'}],
      value8:[],
      options9: [{value: '正常开机',label: '正常开机'}, {value: '无法正常开机',label: '无法正常开机'}],
      value9:[],
      options10: [{value: 'icloud已注销',label: 'icloud已注销'}, {value: 'icloud无法注销',label: 'icloud无法注销'}],
      value10: [],
      options11: [{value: '前置摄像头故障',label: '前置摄像头故障'}, {value: '后置摄像头故障',label: '后置摄像头故障'}, {value: '指纹锁故障',label: '指纹锁故障' }, {value: '指南针故障',label: '指南针故障' }, {value: 'WIFI故障',label: 'WIFI故障' }, {value: '面容ID',label: '面容ID' }],
      value11: [],

       tableData: [
        {
          neicun: "128G",
          color: "红色",
          qudao: "全网通",
          wangluo: "WIFI+4G",
          shengyu: "剩余保修期一个月以上",
          jishenwg: "外壳完好无痕迹",
          pingmuxs: '触屏完美无划痕',
          wxcjs: "无拆无修",
          kiaji: "正常开机",
          zhanghu: "icloud已注销",
          gongneng: "前置摄像头故障",
          pingmuwg: "显示正常",
          money:"123",     //回收金额
          order:"12345678789"
        }
      ],

      sizeForm: {
          neicun:[],
          color:[],
          qudao: [],   //型号
          wangluo:[],
          shengyu:[],
          jishenwg:[],
          pingmuxs:[],
          wxcjs:[], 
          kiaji:[],
          zhanghu:[], 
          gongneng:[],
          pingmuwg:[]
        },
      damoney:"",
      message:"",   //钱
      tuihuo:"",    //退货订单号
      id:this.$route.params.id   //带下来的id
       
    };
  },
  methods: {
    // 这是确定提交的按钮
      queding(){
       var data = {
         "tuihuo":this.tuihuo,
         "order_id":this.id,
         "money": this.message,
         "neicun":this.sizeForm.neicun,
         "color":this.sizeForm.color,
         "qudao":this.sizeForm.qudao,
         "wangluo":this.sizeForm.wangluo,
         "shengyu":this.sizeForm.shengyu,
         "jishenwg":this.sizeForm.jishenwg,
         "pingmuwg":this.sizeForm.pingmuwg,
         "pingmuxs":this.sizeForm.pingmuxs,
         "wxcjs":this.sizeForm.wxcjs,
         "kiaji":this.sizeForm.kiaji,
         "zhanghu":this.sizeForm.zhanghu,
         "gongneng":this.sizeForm.gongneng
       }   
       console.log(data)
          this.axios.post("http://www.jldhs.cn:8080/recycle-0.0.1-SNAPSHOT/admin/detection",data)
          .then((res) => {
              //  this.$router.push({
              //   path: `/allindent`,
              // })
              alert("123")
          })
      },

      cancelorder(){
        this.$confirm("此操作将取消订单, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
              alert("已取消订单, 请填写退货单号")
          });
      }

  },

  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all_content{
  width: 100%;
  height: auto;
  display: flex
}
.content{
  width: 50%;
  margin-top: 50px;
}
.content1 {
  width: 50%;
  margin-top: 50px;
}
.box1 {
  margin: 50px auto;
  display: inline-block;
  width: 90%;
}
.box1_input {
  margin-top: 20px;
}
.el-select {
  width: 80%;
}
.el-form-item {
  height: 100px;
}
.jine {
  width: 50%;
}
.primary_btn{
  margin-left: 50%;
}
.el-form-item__label{
  text-align: left !important;
}
.el-form-item__content{
  text-align:left !important;
}
</style>