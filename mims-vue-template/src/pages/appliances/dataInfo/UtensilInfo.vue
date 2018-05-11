<template>
  <div class="ledger-table">
    <div class="search-title">
      <span>基本信息</span>
    </div>
    <hr>
    <div class='paramList'>
      <el-form :model="paramList" :rules="rules" ref="paramList" label-width="100px" class="demo-ruleForm" :inline="true">
        <input type="hidden" v-model="paramList.equipId">
        <el-form-item label="器具名称:" prop="equipName" class='width'>
          <el-input v-model="paramList.equipName" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="型号/规格:" prop="equipModel" class='width'>
          <el-input v-model="paramList.equipModel" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="制造单位:" prop="manufacture" class='width'>
          <el-input v-model="paramList.manuFacture" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="出厂编号:" prop="factoryNo" class='width'>
          <el-input v-model="paramList.factoryNo" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="状态:" prop="equipStatus" class='width'>
          <el-input v-model="paramList.equipStatus" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="有效日期:" prop="testVaildDate" required >
          <el-date-picker
            v-model="paramList.testVaildDate"
            type="date"
            placeholder="请选择开始日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="周期(月):" prop="testCycle" class='width'>
          <el-input v-model="paramList.testCycle" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="检定日期:" prop="testDate" required >
          <el-date-picker
            v-model="paramList.testDate"
            type="date"
            placeholder="请选择开始日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结论:" prop="testResult" class='width'>
          <el-input v-model="paramList.testResult" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="证书编号:" prop="certNo" class='width'>
          <el-input v-model="paramList.certNo" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="溯源机构:" prop="testGroupName" class='width'>
          <el-input v-model="paramList.testGroupName" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="归属科室:" prop="useDeptId" class='width'>
          <el-input v-model="paramList.useDeptId" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="负责人:" prop="equipMgr" class='width'>
          <el-input v-model="paramList.equipMgr" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="备注:" prop="remark" class='width'>
          <el-input v-model="paramList.remark" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="search-title">
      <span>保管信息</span>
    </div>
    <hr style="border: .5px solid #eeeeee;">
    <div class='paramList'>
      <el-form :model="paramList" :rules="rules" ref="paramList" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item label="所属部门:" prop="equipName" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="负责人:" prop="equipModel" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="计量分类:" prop="manufacture" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="保管部门:" prop="factoryNo" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="仓库放置地点:" prop="equipStatus" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="货架:" prop="testResult" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="接受日期:" prop="certNo" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="购置日期:" prop="testGroupName" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="接受状态:" prop="useDeptId" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="购置价:" prop="equipMgr" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="search-title">
      <span>检定/校准信息</span>
    </div>
    <hr style="border: .5px solid #eeeeee;">
    <div class='paramList'>
      <el-form :model="paramList" :rules="rules" ref="paramList" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item label="检定机构:" prop="equipName" class='width'>
          <el-input v-model="paramList.name" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="证书编号	:" prop="equipModel" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="检定结果:" prop="manufacture" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="检定员:" prop="factoryNo" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="检定费用:" prop="equipStatus" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="检定周期:" prop="testResult" class='width'>
          <el-input v-model="paramList.a" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="检定日期:" prop="testVaildDate"  >
          <el-date-picker
            v-model="paramList.testVaildDate"
            type="date"
            placeholder="请选择开始日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="有效日期:" prop="testDate"  >
          <el-date-picker
            v-model="paramList.testDate"
            type="date"
            placeholder="请选择开始日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <hr style="border: .5px solid #eeeeee;">
    <div class="btn-submit">
      <el-button type="primary" @click="submitForm('paramList')" v-show="disshowAdd">添加</el-button>
      <el-button type="primary" @click="submitForm('paramList')" v-show="disshwoEdit">修改</el-button>
      <el-button @click="backOff">返回</el-button>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
        return{
          disshowAdd:false,
          disshwoEdit:false,
          paramList:{
            name: '',
            equipId:'',
            equipName:'',
            equipModel:'',
            manuFacture:'',
            factoryNo:'',
            equipStatus:'',
            testVaildDate:'',
            testCycle:'',
            testDate:'',
            testResult:'',
            certNo:'',
            testGroupName:'',
            useDeptId:'',
            equipMgr:'',
            remark:''
          },
        rules: {
          /* equipName: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          equipModel: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          manufacture: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          factoryNo: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          equipStatus: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          testVaildDate: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          testCycle: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          /!*testDate: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 100, message: '长度在 3 到 50 个字符', trigger: 'change' }
          ],*!/
          testResult: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          certNo: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          testGroupName: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          useDeptId: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          equipMgr: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          remark: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],*/
        },
        }
      },
      mounted() {
          /*this.paramList.name = this.$route.query.equipId*/
          if(this.$route.query.dataList != undefined){
            this.paramList.name = this.$route.query.dataList.equipId
            this.paramList.equipId = this.$route.query.dataList.equipId
            this.paramList.equipName = this.$route.query.dataList.equipName
            this.paramList.equipModel = this.$route.query.dataList.equipModel
            this.paramList.manuFacture = this.$route.query.dataList.manuFacture
            this.paramList.factoryNo = this.$route.query.dataList.factoryNo
            this.paramList.equipStatus = this.$route.query.dataList.equipStatus
            this.paramList.testVaildDate = this.$route.query.dataList.testVaildDate
            this.paramList.testCycle = this.$route.query.dataList.testCycle
            this.paramList.testDate = this.$route.query.dataList.testDate
            this.paramList.testResult = this.$route.query.dataList.testResult
            this.paramList.certNo = this.$route.query.dataList.certNo
            this.paramList.testGroupName = this.$route.query.dataList.testGroupName
            this.paramList.useDeptId = this.$route.query.dataList.useDeptId
            this.paramList.equipMgr = this.$route.query.dataList.equipMgr
            this.paramList.remark = this.$route.query.dataList.remark
            console.log('传递过来的对象', this.$route.query.dataList)
            this.disshwoEdit = true;
          }else{
            this.disshowAdd = true
          }
      },
      methods:{
        /*返回*/
        backOff(){
          this.$router.back(-1);
        },
        /*添加、修改*/
        submitForm(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              var data = {
                equipName:this.paramList.equipName,
                equipModel:this.paramList.equipModel,
                manuFacture:this.paramList.manuFacture,
                factoryNo:this.paramList.factoryNo,
                /*equipStatus:this.paramList.equipStatus,
                testVaildDate:this.paramList.testVaildDate,
                testCycle:this.paramList.testCycle,*/
                /*testDate:this.paramList.testDate,
                testResult:this.paramList.testResult,
                certNo:this.paramList.testResult,
                testGroupName:this.paramList.testGroupName,
                useDeptId:this.paramList.useDeptId,
                equipMgr:this.paramList.equipMgr,
                remark:this.paramList.remark*/
              }
              if(this.paramList.equipId){
                data.equipId = this.paramList.equipId
              }
              this.$http({
                url:'/api/equipAccount/saveOrUpdate',
                method:"post",
                data:data
              }).then(res=>{
                if (res.data.flag === 1) {
                  var objData = JSON.parse(res.config.data)
                  if(!objData.equipId){
                    this.$message.success('添加成功!');
                  }else{
                    this.$message.success('修改成功!');
                  }
                  this.$router.push('/ledger');
                }
              }).catch(error=>{
                console.info(error)
              })

            } else {
              console.log('error submit!!');
              return false;
            }
          })
        },
      }
  }

</script>

<style scoped>
    .btn-submit{
        text-align: center;
    }
</style>
