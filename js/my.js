var app = new Vue({
			el:'#app',
			data:{
				msg: 'Hello Vue!'
			}
		});
		var app2 = new Vue({
			el:'#app-2',
			data:{
				msg: '页面加载于' + new Date().toLocaleString()
			}
		});
		var app3 = new Vue({
			el:'#app-3',
			data:{
				screen:false
			}
		});
		var app4 = new Vue({
			el:'#app-4',
			data:{
				todos:[
					{ text: '学习JS '},
					{ text: '学习Vue '},
					{ text: '整个牛项目 '}
				]
			}
		});
		var app5 = new Vue({
			el:'#app-5',
			data:{
				msg:'Hello Vue.js!'
			},
			methods:{
				reverseMsg:function(){
					this.msg = this.msg.split('').reverse().join('')
				}
			}
		});
		var app6 = new Vue({
			el:'#app-6',
			data:{
				msg:'zxlp1023'
			}
		});

		Vue.component(
			'todo-item',{
				props:['todo'],
				template: '<li>这个是待办项</li>'
			}
			)


