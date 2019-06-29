<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>

    <!-- 内存 -->
    <div class="div">
        <h1>内存</h1>
        <el-form :model="sizeForm" label-width="100px" size="small" style="width: 60%" class="elfrom">
           <el-form-item label="添加内存:" v-model="value" style="width: 35%" class="input1">
                <el-select v-model="sizeForm.neicun" allow-create filterable clearable automatic-dropdown placeholder="请选择内存">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="扣除金额" class="input2">
                <el-input v-model="sizeForm.money" placeholder="请输入扣除金额" style="width: 80%"></el-input>
            </el-form-item>
            <el-button type="success" plain class="btn" @click="addneicun">添加内存</el-button> 
         </el-form>
         <el-dialog :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.moneync" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
              <el-button type="primary" @click="xiugainc">确定</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="memorysize" label="内存" width="120"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible1 = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteMemorysize(scope.row.id)">删除</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 颜色 -->
    <div class="div">
        <h1>颜色</h1>
        <el-form ref="sizeForm" :model="sizeForm" label-width="100px" size="small" style="width: 60%" class="elfrom">
           <el-form-item label="添加颜色:" v-model="value1" style="width: 35%" class="input1">
                <el-select v-model="sizeForm.color" allow-create filterable clearable automatic-dropdown placeholder="请选择颜色">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="扣除金额" class="input2">
                <el-input v-model="sizeForm.money1" placeholder="请输入扣除金额" style="width: 80%"></el-input>
            </el-form-item>
            <el-button type="success" plain class="btn" @click="addcolor">添加颜色</el-button> 
         </el-form>
        <el-table :data="tableData1" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="color" label="内存" width="120"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteColor(scope.row.id)">删除</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 购买渠道 -->
    <div class="div">
        <h1>购买渠道</h1>
        <el-form ref="sizeForm" :model="sizeForm" label-width="100px" size="small" style="width: 60%" class="elfrom">
           <el-form-item label="添加渠道:" v-model="value2" style="width: 35%" class="input1">
                <el-select v-model="sizeForm.type" allow-create filterable clearable automatic-dropdown placeholder="请选择内存">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="扣除金额" class="input2">
                <el-input v-model="sizeForm.money2" placeholder="请输入扣除金额" style="width: 80%"></el-input>
            </el-form-item>
            <el-button type="success" plain class="btn" @click="addtype">添加渠道</el-button> 
         </el-form>
          <el-dialog :visible.sync="dialogFormVisible2" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.moneyqd" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible2=false">取消</el-button>
              <el-button type="primary" @click="qudaoxg">确定</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData2" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="type" label="渠道" width="200"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                         <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible2 = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteType(scope.row.id)">删除</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 剩余保修期-->
    <div class="div">
        <h1>剩余保修期</h1>
        <el-table :data="tableData3" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="保修期" width="200"></el-table-column>
            <el-table-column prop="money" label="之前的金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                      <!-- <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteType(scope.row.id)">删除</el-button> -->
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- <div v-for="(v,i) in tableData4" :key="i">
          <img :src="v.img" alt="">
          <div>{{v.img}}</div>
    </div> -->
<div>
  <img src="http://47.103.1.220:8080/recycle-0.0.1-SNAPSHOT/static/images/20190523055428/20190523055428.jpg" >
</div>

    <!-- 机身外观-->
    <div class="div">
        <h1>机身外观</h1>
        <el-table :data="tableData4" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="机身外观" width="200"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="150"></el-table-column>
            <!-- <el-table-column prop="img" label="图片" width="150"> -->
              
            <!-- </el-table-column> -->

            <el-table-column prop="picture" label="图片上传" width="120">
                 <label class="avatarbox">
                    <div class="avatar">
                        <input type="file" @change="upload($event)" class="file1">
                    </div>
                </label>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="400">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="picture(scope.row,scope.row.id)" type="primary" size="mini" icon="el-icon-tickets">上传图片</el-button>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                      <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteType(scope.row.id)">删除</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 屏幕外观-->
    <div class="div">
        <h1>屏幕外观</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true">
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money5" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao3">确定</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData5" style="width:80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="屏幕外观" width="200"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                      <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteType(scope.row.id)">删除</el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
    </div>


    

    <detailpage2></detailpage2>
    <router-view> </router-view>
  </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue'
import detailpage2 from './detailpage2.vue'
import recycle from '@/components/admin/recycle.vue'
export default {
  name: "userManage",
  components:{
    LeftSidebar,
    recycle,
    detailpage2
  },
  data() {
    return {
      
    //数据
    sizeForm: {
        neicun:"",
        money:'',
        color:"",
        money1:"",
        type:"",
        money2:"",money3:"",money4:"",money5:"",moneync:"",moneyqd:""
      },

    xiugai:{id:"",content:'', aassessid:''},

      tableData: [{
          id: "",
          memorysize:"",
          money: "",
      }],

    tableData1: [{
          id: "1",
          color:"红色",
          money:"555",
      }],

    tableData2: [{
          id: "",
          type:"",
          money:"",
      }],

      baoxiu:[],
    tableData3:[{
          aassessid:"",
          id: "",
          content:"",
          money:"",
          img:""
        }],

        baoxiu1:[],
        tableData4:[{
          aassessid:"",
          id: "",
          content:"",
          money:"",
          picture:"",
          img:""
        }],

        baoxiu2:[],
        tableData5:[{aassessid:"",id: "",content:"",money:"",}],

        

        baoxiu10:[],baoxiu11:[],baoxiu12:[],


        //选择列表`
        options: [{value: '2＋16G',label: '2＋16G'},
                {value: '2＋32G',label: '2＋32G'},
                {value: '3＋16G',label: '3＋16G'},
                {value: '3＋32G',label: '3＋32G'},
                {value: '4＋32G',label: '4＋32G'},
                {value: '4＋64G',label: '4＋64G'},
                {value: '4＋128G',label: '4＋128G'},
                {value: '6＋64G',label: '6＋64G'},
                {value: '6＋128G',label: '6＋128G'},
                {value: '6＋256G',label: '6＋256G'},
                {value: '8＋64G',label: '8＋64G'},
                {value: '8＋128G',label: '8＋128G'},
                {value: '8＋256G',label: '8＋256G'},
                {value: '8＋512G',label: '8＋512G'}],
        value: [],

        options1: [{value: '黑色',label: '黑色'},
                {value: '灰色',label: '灰色'},
                {value: '白色',label: '银色'},
                {value: '金色',label: '金色'},
                {value: '深空灰',label: '深空灰'},
                {value: '渐变蓝',label: '渐变蓝'},
                {value: '玫瑰金',label: '玫瑰金'}],
        value1: [],

         options2: [{value: '大陆国行',label: '大陆国行'},
                {value: '国行官换机',label: '国行官换机'},
                {value: '港版',label: '港版'},
                {value: '国行移动版',label: '国行移动版'},
                {value: '水货',label: '水货'}],
        value2: [],

      id:this.$route.params.id,
      formLabelWidth: "120px",
      dialogFormVisible: false, //对话框 true显示 false隐藏
      dialogFormVisible1: false,
      dialogFormVisible2: false,

      imageUrl: ''   //这是上传图片的变量命名
    };
  },   //data结尾的括号

  methods: {
    //图片上传
    upload(e){
            var that = this;
                console.log(that,this)
            var file = e.target.files[0];
                console.log(file)
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(){
               that.baseData.base = e.target.result;
               that.baseData.src = reader.result;
           }
       },
      picture(row,id){
          var data =  'id=' + row.id
                      + '&file=' + this.baseData.src
            console.log(data)
            this.axios.post("http://47.103.1.220:8080/recycle-0.0.1-SNAPSHOT/admin/uploadimg",data)
            // http://47.103.1.220:8080/recycle-0.0.1-SNAPSHOT/WEB-INF/classes/static/images/20190523031647.jpg
            .then((res)=>{
              var ww = JSON.parse(res.data)
                  this.baseData.src = ww.path
              })
            .catch((error)=>{
                console.log(error);
            })
    },

    // 修改内存的金额
    xiugainc(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.moneync
        console.log(data)
      this.axios.post('http://47.103.1.220/admin/updateMemory',data)
        .then((res) => {
           this.dialogFormVisible1 = false;
        })
        .catch((error)=>{
              console.log(error);
        })
    },

    //渠道金额修改
    qudaoxg(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.moneyqd
      console.log(data)
      this.axios.post('http://47.103.1.220/admin/updateType',data)
        .then((res) => {
           this.dialogFormVisible2 = false;
        })
        .catch((error)=>{
              console.log(error);
        })
    },

    //这是添加内存的方法
    addneicun(){
          var data =  'modelid=' + this.id
                      + '&memorySize=' + this.sizeForm.neicun
                      + '&money=' + this.sizeForm.money
          this.axios.post('http://47.103.1.220/admin/insertMemory',data)
          .then((res) => {
               var data1 = "modelid=" + this.id
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww = JSON.parse(res.data.memoriesJson)
                  this.tableData = ww
                })
                .catch((error)=>{
                  console.log(error);
                })
          })
          .catch((error)=>{
            console.log(error);
          })
    } ,
    //添加颜色的方法
    addcolor(){
        var data =  'modelid=' + this.id
                      + '&color=' + this.sizeForm.color
                      + '&money=' + this.sizeForm.money1
          this.axios.post('http://47.103.1.220/admin/insertColor',data)
          .then((res) => {
               var data1 = "modelid=" + this.id
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww1 = JSON.parse(res.data.colorsJson)
                  this.tableData1 = ww1
                })
                .catch((error)=>{
                  console.log(error);
                })
          })
          .catch((error)=>{
            console.log(error);
          })
    },
    //添加购买渠道
    addtype(){
          var data =  'modelid=' + this.id
                      + '&type=' + this.sizeForm.type
                      + '&money=' + this.sizeForm.money2
              console.log(data)
          this.axios.post('http://47.103.1.220/admin/insertType',data)
          .then((res) => {
               var data1 = "modelid=" + this.id
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww2 = JSON.parse(res.data.typesJson)
                  this.tableData2 = ww2
                })
                .catch((error)=>{
                  console.log(error);
                })
          })
          .catch((error)=>{
            console.log(error);
          })
    },

    //删除内存的的方法
    deleteMemorysize(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {       
          var data = 'id=' + id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteMemory",data)
          .then((res)=>{
               var data1 = "modelid=" + this.id
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww = JSON.parse(res.data.memoriesJson)
                  this.tableData = ww
                })
                .catch((error)=>{
                  console.log(error);
                })
          this.$message({
            type: 'success',
            message: '删除成功!',
            
          });
          }).catch({})    
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },

    //删除颜色的方法
    deleteColor(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {       
          var data = 'id=' + id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteColor",data)
          .then((res)=>{
               var data1 = "modelid=" + this.id
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww1 = JSON.parse(res.data.colorsJson)
                  this.tableData1 = ww1
                })
                .catch((error)=>{
                  console.log(error);
                })
          this.$message({
            type: 'success',
            message: '删除成功!',
            
          });
          }).catch({})    
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },

    //删除渠道
    deleteType(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {       
          var data = 'id=' + id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteType",data)
          .then((res)=>{
               var data1 = "modelid=" + this.id
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww2 = JSON.parse(res.data.typesJson)
                  this.tableData2 = ww2
                })
                .catch((error)=>{
                  console.log(error);
                })
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          }).catch({})    
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    
    //修改保修期的扣除金额方法
    warrantyperiod(row,id){
      this.xiugai.id = row.id
      this.xiugai.content = row.content
      this.xiugai.aassessid = row.aassessid
      console.log(row)
    },

    //提交保修的方法
    // tijiao1(){
    //   var data = 'id=' + this.xiugai.id
    //           + "&modelid=" + this.id
    //           + '&money=' + this.sizeForm.money3
    //   this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
    //     .then((res) => {
    //        this.dialogFormVisible = false;
    //     })
    //     .catch((error)=>{
    //           console.log(error);
    //     })
    // },

    // tijiao2(){
    //   var data = 'id=' + this.xiugai.id
    //           + "&modelid=" + this.id
    //           + '&money=' + this.sizeForm.money4
    //   this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
    //     .then((res) => {
    //       this.dialogFormVisible = false;
    //     })
    //     .catch((error)=>{
    //           console.log(error);
    //     })
    // },

    tijiao3(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money5
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
          this.dialogFormVisible = false;
        })
        .catch((error)=>{
              console.log(error);
        })
    },

   

 
    
  },  //methods的结尾括号

  //渲染数据的钩子(生命周期)
  created(){
      var data= "modelid=" + this.id
      this.axios.post('http://47.103.1.220/admin/modelDetails',data)
      .then((res) => {
        console.log(res)
        var ww = JSON.parse(res.data.memoriesJson)
        var ww1 = JSON.parse(res.data.colorsJson)
        var ww2 = JSON.parse(res.data.typesJson)
        this.tableData = ww
        this.tableData1 = ww1
        this.tableData2 = ww2
        var ww3 = JSON.parse(res.data.modelOptionsJson) 
        console.log(ww3)
        for(var i=0; i<ww3.length; i++){
          if(ww3[i].assessid == 2){
              this.baoxiu.push(ww3[i])
              this.tableData3 = this.baoxiu
          }else if(ww3[i].assessid == 3){
              this.baoxiu1.push(ww3[i])
              this.tableData4 = this.baoxiu1

          }else if(ww3[i].assessid == 4){
              this.baoxiu2.push(ww3[i])
              this.tableData5 = this.baoxiu2
          }
        }
      })
      .catch((error)=>{
        console.log(error);
      })

      // this.axios.post("http://47.103.1.220:8080/recycle-0.0.1-SNAPSHOT/admin/uploadimg")
      //       // http://47.103.1.220:8080/recycle-0.0.1-SNAPSHOT/WEB-INF/classes/static/images/20190523031647.jpg
      //   .then((res)=>{
      //     var ww = JSON.parse(res.data)
      //         this.baseData.src = ww.path
      //     })
      //   .catch((error)=>{
      //       console.log(error);
      //   })

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div h1{
    font-weight: 100
}
.div{
    margin:60px 0 15px 0px;
}
.btn{
    margin-left:30px;
}
.eltable{
    margin-left:30px;
}
.input1,
.input2{
    float:left
}
.elfrom{
    overflow: hidden;
    height: auto;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-size:contain
  }
  .avatar {
    width: 100px;
    height: 80px;
    display: block;
  }
</style>