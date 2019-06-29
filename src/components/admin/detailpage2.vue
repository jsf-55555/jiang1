<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 屏幕显示-->
    <div class="div">
        <h1>屏幕显示</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="屏幕显示" width="200"></el-table-column>
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

    <!-- 维修拆机史-->
    <div class="div">
        <h1>维修拆机史</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money1" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao1">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData1" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="维修拆机史" width="200"></el-table-column>
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

    <!-- 开机情况-->
    <div class="div">
        <h1>开机情况</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money2" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao2">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData2" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="开机情况" width="200"></el-table-column>
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

    <!-- icloud账户-->
    <div class="div">
        <h1>icloud账户</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money3" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao3">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData3" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="icloud账户" width="200"></el-table-column>
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

    <!-- 功能问题-->
    <div class="div">
        <h1>功能问题</h1>
        <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
          <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
              <el-form-item label="扣除金额" class="input2" style="width: 80%">
                  <el-input v-model="sizeForm.money4" placeholder="请输入扣除金额" style="width: 100%"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="tijiao4">提交</el-button>
          </div>
        </el-dialog>
        <el-table :data="tableData4" style="width: 80%" max-height="250" class="eltable">
            <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
            <el-table-column prop="content" label="功能问题" width="200"></el-table-column>
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

    <router-view></router-view>
  </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue'
import recycle from '@/components/admin/recycle.vue'
export default {
  name: "userManage",
  components:{
    LeftSidebar,
    recycle,
  },
  data() {
    return {
    //数据
      sizeForm: {
        money:'',money1:"",money2:"",money3:"",money4:"",
        },

    xiugai:{
      id:"",
      content:'',
      aassessid:'',
    },
    
    baoxiu:[],
    tableData: [{
        id: "",
        memorysize:"",
        money: "",
    }],

    baoxiu1:[],
    tableData1: [{
        id: "",
        memorysize:"",
        money: "",
    }],

    baoxiu2:[],
    tableData2: [{
        id: "",
        memorysize:"",
        money: "",
    }],

    baoxiu3:[],
    tableData3: [{
        id: "",
        memorysize:"",
        money: "",
    }],

    baoxiu4:[],
    tableData4: [{
        id: "",
        memorysize:"",
        money: "",
    }],

    

      id:this.$route.params.id,
      formLabelWidth: "120px",
      dialogFormVisible: false, //对话框 true显示 false隐藏  
    };
  },   //data结尾的括号

  methods: {
    //修改保修期的扣除金额方法
    warrantyperiod(row,id){
       this.xiugai.id = row.id
    },

    //保修的方法
    tijiao(){
        var data = 'id=' + this.xiugai.id
                + "&modelid=" + this.id
                + '&money=' + this.sizeForm.money
            console.log(data)
        this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
          .then((res) => {
                this.dialogFormVisible = false
          })
          .catch((error)=>{
                console.log(error);
          })
    },

    tijiao1(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money1
              console.log(data)
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
            
            this.dialogFormVisible = false
        })
        .catch((error)=>{
              console.log(error);
        })
    },

    tijiao2(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money2
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
            
            this.dialogFormVisible = false
        })
        .catch((error)=>{
              console.log(error);
        })
    },

     tijiao3(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money3
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
             
            this.dialogFormVisible = false
        })
        .catch((error)=>{
              console.log(error);
        })
    },

    tijiao4(){
      var data = 'id=' + this.xiugai.id
              + "&modelid=" + this.id
              + '&money=' + this.sizeForm.money4
      this.axios.post('http://47.103.1.220/admin/updateModeldetails',data)
        .then((res) => {
             
            this.dialogFormVisible = false
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
        var ww3 = JSON.parse(res.data.modelOptionsJson)
        for(var i=0; i<ww3.length; i++){
          if(ww3[i].assessid == 5){
              this.baoxiu.push(ww3[i])
              this.tableData = this.baoxiu
          } else if(ww3[i].assessid == 6){
              this.baoxiu1.push(ww3[i])
              this.tableData1 = this.baoxiu1
          }
        else if(ww3[i].assessid == 7){
              this.baoxiu2.push(ww3[i])
              this.tableData2 = this.baoxiu2
          }else if(ww3[i].assessid == 8){
              this.baoxiu3.push(ww3[i])
              this.tableData3 = this.baoxiu3
          }else if(ww3[i].assessid == 9){
              this.baoxiu4.push(ww3[i])
              this.tableData4 = this.baoxiu4
          }
        }
      })
      .catch((error)=>{
        console.log(error);
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userManage{
  margin-left: 0px;
}
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
</style>