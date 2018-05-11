<template>
    <div class="ledger-table">
      <div class="search-title">
        <span>查询条件</span>
      </div>
      <hr style="border: .5px solid #eeeeee;">
      <div class='field-list'>
        <el-form :model="viewParameter"  ref="viewParameter" label-width="100px" class="demo-ruleForm" :inline="true">
          <el-form-item label="器具编号:" prop="equipId" class='width'>
            <el-input v-model="viewParameter.controlCode" placeholder="请输入器具编号"></el-input>
          </el-form-item>
          <el-form-item label="器具名称:" prop="" class='width'>
            <el-input v-model="viewParameter.equipName" placeholder="请输入器具名称"></el-input>
          </el-form-item>
          <el-form-item label="规格型号:" prop="" class='width'>
            <el-input v-model="viewParameter.equipModel" placeholder="请输入规格型号"></el-input>
          </el-form-item>
          <el-form-item label="出厂编号:" prop="" class='width'>
            <el-input v-model="viewParameter.factoryNo" placeholder="请输入出厂编号"></el-input>
          </el-form-item>
          <el-form-item label="制造单位:" prop="" class='width'>
            <el-input v-model="viewParameter.manufacture" placeholder="请输入制造单位"></el-input>
          </el-form-item>
          <el-form-item label="出厂等级:" prop="" class='width'>
            <el-input v-model="viewParameter.factoryLevel" placeholder="请输入出厂等级"></el-input>
          </el-form-item>
          <el-form-item label="管理分类:" prop="name" class='width'>
            <el-input v-model="viewParameter.manageClass" placeholder="请输入管理分类"></el-input>
          </el-form-item>
          <el-form-item label="所属部门:" prop="name" class='width'>
            <el-input v-model="viewParameter.useDeptId" placeholder="请输入所属部门"></el-input>
          </el-form-item>
          <el-form-item label="证书编号:" prop="name" class='width'>
            <el-input v-model="viewParameter.certNo" placeholder="请输入证书编号"></el-input>
          </el-form-item>
          <el-form-item label="检定日期:" required >
            <el-date-picker
              v-model="viewParameter.startTestDate"
              type="date"
              placeholder="请选择开始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="检定日期:" required>
            <el-date-picker
              v-model="viewParameter.endTestDate"
              type="date"
              placeholder="请选择结束日期">
            </el-date-picker>
          </el-form-item>
          <div class="btn-search">
            <el-button type="primary" @click="submitForm()">查询</el-button>
            <el-button @click="reset()">重置</el-button>
          </div>
        </el-form>
      </div>
      <div class='query-result'>
          <span>查询结果</span>
          <el-button  type="primary" @click="addData"><i class="el-icon-plus"></i> 新增</el-button>
          <el-button  type="danger" @click="delData"><i class="el-icon-delete"></i> 删除</el-button>
      </div>
      <div class="table-main">
        <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" @selection-change="handleSelectionChange">
          <el-table-column prop="index" label="" type="selection" width="" fixed="left" class="tr-el-style"></el-table-column>
          <el-table-column prop="controlCode" label="器具编号" width="100" fixed="left" show-overflow-tooltip></el-table-column>
          <el-table-column label="器具名称" width="100" fixed="left" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.equipName}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="equipModel" label="型号/规格" width="100" show-overflow-tooltip></el-table-column>
          <el-table-column prop="manuFacture" label="制造单位" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="factoryNo" label="出厂编号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="equipStatus" label="状态" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="testVaildDate" label="有效日期" show-overflow-tooltip></el-table-column>
          <el-table-column prop="testCycle" label="周期(月)" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="testDate" label="检定日期" show-overflow-tooltip></el-table-column>
          <el-table-column prop="testResult" label="结论" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="certNo" label="证书编号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="testGroupName" label="溯源机构" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="useDeptId" label="归属科室" show-overflow-tooltip></el-table-column>
          <el-table-column prop="equipMgr" label="责任人" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="内部编号" width="" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="标识号" show-overflow-tooltip></el-table-column>
        </el-table>
      </div>
      <!--分页begin-->
      <el-pagination class="pageBar"
                     :current-page="page_list.pageNum"
                     :page-sizes="[5, 10, 15]"
                     :page-size="page_list.pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="page_list.total_rows"
                     @size-change="pageSizeChange"
                     @current-change="pageCurrentChange">
      </el-pagination>
      <!--分页end-->
    </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        multipleSelection: [],
        tableList:[],
        page_list:{
          total_rows: 0,  //总行数
          pageNum:'' || 1,
          pageSize:'' || 5,
        },
        viewParameter:{
          controlCode:'',
          equipName:'',
          equipModel:'',
          factoryNo:'',
          manuFacture:'',
          factoryLevel:'',
          startTestDate:'',
          endTestDate:'',
          manageClass:'',
          useDeptId:'',
          certNo:'',
        },
        /*rules: {
          equipId: [
            { required: true, message: '请输入正确的器具编号', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            {
              type: 'date',
              required: true,
              message: '请选择日期',
              trigger: 'change'
            }
          ],
          date2: [
            {
              type: 'date',
              required: true,
              message: '请选择时间',
              trigger: 'change'
            }
          ]
        },*/

      };
    },
    //查询列表数据
    mounted(){
      this.submitForm();
    },
    methods: {
      //分页
      pageSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.page_list.pageSize = val;
        this.submitForm();
      },
      pageCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page_list.pageNum = val;
        this.submitForm();
      },

      //选择框取值
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //查询
      submitForm(){
        this.getList()
      },
      // 重置表单
      reset() {
        this.$refs['viewParameter'].resetFields()
      },
      //当前项编辑
      handleClick (row) {
        console.log('对象', row)
        // window.open(window.location.origin + '/ledger/info-data')
        /*this.$router.push({path: '/ledger/info-data?equipId=' + row.equipId})*/
        this.$router.push({path: '/ledger/info-data', query:{dataList:row,flag:'2'}})
      },
      //删除后查询
      afterDel() {
        this.getList();
      },
      //添加
      addData(){
        this.$router.push('/ledger/info-data')
      },
      edit(){
        this.$router.push('/ledger/info-data')
      },

      //获取表格数据
      getList(){
        var grourl = '/api/equipAccount/findData'
        var dataList ={
            pageNum:this.page_list.pageNum,
            pageSize:this.page_list.pageSize,
            controlCode:this.viewParameter.controlCode,
            equipName: this.viewParameter.equipName,
            /*equipModel:this.viewParameter.equipModel,
            factoryNo:this.viewParameter.factoryNo,
            manuFacture:this.viewParameter.manuFacture,
            factoryLevel:this.viewParameter.factoryLevel,
            startTestDate:this.viewParameter.startTestDate,
            endTestDate:this.viewParameter.endTestDate,
            manageClass:this.viewParameter.manageClass,
            useDeptId:this.viewParameter.useDeptId,
            certNo:this.viewParameter.certNo*/
        }
        this.$http.post(grourl,qs.stringify(dataList),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res=>{
          this.tableList = res.data.page.rows
          this.page_list.total_rows = res.data.page.total;
        }).catch(error=>{
          this.$message.error('请求繁忙!');
        })
      },
      //删除方法（单条、批量）
      delData(){
        if (this.multipleSelection.length == 0) {
          this.$message.error("请至少选择一条数据操作!");
          return false;
        }
        let ids = [];
        this.multipleSelection.forEach(function (i) {
          ids.push(i.equipId)
          console.log(i.equipId)
        });
        ids = ids.join(',');
        /*this.$confirm('此操作将永久删除用户 ' + ids + ', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })*/
        this.$http({
          method:"post",
          url:"/api/equipAccount/delByBatch",
          data:{
            ids : ids
          }
        }).then(res=>{
          console.log(res)
          if (res.data.code === 0) {
            this.afterDel();
            this.$message.success('删除成功!');
          }
        }).catch(error=>{
          console.log(error)
          this.$message.error('删除失败!');
        })
      },

    }
  }

</script>

<style scoped>
    .search-title{
      padding: 0 0 8px 5px;
    }

    .field-list{
      margin-top: 10px;
    }

    .btn-search{
      text-align:center;
      padding-bottom: 10px;
    }

    .query-result{
      border-bottom: 1px solid #636363;
      padding: 0 0 8px 5px;
    }

    .query-result span{
      padding-right: 20px;
    }

    .btn-icon{
      color: #ffffff;
    }

</style>
