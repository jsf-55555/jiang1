<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <el-button size="mini" type="primary"  plain @click="dialogFormVisible = true" class="adduser">添加加价券</el-button>
    <el-dialog title="商品管理" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
      <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 85%">
              <el-form-item label="加价券名字">
                  <el-input v-model="sizeForm.name" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="加多少钱">
                  <el-input v-model="sizeForm.price" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="满多少钱">
                  <el-input v-model="sizeForm.totalprice" placeholder=""></el-input>
              </el-form-item>
              <!-- <el-form-item label="起始时间">
                  <div class="block">
                      <el-date-picker v-model="sizeForm.value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                  </div>
              </el-form-item>
              <el-form-item label="结束时间">
                  <div class="block">
                      <el-date-picker v-model="sizeForm.value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
                  </div>
              </el-form-item> -->
             <el-form-item label="起始时间">
                <el-input v-model="sizeForm.starttime" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="结束时间">
                <el-input v-model="sizeForm.endtime" placeholder=""></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('sizeForm')">提交</el-button>
        </div>
    </el-dialog>

     
    <!--修改框 -->
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

    <!--信息渲染的表格-->
    <h1>订单详情</h1>
    <el-table  :data="tableData" style="width:100%">
        <el-table-column prop="additionno" label="编号" width="280"></el-table-column>
        <el-table-column prop="additionname" label="优惠券名字" width="200"></el-table-column>
        <el-table-column prop="condition" label="加多少钱" width="150"></el-table-column>
        <el-table-column prop="money" label="满多少钱" width="150"></el-table-column>
        <el-table-column prop="begintime" label="开始时间" width="280"></el-table-column>
        <el-table-column prop="endtime" label="结束时间" width="280"></el-table-column>
        <el-table-column prop="status" label="状态" width="280"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
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
          name: '',  
          price:'',
          totalprice:"",
          starttime:"",
          endtime:"",
          value1:"",
          value2:"",
        },
      options: [{
          value: '已上架',
          label: '已上架'
        }, {
          value: '已下架',
          label: '已下架'
        }],

      xiugai: {
        id:'',
        additionno:"",
        status:"",
      },
        
        value1: "",

      formLabelWidth: "120px",
      // status:'',
      tableData: [
        {
          id:"",
          additionname:"",
          additionno:"",
          condition:"",
          money:"",
          begintime:"",
          endtime:"",
          status:""
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏
      dialogFormVisible1: false,   
    };
  },
  methods: {
    handleClick(row, id) {
        this.xiugai.id= row.id
        this.xiugai.additionno = row.additionno
        this.xiugai.status = row.status
        console.log(row)
    },

  submitForm(sizeForm){
      this.$refs[sizeForm].validate(valid => {
        if (valid) {
          var data = 'additionName=' + this.sizeForm.name      //加价券名字
                      +'&money=' + this.sizeForm.price    //加价券加多少价格
                      +'&condition=' + this.sizeForm.totalprice     //满多少钱
                      +'&beginTime=' + this.sizeForm.starttime  //开始时间
                      +'&endTime=' + this.sizeForm.endtime;           //结束时间
                  console.log(data)
          this.axios.post('http://47.103.1.220/admin/addAddition',data)
          .then((res) => {
                // var data = 'catalogId=' + this.sizeForm.catalogid
                //   this.axios.post('http://47.103.1.220/admin/index',data)
                //     .then((res) => {
                //       var ok = JSON.parse(res.data.modelJson)
                //         this.tableData = ok
                //     })
                //     .catch((error)=>{
                //       console.log(error);
                //     });
          }).catch((error)=>{
            console.log(error);
          });

          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },

   sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
          var data =  'additionNo=' + this.xiugai.additionno
                      +'&status=' + this.xiugai.status
                  console.log(data)
              this.axios.post('http://47.103.1.220/admin/editAddition',data)
              .then((res)=>{
                console.log(res)
                this.axios.get('http://47.103.1.220/admin/queryAddition')
                  .then((res) => {
                    var sx2 = JSON.parse(res.data)
                      this.tableData = sx2.additions
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

  created(){
      this.axios.get('http://47.103.1.220/admin/queryAddition')
      .then((res) => {
        var sx2 = JSON.parse(res.data)
          this.tableData = sx2.additions
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
  width: 80%;
}
h1 {
  margin-top:30px;
  margin-bottom: 30px;
  font-size: 35px;
}
.input{
    width: 200px;
    margin-top:30px;
    margin-bottom: 15px;
}
.el-input__icon{
  width: 35px;
}

</style>