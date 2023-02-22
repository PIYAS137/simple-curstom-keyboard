const keys = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
keys.forEach((key)=>{
	key.addEventListener("click",(event)=>{
		if(key.innerHTML=="SPACE"){
			display.innerText+='\u00A0';
		}else{
			display.innerText += key.innerText;
		}
	})
})
//----------backspace function-----------//
document.querySelector(".backSpace").addEventListener("click",()=>{
	var temp = display.innerText;
	display.innerText = temp.substring(0,(temp.length -1));
})
//----------backspace function-----------//

//----------Enter function-----------//
document.querySelector(".enter").addEventListener("click",()=>{
	display.innerHTML+=`<br>`
})
//----------Enter function-----------//

// ------------tab button------------//
document.querySelector(".tabBtn").addEventListener("click",()=>{
	display.innerText+='\u00A0'+'\u00A0'+'\u00A0'+'\u00A0';
})
// ------------tab button------------//

// --------------shift function---------------//
document.querySelector(".sft").addEventListener("click",()=>{
	alert("THE FUNCTION HAS NOT BEEN INSTALLED YET")
})
// --------------shift function---------------//

// -------------capslock-----------//
let c = 0;
document.querySelector(".capslock").addEventListener("click",()=>{
	c++;
	if(c%2!=0){
		document.querySelector(".lildot").style.opacity="1"
		document.querySelector(".key-wrapper").style.textTransform="uppercase"
	}else{
		document.querySelector(".lildot").style.opacity="0"
		document.querySelector(".key-wrapper").style.textTransform="lowercase"
	}
})
// -------------capslock-----------//







