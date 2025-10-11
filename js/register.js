let submit_btn = document.getElementById("submit")
let cpass = document.getElementById('cpass')
let pass = document.getElementById('pass')
let gmsg = document.getElementById("gmsg")
let username_msg = document.getElementById("user_err_msg")
let email_msg = document.getElementById("email_err_msg")
let pass_msg = document.getElementById("pass_err_msg")
let cpass_msg = document.getElementById('cpass_err_msg')

// forms
let login_btn = document.getElementById('log-btn')
let register_btn = document.getElementById('reg-btn')
let register = document.getElementById('register')
let login = document.getElementById('login')

login_btn.addEventListener("click", function(){
  register.style.display = "none"
  register_btn.style.backgroundColor = "white"
  register_btn.style.color = 'black'
  login_btn.style.backgroundColor = "black"
  login_btn.style.color = "white"
  login.style.display = "block"
  
})

submit_btn.addEventListener("click", function(event){
    event.preventDefault()
    let username = document.forms["registerForm"]["username"].value
    let email = document.forms["registerForm"]["email"].value
    let password = document.forms["registerForm"]["password"].value
    let cpassword = document.forms['registerForm']['cpassword'].value
    if(username === "" && email === "" && password === "" && cpassword === ""){
        gmsg.innerText = "All field are required!";
        gmsg.style.color = 'red'
        setTimeout(function(){
            gmsg.innerText = ""
        }, 3000)
    }
    if (username === '') {
      username_msg.innerText = 'Username is required!'
      username_msg.style.color = 'red'
      setTimeout(function () {
        username_msg.innerText = ''
      }, 3000)
    } else if (email === '') {
      email_msg.innerText = 'Email is required!'
      email_msg.style.color = 'red'
      setTimeout(function () {
        email_msg.innerText = ''
      }, 3000)
    } else if (password === '') {
      pass_msg.innerText = 'Password is required!'
      pass_msg.style.color = 'red'
      setTimeout(function () {
        pass_msg.innerText = ''
      }, 3000)
    } else if (cpassword === '') {
      cpass_msg.innerText = 'Confirm Password is required!'
      cpass_msg.style.color = 'red'
      setTimeout(function () {
        cpass_msg.innerText = ''
      }, 3000)
    }


})
cpass.addEventListener("keyup", function(event){
    event.preventDefault()
    if(pass.value != cpass.value){
        cpass_msg.innerText = "Does not match with password!"
        cpass_msg.style.color = 'red'
        setTimeout(function () {
          cpass_msg.innerText = ''
        }, 3000)
    }
    
})

