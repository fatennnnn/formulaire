let text = document.getElementById("textname");
let adress=document.getElementById("textadress");
let password=document.getElementById("textpassword");
let email=document.getElementById("textmail");

let comment=document.getElementById("textcomment");

let btn = document.querySelector(".inputesubmit");
const passreg = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}/;
const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validation(event){
   event.preventDefault()
   // event.preventdefault() ;

   if (text.value==="" )
   alert("enter your name");
  
   else if (adress.value==="" )
   alert("enter you address");

   else if (password.value==="" )

   alert("entrer your password");
   else if(!passreg.test(password.value))
   alert("password invalid")
   else if (email.value==="" )

   alert("entrer your email");
   else if(!emailreg.test(email.value))
   alert("email invalid")

   else if (comment.value==="")
   alert("enter you comment");

   else 
alerte ("succés")   
 
}



btn.addEventListener('click',()=>{
   validation(event)
});

 