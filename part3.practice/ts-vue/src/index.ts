import Vue from 'vue'
import Hello from './components/Hello.vue'

// let app1 = new Vue({
//     el: '.app',
//     data: {
//         name: 'TypeScript'
//     },
//     template: `<h1>Hello {{ name }}</h1>`
// });


// let app2 = new Vue({
//   el: '.app',
//   components: {
//     Hello
//   },
//   template: '<hello />'
// })

import EmployeeQuery from 'vue-employee-query2'

let app2 = new Vue({
  el: '.app',
  components: {
    EmployeeQuery
  },
  template: '<EmployeeQuery @query="getParam" :department="department" />',
  data: {
    department: [
      { department: '技术部', departmentId: 1 },
      { department: '产品部', departmentId: 2 },
      { department: '市场部', departmentId: 3 },
      { department: '运营部', departmentId: 4 }
    ]
  },
  methods: {
    getParam: function(param: any) {
      console.log(param)
    }
  }
})