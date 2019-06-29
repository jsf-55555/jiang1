<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 修改框 -->
        <el-dialog title="修改状态" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
          <el-form :model="xiugai" ref="xiugai" class="hhh" label-width="250px" size="small" style="width: 80%">
                <el-form-item label="状态" v-model="value1" >
                    <el-select multiple placeholder="请选择" v-model="xiugai.status">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="实际回收金额: ">
                    <el-input v-model="xiugai.shijimoney"></el-input>
                </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
            <el-button type="primary" @click="sub('xiugai')" >确定修改</el-button>
          </div>
        </el-dialog>

        

    <!--信息渲染的表格  -->
    <h1>订单详情</h1>
    <div style="margin:20px 0px 20px 30px;display:inline-block">搜索:
        <el-input v-model="sizeForm.sousuo"  placeholder="请输入搜索内容" class="input1">
              <i class="el-input__icon el-icon-search" slot="suffix" @click="sousuo()"></i>
        </el-input>
    </div>
    <el-table  :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="50"></el-table-column> 
        <el-table-column prop="orderno" label="订单编号" width="280"></el-table-column> 
        <el-table-column prop="username" label="姓名" width="100"></el-table-column>
        <el-table-column prop="phone" label="支付宝账号(电话)" width="250"></el-table-column> 
        <el-table-column prop="orderModel.model" label="回收型号" width="200"></el-table-column>
        <el-table-column prop="orderprice" label="回收预估价" width="200"></el-table-column>   
        <el-table-column prop="status" label="状态" width="150"></el-table-column>
        <!-- <el-table-column prop="alipayid" label="阿里id" width="250"></el-table-column> -->
        <!-- 这是回收实际金额, 从后台数据库里拿 -->
        <!-- <el-table-column prop="shijimoney" label="实际回收金额" width="250"></el-table-column> -->
        <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
            <el-button-group>
               <el-button  @click="{xiangqing(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-tickets">详情按钮</el-button>
               <el-button  @click="{dialogFormVisible1 = true,handleClick(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-edit">修改</el-button>
            </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
          <el-pagination class="el-pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="100"
            layout=" sizes, prev, pager, next, jumper, total"
            :total="total">
    </el-pagination>
    </div>
  </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue'
import qs from 'qs'
export default {
  name: "userManage",
  components:{
    LeftSidebar
  },
  data() {
    return {
      total:0,
      page:10,
      currentPage4:1,
      pageSize: 4,
      pageNum:1,

    //数据
      sizeForm: {
          model: '',  //类型
          sousuo:''
        },

      xiugai: {
        id:'',
        alipayid:"",
        status:[],
        shijimoney:""
      },

       options: [{
          value: '商家待收货',
          label: '商家待收货'
        }, {
          value: '商家已收货',
          label: '商家已收货'
        }, {
          value: '订单成功',
          label: '订单成功'
        }, {
          value: '客户取消订单,已退货',
          label: '客户取消订单,已退货'
        }],
        
        value1: "",

      formLabelWidth: "120px",
      // status:'',
      tableData: [
        {
          id: "",
          orderno:"",
          orderModel:"",
          detection:"",
          username: "",
          phone:"",
          idcard:'',
          credit: "",
          address: "",
          alipayid:"",
          status:"",
          shijimoney:0
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏
      dialogFormVisible1: false,   
    };
  },
  methods: {
    // 搜索框的方法
    sousuo(){
        var data =  'id=' + this.xiugai.id
                      +'&status=' + this.xiugai.status
                  console.log(data)
              this.axios.post('http://47.103.1.220/admin/adminUpdateOrder',data)
              .then((res)=>{
                
          })
          .catch((error)=>{
            console.log(error);
          });
    },
    handleClick(row, id) {
        this.xiugai.id = row.id
    },

    xiangqing(row, id){
        this.$router.push({
          path: `/allindentxq/${id}`,
        })
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

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
                    var sx2 = JSON.parse(res.data.json)
                    this.tableData = sx2
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
        //数据分页器
  getUser: function () {
    var data = 'pageNum='+this.pageNum
    console.log(data)
    this.loading = true;
    this.axios.get('http://www.jldhs.cn:8080/recycle-0.0.1-SNAPSHOT/admin/queryOrder?'+data)
      .then((res) => {
          if(res.data){
                var sx = JSON.parse(res.data.json)
                console.log(sx)
                  this.tableData=sx
                  // this.tableData.detection = JSON.parse(sx.orderModel.detection)
                 
                  // this.currentPage4 = res.data.pages;
                  this.total = res.data.pages;
                  this.loading = true;
          }else{
              this.loading = false;
              this.$message({
              message:  res.data.returnMsg,
              type: 'error'
              });
          }
      })
      .catch((error)=>{
        console.log(error);
      })
    },

    handleSizeChange(val) {
        this.pageSize = val;
        this.getUser();
    },
    //条目改变时
    handleCurrentChange(val) {
        this.pageNum = val;
        this.getUser();
        console.log("123")
    },


  },

  created(){
     var lett = this;

      // 调用分页器渲染数据
      lett.getUser();

      // 搜索框enter事件
      document.onkeydown = function(e) {
          var key = window.event.keyCode;
          if (key == 13) {
              lett. sousuo()
          }
      }
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
    margin-top:30px;
  margin-bottom: 30px;
  font-size: 35px;
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
.block{
  margin-top:50px
}

.block .el-pagination{
  float:right
}
.classify{
  width: 100%;
  height: auto;
  margin:15px 0;
}
</style>