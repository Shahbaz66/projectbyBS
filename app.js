const handleSubmit = () => {
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    database.ref('/').child('login-detail/email').push(email)
    database.ref('/').child('login-detail/password').push(password)
    console.log(email,password)
}