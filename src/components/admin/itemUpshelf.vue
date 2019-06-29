<template>
  <div class="userManage">
    <LeftSidebar></LeftSidebar>
    <!-- 添加用户按钮功能 -->
    <el-button size="mini" type="primary"  plain @click="dialogFormVisible = true" class="adduser">添加商品</el-button>
    <el-dialog title="商品管理" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="true" >
      <el-form ref="sizeForm" :model="sizeForm" label-width="150px" size="small" style="width: 60%">
           <el-form-item label="类型" v-model="value1" >
              <el-select placeholder="请选择" v-model="sizeForm.catalogid"  @change="search112">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="品牌"  v-model="value2">
               <el-select v-model="sizeForm.brandid" filterable allow-create default-first-option placeholder="请选择">
                <el-option v-for="item in options88" :key="item.id" :label="item.brandName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item> 
            <el-form-item label="型号">
                <el-input v-model="sizeForm.model" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="最高价">
                <el-input v-model="sizeForm.maxPrice" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="最低价">
                <el-input v-model="sizeForm.minPrice" placeholder=""></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('sizeForm')">提交</el-button>
        </div>
    </el-dialog>


    <!-- 搜索框 -->
         <el-form ref="sizeForm" :model="search" size="small" style="width: 25%" class="search">
           <el-form-item v-model="value1" >
                <el-select placeholder="请搜索类型" v-model="search.sousuo1" @change="search111">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-model="value5">
               <el-select v-model="search.sousuo2" filterable allow-create default-first-option placeholder="请选择品牌" @change="sousuo2">
                <el-option v-for="item in options99" :key="item.id" :label="item.brandName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item> 
            <el-input v-model="search.sousuo"  placeholder="请输入搜索内容" class="input1">
                  <i class="el-input__icon el-icon-search" slot="suffix" @click="sousuo()"></i>
            </el-input>
        </el-form>    
     


    <!-- 修改的表单 -->
        <el-dialog title="修改用户" :visible.sync="dialogFormVisible1" :close-on-click-modal="false" :close-on-press-escape="true">
          <el-form :model="xiugai" ref="xiugai" class="hhh" label-width="120px">
            <el-form-item label="型号" :label-width="formLabelWidth">
              <el-input v-model="xiugai.model" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="最高价" :label-width="formLabelWidth">
              <el-input v-model="xiugai.maxPrice" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="最低价" :label-width="formLabelWidth">
              <el-input v-model="xiugai.minPrice" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible1=false">取消</el-button>
            <el-button type="primary" @click="sub('xiugai')" >确定修改</el-button>
          </div>
        </el-dialog>




    <!--信息渲染的表格  -->

    <h1>商品管理</h1><span @click="chongzhi" class="chongzhi">重置</span>
    <el-table ref="multipleTable" style="width:100%" :data="tableData">
        <el-table-column prop="id" label="编号" width="100"></el-table-column>
        <el-table-column prop="catalog.catalogName" label="类型" width="150"></el-table-column>
        <el-table-column prop="brand.brandName" label="品牌" width="150"></el-table-column>
        <el-table-column prop="model" label="型号" width="220"></el-table-column>
        <el-table-column prop="maxPrice" label="最高价" width="200"></el-table-column>
        <el-table-column prop="minPrice" label="最低价" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
            <template slot-scope="scope">   
            <el-button-group>
                <el-button @click="detailpage(scope.row,scope.row.id)" type="primary" size="mini" icon="el-icon-tickets">详情页</el-button>
                <el-button @click="{handleClick(scope.row,scope.row.id),dialogFormVisible1 = true}" type="primary" size="mini" icon="el-icon-tickets">修改</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="shanchu(scope.row,scope.row.id)">删除</el-button>
            </el-button-group>
            </template>
        </el-table-column>
    </el-table>
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

     options99: [],
     options88: [],
        value5: "",


      //修改商品数据
      xiugai: {
          id: "",
          model:"",
          maxPrice:"",
          minPrice:"",
          catalogid:""
      },
    //数据
      sizeForm: {        
          catalogid:[],
          brandid:[],
          model: '',   //型号
          maxPrice: '',  //最高价
          minPrice: '',   //最低价
          delivery: false,
        },
        search:{
          sousuo:'',   //搜索
          sousuo1:""  ,
          sousuo2:"",
        },
      formLabelWidth: "120px",
      tableData: [
        {
          id: "",
          catalogName:"",
          brandName: "",
          model: "",
          maxPrice:"",
          minPrice:"",
          sellNum:""
        }
      ],
      dialogFormVisible: false, //对话框 true显示 false隐藏   
      dialogFormVisible1: false,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    detailpage(row,id){
      if(row.catalogid == 1){
          this.$router.push({
            path: `/detailpage/${id}`,
            })
      }else if(row.catalogid == 2){
          this.$router.push({
            path: `/ipad/${id}`,
          })
      }else if(row.catalogid == 3){
          this.$router.push({
            path: `/computer/${id}`,
            })
      }else if(row.catalogid == 4){
          this.$router.push({
            path: `/..../${id}`,
            })
      }
     
        
    },

    handleClick(row, id){
      this.xiugai.id= row.id
      this.xiugai.catalogid = row.catalogid
    }, //修改的方法

    onSubmit() {
      console.log('submit!');
    },

    //重置
    chongzhi(){
        this.axios.get('http://47.103.1.220/admin/index')
            .then((res) => {
              var sx = JSON.parse(res.data.modelJson)
              this.tableData = sx
            })
            .catch((error)=>{
              console.log(error);
            });
    },
    //搜索
    search111(){
        var data = 'catalogId=' + this.search.sousuo1
        this.axios.post('http://47.103.1.220/admin/index',data)
        .then((res)=>{
          var sx = JSON.parse(res.data.brandJson)
              this.options99 = sx
            var sw = JSON.parse(res.data.modelJson)
            this.tableData = sw
        })
        .catch((error)=>{
            console.log(error);
          });
    },
    search112(){
        var data = 'catalogId=' + this.sizeForm.catalogid
        this.axios.post('http://47.103.1.220/admin/index',data)
        .then((res)=>{
              var sx = JSON.parse(res.data.brandJson)
              this.options88 = sx
            var sw = JSON.parse(res.data.modelJson)
            this.tableData = sw
        })
        .catch((error)=>{
            console.log(error);
          });
    },
    sousuo2(){
      var data1 =  'brandId=' + this.search.sousuo2     
          this.axios.post('http://47.103.1.220/admin/index',data1)
          .then((res)=>{
            console.log(res.data.modelJson)
            var sw = JSON.parse(res.data.modelJson)
                this.tableData = sw
        })
        .catch((error)=>{
          console.log(error);
        });
    },
    sousuo(){
      var data1 =  'text=' + this.search.sousuo    
          this.axios.post('http://47.103.1.220/admin/index',data1)
          .then((res)=>{
            var sw = JSON.parse(res.data.modelJson)
                  this.tableData = sw
      })
      .catch((error)=>{
        console.log(error);
      });
    },

    //这是添加商品的方法
    submitForm(sizeForm){
      this.$refs[sizeForm].validate(valid => {
        if (valid) {
          var data = 'catalogid=' + this.sizeForm.catalogid
                      +'&brandid=' + this.sizeForm.brandid
                      +'&model=' + this.sizeForm.model
                      +'&maxPrice=' + this.sizeForm.maxPrice
                      +'&minPrice=' + this.sizeForm.minPrice;   
            console.log(data)
          this.axios.post('http://47.103.1.220/admin/insertModel',data)
          .then((res) => {
                var data = 'catalogId=' + this.sizeForm.catalogid
                  this.axios.post('http://47.103.1.220/admin/index',data)
                    .then((res) => {
                      var ok = JSON.parse(res.data.modelJson)
                        this.tableData = ok
                    })
                    .catch((error)=>{
                      console.log(error);
                    });
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
 
    //修改数据的方法
    sub(xiu){
      this.$refs[xiu].validate((valid) => {
        if (valid) {
          var data = 'id=' + this.xiugai.id
                      +'&model=' + this.xiugai.model
                      +'&maxPrice=' + this.xiugai.maxPrice
                      +'&minPrice=' + this.xiugai.minPrice;
              this.axios.post('http://47.103.1.220/admin/updateModel',data)
              .then((res)=>{
                   
                  let para = {
                        pageNum:this.pageNum,
                    };
                    let uD =qs.stringify (para)
                    this.loading = true;
                  this.axios.post('http://47.103.1.220/admin/index',uD).then((res) => {
                        if(res.data){
                            var sx = JSON.parse(res.data.modelJson)
                            this.tableData = sx;
                            // this.currentPage1 = res.data.modelPageNum;
                            this.total = res.data.modelPage;
                            this.loading = true;
                        }else{
                            this.loading = false;
                            this.$message({
                            message:  res.data.returnMsg,
                            type: 'error'
                            });
                        }
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

    //数据的删除按钮的方法
    shanchu(row,id) {
      // this.axios.delete("").then( res=> {    })  删除后端的数据
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        
        var data = 'modelid=' + id
          this.axios.post("http://47.103.1.220/admin/deleteModel",data).then((res)=>{
            let para = {
                    pageNum:this.pageNum,
                };
                let uD =qs.stringify (para)
                this.loading = true;
              this.axios.post('http://47.103.1.220/admin/index',uD).then((res) => {
                    if(res.data){
                        var sx = JSON.parse(res.data.modelJson)
                        this.tableData = sx;
                        // this.currentPage1 = res.data.modelPageNum;
                        this.total = res.data.modelPage;
                        this.loading = true;
                    }else{
                        this.loading = false;
                        this.$message({
                        message:  res.data.returnMsg,
                        type: 'error'
                        });
                    }
                })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          }).catch({})
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },

    //数据分页器
      getUser: function () {
                let para = {
                    pageNum:this.pageNum,
                };
                let uD =qs.stringify (para)
                this.loading = true;
               this.axios.post('http://47.103.1.220/admin/index',uD).then((res) => {
                    if(res.data){
                        var sx = JSON.parse(res.data.modelJson)
                        this.tableData = sx;
                        // this.currentPage1 = res.data.modelPageNum;
                        this.total = res.data.modelPage;
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
        console.log(this.pageNum)
    },

},  //这是mothd结尾


  created() {
        this.getUser();
    },
    
    

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
  margin: 30px 0 30px 0;
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
}
.el-input__icon{
  width: 35px;
}
.el-input{
    height: 40px;
}
.elfrom .el-input__inner{
    height: 40px !important;
}
.demo-form-inline{
    margin-left: 12%
}
.demo-form-inline .el-input{
    width: 170px;
}
.money1 .el-input{
    width: 100px;
}
.span1{
    margin-left:30px;
    display: inline-block;
}
.block{
  margin-top: 50px;
  text-align:right
}
.search{
  float:right;
  margin-right:50%;
  margin-top:30px;
}
.input1{
  float:right;
  margin-right:-75%;
  margin-top:-100px;
}
.chongzhi:hover{
  color:red;
}
</style>