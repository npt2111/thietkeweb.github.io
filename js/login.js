const ListAccount = [
    {
        username: "admin",
        pass: "123"
    },
    {
        username: "0387237230",
        pass: "2111"
    }
]
let islogin = !!localStorage.getItem("token") //kiểm tra trạng thái
function CheckLogin(){
    if(islogin){
        window.location.href = "../Light.html"
    }
}
function Login(){
    let username = document.getElementById("username").value
    let pass = document.getElementById("pass").value

    let checkLogin = ListAccount.some(value => value.username == username && value.pass == pass)
    
    if(checkLogin){
        localStorage.setItem("token", username)//lưu vao token
        islogin = true

        //chuyển hướng->
        CheckLogin()        
    }else{
        alert("Tài khoản, mật khẩu không chính xác!")
    }

    var kq = `<p>User: `+username.value+` </p>`;
    document.getElementById("showuser").innerHTML = kq;

}