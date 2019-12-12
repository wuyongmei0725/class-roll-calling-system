let app = new Vue({
    el:'#app',
    data:{
        username:'',
        password:'',
        url:'',
        target:'_self'
    },
    methods:{
        login:function(){
            let ifLogin = this.username=='wym'&&this.password=='123';
            if(ifLogin){
                this.url = './main.html';
                this.target = '_blank';
            }else{
                alert("用户名或者密码错误！");
            }
        }
    }
})