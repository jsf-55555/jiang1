<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 搜索框 -->
    
        <el-form ref="sizeForm" :model="search" size="small" style="width: 25%" class="search">
           <el-form-item v-model="value1" >
                <el-select placeholder="请搜索类型" v-model="search.sousuo1" @change="search111">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-input v-model="search.sousuo"  placeholder="请输入搜索内容" class="input1">
                  <i class="el-input__icon el-icon-search" slot="suffix" @click="sousuo()"></i>
            </el-input> -->
        </el-form> 

    <!-- 添加用户按钮功能 -->
    <el-button size="mini" type="primary"  plain @click="dialogFormVisible = true" class="adduser">添加分类</el-button>
    <el-dialog title="添加属性分类" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true">
      <el-form ref="formName" :model="sizeForm" label-width="250px" size="small" style="width: 80%">
            <el-form-item label="分类" v-model="value1" >
            <el-select multiple placeholder="请选择" v-model="sizeForm.catalogid">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="分类名称: ">
                <el-input v-model="sizeForm.assessName"></el-input>
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('formName')">确定</el-button>
        </div>
    </el-dialog>
    
   <!-- 修改的框 -->
   <el-dialog title="修改分类名称" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
      <el-form :model="xiugai" ref="xiugai" class="hhh" label-width="250px" size="small" style="width: 80%">
            <el-form-item label="分类" v-model="value2" >
            <el-select multiple placeholder="请选择" v-model="xiugai.catalogid">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="分类名称: ">
                <el-input v-model="xiugai.assessName"></el-input>
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
        <el-button type="primary" @click="sub('xiugai')" >确定修改</el-button>
      </div>
    </el-dialog>


    <!--信息渲染的表格  -->
    <el-table ref="multipleTable" :data="tableData" style="width:100%">
        <el-table-column prop="id" label="编号" width="200" align="center"></el-table-column>
        <el-table-column prop="catalog.catalogName" label="分类" width="300"></el-table-column>
        <el-table-column prop="assessName" label="分类名称" width="300"></el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
            <template slot-scope="scope">
            <el-button-group>
                 <el-button type="primary" size="mini" icon="el-icon-tickets" @click="next(scope.row,scope.row.id)">下一步操作</el-button>
                <el-button  @click="{dialogFormVisible1 = true,handleClick(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="shanchu(scope.row,scope.row.id)">删除</el-button>
            </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="block">
          <el-pagination
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
      id:"",
    //搜索
      search:{
          sousuo:'',   //搜索
          sousuo1:""  ,
          sousuo2:"",
        },
      options99: [],
     options88: [],
        value5: "",
      
    //数据
      sizeForm: {
        catalogid:[],
        assessName:"",
        sousuo:''
        },

         options: [{
          value: '1',
          label: '手机'
        }, {
          value: '2',
          label: '平板电脑'
        }, {
          value: '3',
          label: '笔记本电脑'
        }, {
          value: '4',
          label: '单反摄像'
        }],
        value1: "",

        options1: [{
          value: '1',
          label: '手机'
        }, {
          value: '2',
          label: '平板电脑'
        }, {
          value: '3',
          label: '笔记本电脑'
        }, {
          value: '4',
          label: '单反摄像'
        }],
        value2: "",

        options2: [{
          value: '1',
          label: '手机'
        }, {
          value: '2',
          label: '平板电脑'
        }, {
          value: '3',
          label: '笔记本电脑'
        }, {
          value: '4',
          label: '单反'
        }],
        value3: "",

      value4: "",

      formLabelWidth: "120px",
      nextt:[],
      xiugai: {
        assessId:"",
        id:"",
        catalogid:"",
        assessName: '',  //类型
      },

      tableData: [
        {
          id: 1,
          assessName: "",
          catalogName:""
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏   
      dialogFormVisible1: false,
    };
  },
  methods: {
    search111(){
        var data = 'catalogid=' + this.search.sousuo1
        console.log(data)
        this.axios.post('http://47.103.1.220/admin/queryAssess',data)
        .then((res)=>{
            // var sx = JSON.parse(res.data.brandJson)
            // this.options99 = sx
            var sw = JSON.parse(res.data)
            this.tableData = sw.assessList
        })
        .catch((error)=>{
            console.log(error);
          });
    },

    handleClick(row, id) {
        this.xiugai.id= row.id

        console.log(row)

        console.log(this.xiugai.id)
    },

    next(row,id){
          this.$router.push({
          path: `/classification/${id}`,
        })
    },

    //修改方法
    sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
          var data =  'id=' + this.xiugai.id
                      +'&assessName=' + this.xiugai.assessName
                      console.log(data)
              this.axios.post('http://47.103.1.220/admin/updateAssess',data)
              .then((res)=>{
                var data1 =  'catalogid=' + this.xiugai.catalogid
                  this.axios.post('http://47.103.1.220/admin/queryAssess',data1)
                .then((res) => {
                  var sx3 = JSON.parse(res.data)
                  this.tableData = sx3.assessList
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

    //这是添加属性分类的方法
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var data =  'catalogid=' + this.sizeForm.catalogid
                      + '&assessName=' + this.sizeForm.assessName
          this.axios.post('http://47.103.1.220/admin/addAssess',data)
          .then((res) => {
             var data1 =  'catalogid=' + this.sizeForm.catalogid
               this.axios.post('http://47.103.1.220/admin/queryAssess',data1)
                .then((res) => {
                  var sx2 = JSON.parse(res.data)
                  this.tableData = sx2.assessList
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
    shanchu(row,id){
      console.log(row.catalogid)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var data = 'id=' + row.id  //字符串拼接,把id变为字符串格式 
          this.axios.post("http://47.103.1.220/admin/deleteAssess",data).then((res)=>{
            var data1 = 'catalogid=' + row.catalogid
            this.axios.post('http://47.103.1.220/admin/queryAssess',data1)
              .then((res) => {
                console.log(res.data)
                var ww = JSON.parse(res.data)
                this.tableData = ww.assessList
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

    //分页器
         getUser: function () {
                  let para = {
                      pageNum:this.pageNum,
                  };
                  let uD =qs.stringify (para)
                  this.loading = true;
                 this.axios.post('http://47.103.1.220/admin/queryAssess',uD)
                 .then((res) => {
                      if(res.data){
                          var sx = JSON.parse(res.data)
                          this.tableData = sx.assessList;
                          // this.currentPage1 = res.data.modelPageNum;
                          this.total = sx.pages;
                          this.loading = true;
                      }else{
                          this.loading = false;
                          this.$message({
                          message:  res.data.returnMsg,
                          type: 'error'
                          });
                      }
                  })
                .catch({})  
              },

      handleSizeChange(val) {
          this.pageSize = val;
          this.getUser();
      },
    //条目改变时
    handleCurrentChange(val) {
        this.pageNum = val;
        this.getUser();
    },
  },

  created(){
      this.getUser()
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
.el-input{
  width: 100%;
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
.block{
  margin-top: 50px;
  text-align:right
}
</style>