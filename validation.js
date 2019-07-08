function validate(checkPassword) {

    var userName = document.getElementById('fname');
    var userPassword = document.getElementById('pwd');
    var userAdress = document.getElementById('ad');
    var userMail = document.getElementById('mail');
    var userLastName = document.getElementById('lname');
  if(!userName.value){
    userName.style.border="3px solid red";
    alert('Enter a user name!');
  }else{
    userName.style.border="3px solid green";
  }
  if(!userLastName.value){
    userLastName.style.border="3px solid red";
    alert('Enter your last name!');
  }else{
    userLastName.style.border="3px solid green";
  }
  if(!userAdress.value){
    userAdress.style.border="3px solid red";
    alert('Enter your adress!');
  }else{
    userAdress.style.border="3px solid green";
    
  }
  if(!userMail.value){
    userMail.style.border="3px solid red";
    alert('Enter mail adress!');
  }else{
    userMail.style.border="3px solid green";
  }
  function checkPassword(){
    var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
    if (!reg.test(userPassword.value)){
      alert('password invalid!');
      userPassword.style.border="3px solid red";
   
  }
  else{
    userPassword.style.border="3px solid green";
  }
  } 
  
 checkPassword();
}
