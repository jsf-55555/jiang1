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
      <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
            <el-form-item label="类型: ">
                <el-input v-model="sizeForm.catalogName"></el-input>
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('sizeForm')">确定</el-button>
        </div>
    </el-dialog>
    
    
    <!--修改 -->
    <el-dialog title="修改分类" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
      <el-form :model="xiugai" ref="xiugai" class="hhh">
        <el-form-item label="分类"  :label-width="formLabelWidth">
          <el-input v-model="xiugai.catalogName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
        <el-button type="primary" @click="sub('xiugai')" >确定修改</el-button>
      </div>
    </el-dialog>



    <!-- 渲染数据的表格 -->
    <h1>分类管理</h1>
    <el-table ref="multipleTable" :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="200" align="center"></el-table-column>
        <el-table-column prop="catalogName" label="分类名称" width="300"></el-table-column>
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
          catalogName: '',  //类型
          sousuo:''
        },
      formLabelWidth: "120px",
      xiugai: {
        id:"",
        catalogName: "",
      },

      tableData: [
        {
          id: "",
          catalogName: ""
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏  
      dialogFormVisible1: false,
    };
  },

  //方法
  methods: {
    handleClick(row, id) {
         this.xiugai.id= row.id
    },
    //修改的方法
    sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
          var data = 'id=' + this.xiugai.id
                      +'&catalogName=' + this.xiugai.catalogName
                console.log(data)
              this.axios.post('http://47.103.1.220/admin/updateCatalog',data)
              .then((res)=>{
                   this.axios.get('http://47.103.1.220/admin/queryCatalog')
                  .then((res) => {
                    var xh2 = JSON.parse(res.data.json)
                      this.tableData = xh2
                  })
                  .catch((error)=>{
                    console.log(error);
                  });
              }).catch((error)=>{
                console.log(error);
              });
          this.dialogFormVisible1 = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    
    //这是添加分类的方法
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = 'catalogName=' + this.sizeForm.catalogName
          this.axios.post('http://47.103.1.220/admin/addCatalog',data)
          .then((res) => {       
              this.axios.get('http://47.103.1.220/admin/queryCatalog')
                .then((res) => {
                  var xh1 = JSON.parse(res.data.json)
                    this.tableData = xh1
                })
                .catch((error)=>{
                  console.log(error);
                });
          })
          .catch((error)=>{
            console.log(error);
          });


          this.dialogFormVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      },

    //数据的删除按钮的方法
    shanchu(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {       
          var data = 'id=' + id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteCatalog",data).then((res)=>{
            this.axios.get('http://47.103.1.220/admin/queryCatalog')
              .then((res) => {
                var xh1 = JSON.parse(res.data.json)
                  this.tableData = xh1
              })
              .catch((error)=>{
                console.log(error);
              });
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

  //created方法 把数据渲染到页面
  created(){
      this.axios.get('http://47.103.1.220/admin/queryCatalog')
      .then((res) => {
        var sx = JSON.parse(res.data.json)
        this.tableData = sx
          // this.tableData = res.data
      })
      .catch((error)=>{
        console.log(error);
      })
      },
}
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