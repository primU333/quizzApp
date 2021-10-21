//*********Display navigation Menub on mobile************//
const showNav = () =>{
	const bars = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");

	bars.addEventListener("click", () =>{
		//alert("burger triggred");
		links.classList.toggle("navlinks-open");
	})
}

showNav();
//******toggle Dark Mode and Light mode*****************//
const mode = () =>{
	const chageMode = document.querySelector(".light");
	const btn = document.getElementById("change");


	btn.addEventListener("click", () => {
		//alert("hello")
		chageMode.classList.toggle("dark");

	})
}

mode();


/***********Log in Form validation*********************
*************************************************/
const validate = () =>{
	const logIn = document.getElementById("loginForm");
	const id = document.getElementById("userID");
	const pw = document.getElementById("password");
	
	

	logIn.addEventListener("submit", checkInputs)
		
	function checkInputs(){
		id.style.backgroundColor = "red";
		if(id.value === ""){
			console.log("id can not be empty");
			id.classList.add("input-invalid");

		}else{
			//console.log("success");
			id.classList.add("input-valid");
		}

		if(pw.value === ""){
			pw.classList.add("input-invalid")
		}else{
			pw.classList.add("input-valid");
		}
	}


	}

validate();

