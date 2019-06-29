<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 添加用户按钮功能 -->
    <el-button
      size="mini"
      type="primary"
      plain
      @click="dialogFormVisible = true"
      class="adduser"
    >添加用户</el-button>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <el-form :model="groupForm" ref="groupForm" class="hhh">
        <el-form-item label="用户名" prop="user" :label-width="formLabelWidth">
          <el-input v-model="groupForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
          <el-input v-model="groupForm.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth"> 
          <el-input v-model="groupForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel" :label-width="formLabelWidth">
          <el-input v-model="groupForm.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员组权限" prop="level" :label-width="formLabelWidth">
          <el-checkbox-group v-model="groupForm.level">
            <el-checkbox label="1" name="level">管理员</el-checkbox>
            <el-checkbox label="2" name="level">普通用户</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
        
        <el-button type="primary" @click="submitForm('groupForm')">保存</el-button>
      </div>
    </el-dialog>

    <el-input v-model="groupForm.sousuo" placeholder="请输入搜索内容" class="input">
      <i class="el-input__icon el-icon-search" slot="suffix"></i>
    </el-input>

  <el-select v-model="value9" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
      <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
  </el-select>



    <el-dialog title="修改用户" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
      <el-form :model="xiugai" ref="xiugai" class="hhh">
        <el-form-item label="用户名"  :label-width="formLabelWidth">
          <el-input v-model="xiugai.adminName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"  :label-width="formLabelWidth"> 
          <el-input v-model="xiugai.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="xiugai.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员组权限" :label-width="formLabelWidth">
          <el-checkbox-group v-model="xiugai.level">
            <el-checkbox label="1" name="level">管理员</el-checkbox>
            <el-checkbox label="2" name="level">普通用户</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
        
        <el-button type="primary" @click="sub('xiugai')" >确定修改</el-button>
      </div>
    </el-dialog>

    <h1>用户信息</h1>
    <el-table ref="multipleTable" :data="tableData" style="width:100%">
      <el-table-column prop="id" label="id" width="100" v-show="ok"></el-table-column>
      <el-table-column prop="adminName" label="用户名" width="150"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="250"></el-table-column>
      <el-table-column prop="tel" label="电话" width="250"></el-table-column>
      <el-table-column prop="level" label="权限" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button-group>
            <el-button  @click="{dialogFormVisible1 = true,handleClick(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="cancelopen(scope.row.id)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
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
      options4:"",
      options4: [],
      value9: [],
      list: [],
      loading: false,
      groupForm: {
        userName: "",
        password: "",
        email: "",
        tel: "",
        level:[],
        sousuo:""
      },
      // bian:"",
      formLabelWidth: "120px",
      xiugai: {
        id:"",
        adminName: "",
        email: "",
        tel: "",
        level:[],
      },
      tableData: [
        {
          id:"",
          adminName: "",
          email: "",
          tel: "",
          level: ""
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏
      dialogFormVisible1: false, //对话框 true显示 false隐藏 
    };
  },
  methods: {
    handleClick(row,id) {
         this.xiugai.id= row.id
    },
    sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
          var data = 'id=' + this.xiugai.id
                      +'&adminName=' + this.xiugai.adminName
                      +'&email=' + this.xiugai.email
                      +'&tel=' + this.xiugai.tel
                      +'&level=' + this.xiugai.level;
                console.log(data)
              this.axios.post('http://47.103.1.220/admin/updateAdmin',data)
              .then((res)=>{
                console.log(res.data)
                   this.axios.get('http://47.103.1.220/admin/queryAdmin')
                      .then((res)=>{
                        console.log(res.data)
                        var xiu = JSON.parse(res.data)
                        this.tableData =  xiu
                  }).catch((error)=>{
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

  
    ok(){
       return false
    },

    //这是添加用户的方法
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = 'adminName=' + this.groupForm.userName
                      +'&password=' + this.groupForm.password
                      +'&email=' + this.groupForm.email
                      +'&tel=' + this.groupForm.tel
                      +'&level=' + this.groupForm.level;
          this.axios.post('http://47.103.1.220/admin/insertAdmin',data)
          .then((res) => {       
               this.axios.get('http://47.103.1.220/admin/queryAdmin')
              .then((res) => {
                var xh1 = JSON.parse(res.data)
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


    //数据的删除按钮的方
     cancelopen(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {        
           
          var data = 'adminid=' + id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteAdmin",data).then((res)=>{
            this.axios.get('http://47.103.1.220/admin/queryAdmin')
              .then((res) => {
                var xh1 = JSON.parse(res.data)
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

      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },
  },

  created() {
      this.axios.get('http://47.103.1.220/admin/queryAdmin')
      .then((res) => {
        var sx = JSON.parse(res.data)
        this.tableData = sx
      })
      .catch((error)=>{
        console.log(error);
      });
  },

   mounted() {
      this.list = this.tableData.map(item => {
        return { value: item, label: item };
      });
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
a{
  font-size:15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.adduser {
  margin: 30px 0 30px 0;
  padding: 12px 15px;
}
.el-input {
  width: 70%;
}
h1{
  margin-bottom: 30px;
  font-size: 35px;
}
.input {
  margin-left: 200px;
  width: 220px;
}
.el-input__icon {
  width: 35px;
}
</style>