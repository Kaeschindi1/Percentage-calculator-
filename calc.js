const xValue = document.getElementById("xValue");
const yValue = document.getElementById("yValue");
const resultValue = document.getElementById("resultValue");
const form = document.getElementById("formCalculate");
const aValue = document.getElementById("aValue");
const bValue = document.getElementById("bValue");

form.addEventListener("submit", function(event){
    // if(!xValue.value || !yValue.value){
    //     alert("Hey, enter values for X and Y");
    // }else{
    //    const x = parseInt(xValue.value);
    //    const y = parseInt(yValue.value);

    //    const result = x/y;
    //    const percent = result * 100;

    //    resultValue.innerText = "Answer: " + percent + "%";
    //    event.preventDefault();
    // }

    if(!aValue.value || !bValue.value){
        alert("Hey, enter values for A and B");
    }else{
       const a = parseInt(aValue.value);
       const b = parseInt(bValue.value);  

       const result = (a/100) * b;

       resultValue.innerText = "Answer: " + result;
       event.preventDefault();
    }
})