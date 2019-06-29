<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 搜索框 -->
    
        <el-input v-model="sizeForm.sousuo"  placeholder="请输入搜索内容" class="input">
            <i class="el-input__icon el-icon-search" slot="suffix"></i>
        </el-input>

    <!-- 添加用户按钮功能 -->
    <el-button size="mini" type="primary"  plain @click="dialogFormVisible = true" class="adduser">添加品牌</el-button>
    <el-dialog title="添加品牌名称" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
      <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 80%">
        <el-form-item label="类型" v-model="value1" >
              <el-select placeholder="请选择" v-model="sizeForm.catalogid">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="类型: ">
                <el-input v-model="sizeForm.brandname"></el-input>
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('sizeForm')">确定</el-button>
        </div>
    </el-dialog>


    <!--修改 -->
    <el-dialog title="修改分类名称" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
      <el-form :model="xiugai" ref="xiugai" class="hhh">
        <el-form-item label="分类"  :label-width="formLabelWidth">
          <el-input v-model="xiugai.brandName" autocomplete="off"></el-input>
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
        <el-table-column prop="catalog.catalogName" label="品牌分类" width="300"></el-table-column>
        <el-table-column prop="brandName" label="品牌名称" width="300"></el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
            <template slot-scope="scope">   
            <el-button-group>
                 <el-button  @click="{dialogFormVisible1 = true,handleClick(scope.row,scope.row.id)}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="shanchu(scope.row.id)">删除</el-button>
            </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 3, 4]" :page-size="100" layout=" sizes, prev, pager, next, jumper, total" :total="total">
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
      currentPage4: 1,
      pageSize: 4,
      pageNum:1,

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
          label: '单反'
        }],
        value1: "",

    //数据
      sizeForm: {
          catalogid:"",
          brandname: '',  //类型
          sousuo:''
        },
      formLabelWidth: "120px",
      xiugai: {
        id:"",
        brandName: '',  //类型
      },
      tableData: [
        {
          id: "",
          catalogName: "",
          brandName: "",
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏
      dialogFormVisible1: false,
    };
  },
  methods: {
    handleClick(row, id) {
        this.xiugai.id= row.id
    },

     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },


    //修改方法
    sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
          var data =  'id=' + this.xiugai.id
                      +'&brandName=' + this.xiugai.brandName
                      console.log(this.xiugai.brandName)
              this.axios.post('http://47.103.1.220/admin/updateBrandlog',data)
              .then((res)=>{
                  this.axios.get('http://47.103.1.220/admin/queryBrand')
                    .then((res) => {
                      var sx3 = JSON.parse(res.data.json)
                      this.tableData = sx3
                    })
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

    //这是添加用户的方法
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = 'brandname=' + this.sizeForm.brandname
                    +'&catalogid=' + this.sizeForm.catalogid
                  console.log(data)
                      
          this.axios.post('http://47.103.1.220/admin/addBrandlog',data)
          .then((res) => {    
              this.axios.get('http://47.103.1.220/admin/queryBrand')
                .then((res) => {
                  console.log()
                  var sx1 = JSON.parse(res.data.json)
                  this.tableData = sx1
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
          this.axios.post("http://47.103.1.220/admin/deleteBrand",data).then((res)=>{
            this.axios.get('http://47.103.1.220/admin/queryBrand')
              .then((res) => {
                var sx = JSON.parse(res.data.json)
                this.tableData = sx
                console.log(sx)
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

      //数据分页器
     getUser: function () {
                let para = {
                    pageNum:this.pageNum,
                };
                let uD =qs.stringify (para)
                console.log(uD)
                this.loading = true;
               this.axios.post('http://47.103.1.220/admin/queryBrand',uD).then((res) => {
                    if(res.data){
                      console.log(res.data.pages)
                        var sx = JSON.parse(res.data.json)
                        this.tableData = sx;
                        this.currentPage1 = res.data.pages;
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
      this.getUser();
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
.block{
  margin-top: 50px;
  text-align:right
}
</style>