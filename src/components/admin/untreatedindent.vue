<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 搜索框 -->
    
        <el-input v-model="sizeForm.sousuo"  placeholder="请输入搜索内容" class="input">
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click="sousuo()">搜索</el-button>

    <!-- 修改框 -->
        <el-dialog title="修改状态" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
          <el-form :model="xiugai" ref="xiugai" class="hhh" label-width="250px" size="small" style="width: 80%">
                <el-form-item label="状态" v-model="value1" >
                <el-select multiple placeholder="请选择" v-model="xiugai.status">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
            <el-button type="primary" @click="sub('xiugai')" >确定修改</el-button>
          </div>
        </el-dialog>



    <!--信息渲染的表格  -->
    <h1>待收货订单详情</h1><span @click="fanhui()" class="fanhui">返回</span>
    <el-table ref="multipleTable" :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="50"></el-table-column>
        <el-table-column prop="orderno" label="订单编号" width="300"></el-table-column>
        <el-table-column prop="username" label="姓名" width="100"></el-table-column>
        <el-table-column prop="phone" label="联系电话" width="150"></el-table-column>
        <!-- <el-table-column prop="address" label="地址" width="400"></el-table-column> -->
        <el-table-column prop="huishou" label="回收商品" width="100"></el-table-column>
        <el-table-column prop="orderprice" label="评估价格" width="100"></el-table-column>
        <el-table-column prop="weikuan" label="剩余尾款" width="100"></el-table-column>
        <el-table-column prop="addtime" label="下单时间" width="150"></el-table-column>
        
        <el-table-column prop="status" label="状态" width="200"></el-table-column>

        <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">   
            <el-button-group>
               <el-button  @click="{dialogFormVisible1 = true,handleClick(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
            </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue'
export default {
  name: "userManage",
  components:{
    LeftSidebar
  },
  data() {
    return {
    //数据
      sizeForm: {
          model: '',  //类型
          sousuo:''
        },

      xiugai: {
        id:"",
        status:"",
      },

       options: [{
          value: '0',
          label: '未处理订单'
        }, {
          value: '1',
          label: '未结款订单'
        }, {
          value: '2',
          label: '已完成订单'
        }],

        value1: "",

      formLabelWidth: "120px",
      tableData: [
         {
          id: "",
          orderno:"",
          username: "",
          phone:"",
          address:'',
          huishou: "",
          orderprice: "",
          weikuan:"",
          addtime:"",
          status:[]
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏  
      dialogFormVisible1: false, 
    };
  },
  methods: {
    
    handleClick(row, id) {
        this.xiugai.id = row.id
    },

    onSubmit() {
        console.log('submit!');
    },

    fanhui(){
          this.axios.get('http://47.103.1.220/admin/queryOrder')
            .then((res) => {
              var sx = JSON.parse(res.data.json)
              this.tableData = sx
            })
            .catch((error)=>{
              console.log(error);
            })
    },

    //搜索功能
    sousuo(){
          var data =  'text=' + this.sizeForm.sousuo
                      console.log(data)
              this.axios.post('http://47.103.1.220/admin/queryOrder',data)
              .then((res)=>{
                console.log(res.data.json)
                var sx3 = JSON.parse(res.data.json)
                      this.tableData = sx3
          })
          .catch((error)=>{
            console.log(error);
          });
        },

    //数据的修改按钮的方法
    sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
           var data =  'id=' + this.xiugai.id
                      +'&status=' + this.xiugai.status
                      console.log(data)
              this.axios.post('http://47.103.1.220/admin/adminUpdateOrder',data)
              .then((res)=>{
                  this.axios.get('http://47.103.1.220/admin/queryOrder')
                    .then((res) => {
                      var sx3 = JSON.parse(res.data.json)
                      this.tableData = sx3
                    })
                    .catch((error)=>{
                      console.log(error);
                    })
          })
          .catch((error)=>{
            console.log(error);
          });
          this.dialogFormVisible1 = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  //created方法 把数据渲染到页面
  created(){
      this.axios.get('http://47.103.1.220/admin/queryOrder')
      .then((res) => {
        var sx = JSON.parse(res.data.json)
        this.tableData = sx
      })
      .catch((error)=>{
        console.log(error);
      })
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.adduser {
  margin: 30px 0 30px 50px;
  padding: 12px 15px;
}
.el-input {
  width: 400px;
}
h1 {
  margin-bottom: 30px;
  font-size: 35px;
}
.fanhui{
  margin-bottom: 10px;
}
.fanhui:hover{
  color:red;
}
.xuanzeqi{
    margin-left:300px;
}
.input{
    width: 200px;
    margin-top:30px;
    margin-bottom: 15px;
}
.el-input__icon{
  width: 35px;
}
.el-input__icon:hover{
  background: blue;
}
</style>