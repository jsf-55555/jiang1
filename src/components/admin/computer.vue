<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>

    <!-- 处理器 tableData4 -->
    <div class="div">
        <h1>CPU处理器</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money3" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" v-on:click.stop="tijiao1">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData4" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="处理器" width="200"></el-table-column>
            <el-table-column prop="money" label="之前的金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 显卡 tableData2 -->
    <div class="div">
        <h1>显卡</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money3" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" v-on:click.stop="tijiao2">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData2" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="显卡" width="200"></el-table-column>
            <el-table-column prop="money" label="之前的金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 固态硬盘 tableData1 -->
    <div class="div">
        <h1>固态硬盘</h1>
         <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money3" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" v-on:click.stop="tijiao3">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData1" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="固态硬盘" width="120"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 内存 tableData -->
    <div class="div">
        <h1>内存</h1>
        <el-form :model="sizeForm" label-width="100px" size="small" style="width: 60%" class="elfrom">
           <el-form-item label="添加内存:" v-model="value" style="width: 35%" class="input1">
                <el-select v-model="sizeForm.neicun" allow-create filterable clearable automatic-dropdown placeholder="请选择存储容量">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="扣除金额" class="input2">
                <el-input v-model="sizeForm.money" placeholder="请输入扣除金额" style="width: 80%"></el-input>
            </el-form-item>
            <el-button type="success" plain class="btn" @click="addneicun">添加内存</el-button> 
         </el-form>
        <el-table :data="tableData" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="memorysize" label="内存" width="120"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteMemorysize(scope.row.id)">删除</el-button>
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 开机运行 tableData3-->
    <div class="div">
        <h1>开机运行</h1>
         <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money3" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" v-on:click.stop="tijiao1">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData3" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="开机运行" width="120"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
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

    <!--边框背板 tableData5-->
    <div class="div">
        <h1>壳的磕碰情况</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money4" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao2">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData5" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="边框背板" width="200"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="150"></el-table-column>
            <el-table-column prop="picture" label="图片上传" width="120">
                 <label class="avatarbox">
                    <div class="avatar">
                        <input type="file" @change="upload($event)" class="file1">
                        <img :src="baseData.src" width="100" height="100" alert="请上传头像">
                        <input type="hidden" v-model="baseData.src">
                    </div>
                </label>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="400">
                <template slot-scope="scope">
                    <el-button-group>
                      <el-button @click="picture(scope.row,scope.row.id)" type="primary" size="mini" icon="el-icon-tickets">上传图片</el-button>
                      <el-button @click="{warrantyperiod(scope.row,scope.row.id),dialogFormVisible = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                      <!-- <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteType(scope.row.id)">删除</el-button> -->
                    </el-button-group>
                </template>
        </el-table-column>
        </el-table>
    </div>

    <!-- 屏幕外观 tableData6-->
    <div class="div">
        <h1>屏幕外观</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="xiu" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money5" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao3">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData6" style="width:80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="屏幕外观" width="200"></el-table-column>
            <el-table-column prop="money" label="扣除金额" width="120"></el-table-column>
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

    <computer2></computer2>
    <router-view> </router-view>
  </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue'
import computer2 from './computer2.vue'
import recycle from '@/components/admin/recycle.vue'
export default {
  name: "userManage",
  components:{
    LeftSidebar,
    recycle,
    computer2
  },
  data() {
    return {
    baseData:{src:require("../../assets/icon_change_grey.png")},  //base64变量命名
    //数据
    sizeForm: {neicun:"",money:'',color:"",money1:"",type:"",WIFI:"",money2:"",money3:"",money4:"",money5:"",money6:""},   

    xiugai:{id:"",content:'',aassessid:''},  //修改数据的变量命名

    tableData: [{id:"",memorysize:"",money: ""}],

    tableData1: [{id:"",content:"",money:""}],

    tableData2: [{id:"",type:"",money:""}],


    baoxiu:[],
    tableData3:[{aassessid:"",id: "",content:"",money:""}],

    baoxiu1:[],
    tableData4:[{aassessid:"",id: "",content:"",money:"",picture:""}],

    baoxiu2:[],
    tableData5:[{aassessid:"",id: "",content:"",money:""}],

    baoxiu10:[],baoxiu11:[],baoxiu12:[],

    baoxiu3:[],
    tableData6:[{aassessid:"",id: "",content:"",money:""}],

    baoxiu4:[],baoxiu5:[],baoxiu6:[],

    //选择列表`
    options: [{value: '8G',label: '8G'},{value: '16G',label: '16G'},{value: '32G',label: '32G'},{value: '64G',label: '64G'}],
    value: [],

    options1: [{value: '黑色',label: '黑色'},{value: '白色',label: '银色'},{value: '金色',label: '金色'}],
    value1: [],

    options2: [{value: '大陆国行',label: '大陆国行'},{value: '香港国行',label: '香港国行'},{value: '非国行港行',label: '非国行港行'},{value: '国行官换机',label: '国行官换机'},{value: '展示机',label: '展示机'}],
    value2: [],

    options3: [{value: 'WIFI',label: 'WIFI'},{value: 'WIFI+4G',label: 'WIFI+4G'}],
    value3: [],

    id:this.$route.params.id,
    formLabelWidth: "120px",
    dialogFormVisible: false, //对话框 true显示 false隐藏

    imageUrl: ''   //这是上传图片的变量命名
    };
  },   //data结尾的括号

  methods: {
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
            this.axios.post("http://47.103.1.220/admin/uploadimg",data)
            .then((res)=>{
              var ww = JSON.parse(res.data)
                console.log(ww.path)
                  this.baseData.src = ww.path
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
              console.log(data)
          this.axios.post('http://47.103.1.220/admin/insertMemory',data)
          .then((res) => {
              var data1 = "modelid=" + this.id
            console.log(data1)
              this.axios.post('http://47.103.1.220/admin/modelDetails',data1)
                .then((res) => {
                  var ww = JSON.parse(res.data.memoriesJson)
                console.log(ww)
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
    
    //修改的数据
    warrantyperiod(row,id){
      this.xiugai.id = row.id
      this.xiugai.content = row.content
      this.xiugai.aassessid = row.aassessid
      console.log(row)
    },

    //提交保修的方法
    tijiao1(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money3
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
           this.dialogFormVisible = false;
        })
        .catch((error)=>{
              console.log(error);
        })
    },

    tijiao2(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money4
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
          this.dialogFormVisible = false;
        })
        .catch((error)=>{
              console.log(error);
        })
    },

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
        var ww = JSON.parse(res.data.memoriesJson)
        // var ww1 = JSON.parse(res.data.colorsJson)
        // var ww2 = JSON.parse(res.data.typesJson)
        this.tableData = ww
        // this.tableData1 = ww1
        // this.tableData2 = ww2
        var ww3 = JSON.parse(res.data.modelOptionsJson)
        console.log(ww3)
        for(var i=0; i<ww3.length; i++){
          if(ww3[i].assessid == 44){    //显卡
              this.baoxiu.push(ww3[i])
              this.tableData2 = this.baoxiu
          }else if(ww3[i].assessid == 45){   //固态硬盘
              this.baoxiu1.push(ww3[i])
              this.tableData1 = this.baoxiu1
          }else if(ww3[i].assessid == 47){   //开机情况
              this.baoxiu3.push(ww3[i])
              this.tableData3 = this.baoxiu3
          }else if(ww3[i].assessid == 48){   //边框背板
              this.baoxiu5.push(ww3[i])
              this.tableData5 = this.baoxiu5
          }else if(ww3[i].assessid == 49){   //屏幕外观
              this.baoxiu6.push(ww3[i])
              this.tableData6 = this.baoxiu6
          }else if(ww3[i].assessid == 12){
              this.baoxiu4.push(ww3[i])
              this.tableData4 = this.baoxiu4
          }
        }
      })
      .catch((error)=>{
        console.log(error);
      })

      var data1 = ''
      
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