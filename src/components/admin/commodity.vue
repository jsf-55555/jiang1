<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 搜索框 -->
    
        <el-input v-model="sizeForm.sousuo"  placeholder="请输入搜索内容" class="input">
            <i class="el-input__icon el-icon-search" slot="suffix"></i>
        </el-input>

    <!-- 添加用户按钮功能 -->
    <el-button size="mini" type="primary"  plain @click="dialogFormVisible = true" class="adduser">添加分类</el-button>
    <el-dialog title="添加分类" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
      <el-form ref="form" :model="sizeForm" label-width="250px" size="small" style="width: 30%">
            <el-form-item label="类型: ">
                <el-input v-model="sizeForm.model"></el-input>
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('formName')">确定</el-button>
      </div>
    </el-dialog>
    
    
    <!--信息渲染的表格  -->

    <el-table ref="multipleTable" :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="150" align="center"></el-table-column>
        <el-table-column prop="catalog.catalogName" label="分类名称" width="200"></el-table-column>
        <el-table-column prop="assess.assessName" label="属性分类" width="200"></el-table-column>
        <el-table-column prop="content" label="属性名" width="200"></el-table-column>
        <el-table-column prop="money" label="手续费" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
            <template slot-scope="scope">   
            <el-button-group>
                 <el-button  @click="{dialogFormVisible1 = true,handleClick(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="shanchu(scope.row.id)">删除</el-button>
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
      formLabelWidth: "120px",
      tableData: [
        {
          id: "",
          catalogName: "",
          assessName:"",
          content:'',
          money:""
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏   
    };
  },
  methods: {
    handleClick(row, id) {
        console.log(row, id);
    },

    onSubmit() {
        console.log('submit!');
    },

    //这是添加用户的方法
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
    //       var data =  'catalogid=' + this.sizeForm.catalogid
    //                   + '&assessName=' + this.sizeForm.assessName
    //       this.axios.post('http://47.103.1.220/admin/addAssessOption',data)
    //       .then((res) => {  
    //         console.log("111")
    //            this.axios.get('http://47.103.1.220/admin/queryAssess')
    //             .then((res) => {
    //               var sx2 = JSON.parse(res.data.json)
    //               this.tableData = sx2
    //             })
    //             .catch((error)=>{
    //               console.log(error);
    //             })
    //       })
    //       .catch((error)=>{
    //         console.log(error);
    //       });
    //       this.dialogFormVisible = false
    //     } else {
    //       console.log('error submit!!');
    //       return false;
        }
        });
      },

    //数据的删除按钮的方法
    shanchu(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var data = 'id=' + id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteAssessOption",data).then((res)=>{
            this.axios.get('http://47.103.1.220/admin/queryAssessOption')
              .then((res) => {
                console.log(res.data)
                var ww = JSON.parse(res.data.json)
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
  },

  created(){
      this.axios.get('http://47.103.1.220/admin/queryAssessOption')
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

</style>