<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 搜索框 -->
    
        <el-input v-model="sizeForm.sousuo"  placeholder="请输入搜索内容" class="input">
            <i class="el-input__icon el-icon-search" slot="suffix"></i>
        </el-input>

    <!-- 添加用户按钮功能 -->
    <el-button size="mini" type="primary"  plain @click="dialogFormVisible = true" class="adduser">添加</el-button>
    <el-dialog title="添加属性分类" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true">
      <el-form ref="formName" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
            <el-form-item label="分类名称: ">
                <el-input v-model="sizeForm.content"></el-input>
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('formName')">确定</el-button>
        </div>
    </el-dialog>
    
    
    <!--信息渲染的表格  -->
    <el-table ref="multipleTable" :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="200" align="center"></el-table-column>
        <el-table-column prop="content" label="内容" width="300"></el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
            <template slot-scope="scope">
            <el-button-group>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="shanchu(scope.row.id)">删除</el-button>
            </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <router-view> </router-view>
  </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue'
import recycle from '@/components/admin/recycle.vue'
export default {
  name: "userManage",
  components:{
    LeftSidebar,
    recycle
  },
  data() {
    return {
    //数据
      sizeForm: {
        content:"",
        sousuo:''
        },

      id:this.$route.params.id,
      formLabelWidth: "120px",

      tableData: [
        {
          aassessid: "",
          content: "",
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏   
    };
  },
  methods: {
    //这是添加属性分类的方法
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var data =  'assessId=' + this.id
                      + '&content=' + this.sizeForm.content
                console.log(data)
          this.axios.post('http://47.103.1.220/admin/addAssessOption',data)
          .then((res) => {
              var data1= 'assessId=' + this.id
              this.axios.post('http://47.103.1.220/admin/queryAssessOption',data1)
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
          this.dialogFormVisible = false
        } else {
          console.log('error submit!!');
          return false;
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
          this.axios.post("http://47.103.1.220/admin/deleteAssessOption",data)
          .then((res)=>{
              var data2 = 'assessId=' + this.id
              this.axios.post('http://47.103.1.220/admin/queryAssessOption',data2)
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
      var data= "assessId=" + this.id
      console.log(data)
      this.axios.post('http://47.103.1.220/admin/queryAssessOption',data)
      .then((res) => {
        console.log(res.data)
        var ww = JSON.parse(res.data.json)
        this.tableData = ww
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