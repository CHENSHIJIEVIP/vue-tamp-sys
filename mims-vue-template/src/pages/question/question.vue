<template>
    <div>
      <h2>首页</h2>
    </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  props: ['msg'],
  data: function () {
    return {
      yesno: {
        question: '',
        answer: '提个对错问题？',
        answerColor: null,
        img: ''
      }
    }
  },
  watch: {
    'yesno.question': function (newQuestion) {
      this.yesno.answer = '正在等你停止输入'
      this.yesno.img = ''
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        let vm = this.yesno
        if (vm.question.indexOf('?') === -1) {
          vm.answer = '需要一个英文问号结尾. ;-)'
          return
        }
        vm.answer = '正在想...'
        axios.get('https://yesno.wtf/api/')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
          vm.img = _.capitalize(response.data.image)
          vm.answerColor = 'green'
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
          vm.answerColor = 'red'
        })
      },
    // 这是我们为用户停止输入等待的毫秒数
    500
    )
  }
}
</script>

<style scoped>


</style>
