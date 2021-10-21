//navigation menu
const nav = () =>{
	const bars = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");


	bars.addEventListener("click", ()=>{
		links.classList.toggle("navlinks-open")
	}) 
}

nav();

//Dark Mode

const mode = () =>{
	const dark = document.querySelector(".light");
	const change = document.getElementById("mode");

	change.addEventListener("click", (e)=>{
		e.preventDefault()
		dark.classList.toggle("dark")
	})
}
mode();

//form validatoion

/*
 const validator = () =>{

	const signUp  = document.getElementById("myform");
	const fName = document.getElementById("firstName");
	const oName = document.getElementById("OtherName");
	const mail = document.getElementById("email");
	const phone = document.getElementById("number");
	const age = document.getElementById("DOB");
	const pw = document.getElementById("password");
	const pw2 = document.getElementById("password2");


	signUp.addEventListener("click", checkInputs)
	function  checkInputs(e){
		e.preventDefault()
//password validation
		if(pw.value === ""){
			pw.classList.add("invalid-input");

		}else if(pw2.value === ""){
			pw2.classList.add("invalid-input");

		}else if(pw.value != pw2.value){
			pw.classList.add("invalid-input");
			pw2.classList.add("invalid-input");

		}else{
			pw.classList.add("valid-input");
			pw2.classList.add("valid-input");
		}

//User name validation

	
	
		if(fName.value ===""){
			fName.classList.add("invalid-input");

		}else{
			fName.classList.add("valid-input");
		}

		//Other name
		if(oName.value === ""){
			oName.classList.add("invalid-input");
		
		}else{
			oName.classList.add("valid-input");
		}

//phone validation
		if(phone.value === ""){
			phone.classList.add("ivalid-input");
			
			/*}else{
				if(phone.value === ""){
					phone.classList.add("invalid-input");
				}
				phone.classList.add("invalid-input");
			}


 }

 }

}

 validator();
 */