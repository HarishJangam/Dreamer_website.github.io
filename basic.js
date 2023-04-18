function registration(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
  console.log("basic.js")

    // username=document.getElementById("username").value
    email=document.getElementById("exampleInputEmail1").value
    password=document.getElementById("exampleInputPassword1").value
    // confirm_passord=document.getElementById("confirm_password").value
    
    var raw = JSON.stringify({

      // "name": username,
      "email": email,
      "password": password
      // "confirm_password":confirm_passord
    });

    console.log(raw)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log("fetch")
    fetch(" http://127.0.0.1:5000/api/customer", requestOptions)
    .then(response => {
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      return response.json();
    })
    .then(data => {
      console.log(data.error);
      var a=data.error
      // console.log(a)
      if (a =="" ){
        document.getElementById("message").innerText="registration success"
      }
      else{
        document.getElementById("message").innerText=a

      }

    })
    .catch(error => {
      console.error('Error registering user:', error);
    });
}
   
