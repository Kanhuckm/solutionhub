
const f_name = document.getElementById("userName");
const email = document.getElementById("userEmail");
const subject = document.getElementById("userSubject");
const message = document.getElementById("userMessage");

const submitBtn = document.getElementById("submitButton");


const database = firebase.database();

submitBtn.addEventListener('click',(e)=>{
   e.preventDefault();
   database.ref('/users/'+ userName.value).set({

   	Name: f_name.value,
   	Email: email.value,
   	subject: subject.value,
   	Message: message.value
   });
});
