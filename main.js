const inp = document.querySelectorAll(" #inpSection label input");
const form = document.querySelector("#form")
const small = document.querySelectorAll("#inpSection label small");
const p = document.querySelectorAll("  #purpleCardContent h3 p")
const name = document.querySelector("#purpleCardContentNameDate span")
const month = document.querySelector("#monthInCard")
const year = document.querySelector("#yearInCard")
const cvc = document.querySelector("#greyCard h2")
const complete = document.querySelector("#completedCard")
const btnsub = document.querySelector("#btnsub")
const completeBtn = document.querySelector("#completeButton")

    inp[0].addEventListener("keyup", displayName)
    inp[1].addEventListener("keyup", displayContent)
    inp[2].addEventListener("keyup", displayMonth)
    inp[3].addEventListener("keyup", displayYear)
    inp[4].addEventListener("keyup", displayCvc)
    
for(inps of inp){
    inps.addEventListener("invalid", inpFunc)
    inps.addEventListener("blur", inpFunc)
}

 function inpFunc(e){
 	const inpIn = e.target
 	e.preventDefault()
     function verifyErros(){
      	let error = false
      	
      	for(errors in inpIn.validity){
      		if(inpIn.validity[errors]){
      		
      		error = errors
      		}
      	}
      	
      	return error
      }
  //seta os stilos dos inputs
const sm = inpIn.parentNode.querySelector("small")

console.log(sm)
const error = verifyErros()

  	if(error == "valueMissing"){
    	inpIn.classList.add("inpErr")
    	sm.innerText = "can't be blank"
    }else{
    	inpIn.classList.remove("inpErr")
    	sm.innerText = ""
    }
    
 
    
 }

function displayContent(e){
	let inpIn = e.target;
	let four = inpIn.value.substr(0, 4)
	let eight = inpIn.value.substr(4, 4)
	let twelve = inpIn.value.substr(8, 4)
	let sixtenn = inpIn.value.substr(12, 4)
	
	
//	console.log(e.target)
	//console.log(inpIn.value.length)
	
	
	p[0].innerText = four;
	p[1].innerText = eight;
	p[2].innerText = twelve;
	p[3].innerText = sixtenn;
//	console.log(nums)
console.log(inpIn.value)
if(inpIn.value === ""){
  p.forEach((p)=>{
    p.innerText = "0000"
	
  })
	
}

}


function displayName(e){
	let inpNa = e.target;
	
	name.innerText = inpNa.value;
}

function displayMonth(e){
	let inpMo = e.target;
	
	month.innerText = inpMo.value;
}
function displayYear(e){
	let inpYe = e.target;
	
	year.innerText = inpYe.value;
}
function displayCvc(e){
	let inpCvc = e.target;
	
	cvc.innerText = inpCvc.value
}



 form.addEventListener("submit", (e)=>{
	e.preventDefault()
	
 	complete.style.display = "inline"

 	
 	
 
 	console.log("form")
 
 });

completeButton.addEventListener("click", (e)=>{
	form.reset()
	complete.style.display = "none"
})


	

document.addEventListener('DOMContentLoaded', ()=>{



})


