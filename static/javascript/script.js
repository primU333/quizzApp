//Display Navigation on mobile//

const nav = () =>{
	const burger = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");

	burger.addEventListener("click", ()=>{
		links.classList.toggle("navlinks-open");
	})
}

nav();

//Add dark mode class//

const change_mode = ()=>{
	const dark_button = document.getElementById("dark-button");
	const dark_mode = document.body;

	dark_button.addEventListener("click", (e)=>{
		dark_mode.classList.toggle("dark");
		//e.preventDefualt();
	})
}

change_mode();


//Show developer info/

const show_info = ()=>{
	const icon = document.getElementById("dev-icon");
	const info = document.querySelector(".profile");

	icon.addEventListener("click", ()=>{
		info.classList.toggle("show-profile");
	})
}

show_info();


//show log in and sign up menu//

const show_menu = ()=>{
	const icon = document.getElementById("log-icon");
	const info = document.querySelector(".logIn");

	icon.addEventListener("click", ()=>{
		info.classList.toggle("logIn-show");
	})

}

show_menu();

//Home Page relaod//
