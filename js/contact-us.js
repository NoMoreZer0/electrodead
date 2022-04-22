const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errors=document.querySelectorAll(".error");

function validateForm(){
clearMessages();

let errorSign=false;

if(nameInput.value.length < 1){
	errors[0].innerText="Please enter your name";
	nameInput.classList.add("error-border");
	errorSign=true;
}

if(!emailIsValid(email.value)){
	errors[1].innerText="Invalid Email Address";
	email.classList.add("error-border");
	errorSign=true;
}

if(message.value.length<1){
	errors[2].innerText="Please enter Message";
	message.classList.add("error-border");
	errorSign=true;
}

if(!errorSign){
success.innerText="Success!";

}
}

function clearMessages(){
	for(let i=0;i<errors.length;i++){
		errors[i].innerText="";
	}
	nameInput.classList.remove("error-border");
	email.classList.remove("error-border");
	message.classList.remove("error-border");
	success.innerText="";
}

function emailIsValid(email){
let pattern=/\S+@\S+\.\S+/;
return pattern.test(email);
}