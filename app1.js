const display =document.querySelector(".display")
const buttons =document.querySelectorAll("button")
const specialChars=["+", "-", "/", "*", "%" ,"=" ]
let output=""

// DEINE FUNCTION TO CALCULATE BASE ON BUTTON CLICKED.
const calculate=(btnValue)=>{
    if(btnValue ==="=" &&  output != ""){
        // IF OUTPUT HAS % REPLACE WITH /100 BEFORE EVALUATING.
        output =eval(output.replace("%" ,"100"));
    }
    else if(btnValue ==="AC"){
        output =""
    }
    else if( btnValue === "DEL"){
        // IF DEL BUTTON IS CLICKED ,REMOVED THE LAST CHARACTER FROM YHE OUTPUT
        output=output.toString().slice(0, -1)
    }
    else{
        //  IF OUTPUT IS EMPTY AND BUTTON IS   specialChars THEN RETURN
        if(output == "" &&  specialChars.includes (btnValue))return;
        output+=btnValue
    }

   display.value=output;
}

// ADD EVENT LISTENER TO BUTTONS ,CALL CALCULATE()ON CLICK
buttons.forEach((button)=>{
// BUTTON CLICK LISTENER CALL CALCULATE() WITH DATASETVALUE AS ARGUEMENT
    button.addEventListener("click", (e)=> calculate(e.target.dataset.value));
})  