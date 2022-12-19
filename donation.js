var inputtext=document.getElementById('inputId').value;
var textbox=document.getElementById('textareaId').value;
var selectid=document.getElementById('SelectId').value;
var emailid=document.getElementById('emailId').value;
var phone=document.getElementById('phoneId').value;

var numreg=/^(\+\d{1,3}[- ]?)?\d{10}$/;       
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 

function RegEx(){          
  if(!numreg.test(phone) || phone == ''){
      alert('please enter valid number')
      return true
  }
  if(inputtext==''){
      alert('please enter input text')
      return true
  }
  if(textbox==''){
      document.getElementById('textareaId').style.borderColor='red'
      alert('please enter input text')
      return true
  }
  if(selectid==''){
      alert('please select option')
      return true
  }
 if(!regEmail.test(emailid) || emailid == ''){
     alert('please enter valid email id')
 }
 else{
     alert('ok valid')
     return false
 }
}
