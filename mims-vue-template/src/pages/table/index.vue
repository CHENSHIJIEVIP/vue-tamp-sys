<template>
  <div class='tebleHeader'>
    <div class="br">查询条件</div>
    <div class='tableMain'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item label="器具编号:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="器具名称:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="规格型号:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="出厂编号:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="制造单位:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="出厂等级:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="管理分类:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所属部门:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="证书编号:" prop="name" class='width'>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="检定时间:" required>
          <el-date-picker
            v-model="ruleForm.startTiem.value1"
            type="date"
            placeholder="开始日期">
          </el-date-picker>
          <el-date-picker
            v-model="ruleForm.startTiem.value2"
            type="date"
            placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="有效日期:" required>
          <el-date-picker
            v-model="ruleForm.endTime.value1"
            type="date"
            placeholder="开始日期">
          </el-date-picker>
          <el-date-picker
            v-model="ruleForm.endTime.value2"
            type="date"
            placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <div class="center">
          <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>
    </div>
    <div class='br'> 查询结果
      <el-button type="primary">新增</el-button>
      <el-button type="danger">删除</el-button>
    </div>
    <div class="tableMain">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" @selection-change="handleSelectionChange">
        <el-table-column prop="index" label="" type="selection" width="55" fixed="left" class="tr-el-style"></el-table-column>
        <el-table-column prop="id" label="序号" width="50"></el-table-column>
        <el-table-column prop="name" label="器具名称" width="100"></el-table-column>
        <el-table-column prop="address" label="型号/规格" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="制造单位" width="100"></el-table-column>
        <el-table-column prop="address" label="出厂编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="状态" width="100"></el-table-column>
        <el-table-column prop="address" label="有效日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="周期(月)" width="100"></el-table-column>
        <el-table-column prop="address" label="检定日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="结论" width="100"></el-table-column>
        <el-table-column prop="address" label="证书编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="溯源机构" width="100"></el-table-column>
        <el-table-column prop="address" label="归属科室" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="责任人" width="100"></el-table-column>
        <el-table-column prop="address" label="备注" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="内部编号" width="100"></el-table-column>
        <el-table-column prop="address" label="标识号" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          startTiem:{
            value1: '',
            value2: '',
          },
          endTime:{
            value1: '',
            value2: '',
          }
        },
        rules: {
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
        },
        tableData3: [
          {
            id:'1',
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id:'2',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        multipleSelection: []
      };
    },
    methods: {
      getTableData(data) { // 获取表单信息
        this.$axios({
          url: '/tableData',
          type: 'post',
          data: data
        }).then(res => {
          this.tableData.loading = false
          this.tableData.head = res.data.head
          this.tableData.body = res.data.body
        }).catch(err => {
          this.$message.error(`获取数据失败，失败码：${err.response.status}`)
        })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style scoped>
  .tebleHeader{
    width: 100%;

  }

  .center{
    text-align: center
  }
  .width{
    width: 19%;
  }
  .tebleHeader {
    padding: 20px;
  }
  .tableMain {
    padding: 10px 0;
    border: 1px solid;
  }

  .tr-el-style{
    text-align: center;
  }

  .br {
    padding: 10px 0;
    border-bottom: 1px solid #cccccc;
  }
</style>



