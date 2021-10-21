//Open navigation and dasboard on mobile devices

//navigation menu

const openNav = () =>{
    const links = document.querySelector(".navlinks");
    const bars = document.querySelector(".burger");
    const closeNav = document.getElementById("main");

    bars.addEventListener("click", (e)=>{
        e.preventDefault();
        //bars.classList.toggle("burger-open");
        links.classList.toggle("navlinks-open");
    })

}

openNav();

//**********************Dashboard

const openBoard = () =>{
    const openBtn = document.querySelector(".show-board");
    const board = document.querySelector(".side-links");

    openBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        openBtn.classList.toggle("flip-board");
        board.classList.toggle("side-links-open");

    })
}
openBoard();

//Dark mode

const toggleMode = () =>{
    const link = document.getElementById("dark-button");
    const mode = document.body

    link.addEventListener("click", (e)=>{
        e.preventDefault();
        mode.classList.toggle("dark");
    })
}
toggleMode();

//************************************Validate Quizz forms */

const setQuiz = ()=>{
    const fresherQuiz = document.getElementById("fresher");
    const interQuiz = document.getElementById("intermediate");
    const masterQuiz = document.getElementById("master");
    const challengeQuiz = document.getElementById("challenge");
    const fresh = document.getElementById("fesher-answers");
    const inter = document.getElementById("intermediate-answers");
    const final = document.getElementById("master=answers");

    //fresher level
    fresherQuiz.addEventListener("submit", fresherAnswers)
    function fresherAnswers(e){
        if(fresh.value === ""){
            //show error class
            //prevent form submission
            fresh.classList.add("input-error");
            e.preventDefault();

        }else{
            if(fresh.value.trim().length > 10){
                fresh.classList.add("input-error");
                e.preventDefault();
            }
            //allow form submission
        }


    }

    //intermediate level
    interQuiz.addEventListener("submit", intermediateAnswers)
    function intermediateAnswers(e){
        if(inter.value === ""){
            //prevent form submission
            inter.classList.add("input-error");
            e.preventDefault();

        }else{

            if(inter.value.trim().length > 10){
                inter.classList.add("input-error");
            }
            //allow form submission
        }
    }

    //master level
    masterQuiz.addEventListener("submit", masterAnswers)
    function masterAnswers(){
        if(final.value === ""){
            //show error
            //prevent form submission
            final.classList.add("input-error");

        }else{
            if(final.value.trim().length > 10){
                final.classList.add("input-error");
            }
            ///allow form submision
        }
    }
   
    //create new quiz
    const ask  = document.getElementById("quiz");
    const quizLevel = document.getElementById("level");
    const quizAnswer = document.getElementById("ans");

    challengeQuiz.addEventListener("submit", checkQuizz)

    function checkQuizz(e){
//Get quizz containers
        const freshQestion = document.getElementById("freshContainer");
        const intQestion = document.getElementById("intContainer");
        const masQestion = document.getElementById("masContainer");

        //Create new elements
        const newQestion = document.createElement("label");
        const newAnswer = document.createElement("input");

        newQestion.innerHTML = ask.value
        newQestion.appendChild(newAnswer);
        newQestion.classList.add("newQuizz");
        newAnswer.classList.add("newInput");

//Check question validity

        if(ask.value ===""){
            //return error
            //prevent form submission
            ask.classList.add("input-error");
            e.preventDefault();

        }else{
            //check quiz
            if(ask.value.trim().length < 10){
                //prevent form submission
                ask.classList.add("input-error");
                e.preventDefault();
            }else{
                //do nothing
            }
        }
        
//Quizz level validation

        if(quizLevel.value ===""){
            //return error
            //prevent form submission
            quizLevel.classList.add("input-error");
            e.preventDefault();

        }else{
            //check level validity
            if(quizLevel.value.trim().toLowerCase() === "fresher"){
                //append quizz to fresher class.
                freshQestion.appendChild(newQestion);
                e.preventDefault()
                

            }else if(quizLevel.value.trim().toLowerCase() === "intermediate"){
                //append quiz to intermediate level
                intQestion.appendChild(newQestion);
                e.preventDefault()

            }else if(quizLevel.value.trim().toLowerCase() === "master"){
                //  append quizz to master class
                masQestion.appendChild(newQestion);
                e.preventDefault()

            }else{
                //return error
                //prevent form submission
                quizLevel.classList.add("input-error");
                e.preventDefault();
            }

        }

//Quizz answer validation

        if(quizAnswer.value ===""){
            //return error
            //prevent form submission
            quizAnswer.classList.add("input-error");
            e.preventDefault();

        }else{
            //ckeck answer validity
            if(quizAnswer.trim().length > 10){
                //prevent form submission
                quizAnswer.classList.add("input-error");
                e.preventDefault();

            }else{
                //submit answer to answers' db
            }
        }
    }
    
}

setQuiz();


