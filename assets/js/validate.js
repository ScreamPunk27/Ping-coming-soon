const inputEmail=document.getElementById('input-email');
const validEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const msg=document.getElementById('msg');

const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

document.getElementById('btn').addEventListener("click",()=>{
    if(!re.exec(inputEmail.value)){
		msg.style.visibility="visible";
		inputEmail.style.border="2px solid red";
	}else{
        msg.style.visibility="hidden";
		inputEmail.style.border="2px solid var(--blue)";
		inputEmail.value="";
	}
});

