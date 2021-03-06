// 组件名用-分隔单词

// 全局组件
Vue.component('navBar', {
  template: ' <div>1234567890</div> ',
})

// 局部组件


// data必须是函数
// Vue.component('my-component', {
//   template:'<span>{{message}}</span>',
//   // message:1,
//   data: function()  {
//     return message
//   }
// })

new Vue({
  el:'#header'
})

var data = { counter:0}

Vue.component(
  'simple-counter',
  {
    template:'<button v-on:click="counter +=1">{{ counter }}</button>',
    data: function(){
      return { counter:0}
    }
  }
)

/* Vue.component('child', {
  // 声明props
  props:['message'],
  template:'<span>{{message}}</span>'

}) */
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<span>{{ message }}</span>'
})

new Vue({
  el:'#example2'
})

new Vue({
  el:'#example3'
})
