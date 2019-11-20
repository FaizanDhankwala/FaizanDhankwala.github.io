window.onload = () => {
    // All code goes in here.
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    

    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const addToListAction = document.getElementById('addToListAction');
    functionCallsAction.onclick = simpleFunction;



    function simpleFunction() {
        console.log("functions should consist of statements designed to perform a single task.")
        simpleFunctionDisplay.textContent = "simple";

        function simple() {
            console.log('simple');
            simpleFunctionDisplay.textContent = "simple";
        }
       
    }
    addToListAction.onclick = function () {
        // Handle the onclick event in here.
         const listDisplay= document.getElementById('listDisplay');
        const nameDisplay=document.getElementById('nameDisplay');
        const userInput=nameDisplay.value;
        console.log('userInput',userInput);
        elfCode.appendToList(listDisplay,userInput);
    }
    //simpleFunction();
}
function functionParameters(value) {
    console.log(value);
}
function functionReturn() {
    return "Many functions return values.";

}

function add(a, b) {
    return a + b;
}

functionParameters("Many functions take parameters.");
const returnValue = functionReturn();
console.log(returnValue);

const result = add(2, 3);
console.log(result);

//const data = nameDisplay.value;         







