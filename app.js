const billAmountRaw = document.querySelector("#bill-input");
const peopleRaw = document.querySelector("#number-of-people");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const resetBtn = document.querySelector("#reset-btn");

// console.log(billAmountRaw.value)

// if(billAmountRaw.value == "" || peopleRaw.value == "" ||billAmountRaw.value == 0 || peopleRaw.value == 0){
//     billAmountRaw.style.border = "1px solid hsl(0, 100%, 66%)";
// }else{
    
// }

for(i = 1; i < 6; i++){
    const button = document.querySelector(`#btn${i}`);

    button.addEventListener("click", function (){
        if(billAmountRaw.value == "" ||billAmountRaw.value == 0 ){
            billAmountRaw.style.border = "2px solid hsl(0, 100%, 66%)";
        }
        if(peopleRaw.value == "" || peopleRaw.value == 0){
            peopleRaw.style.border = "2px solid hsl(0, 100%, 66%)";
        }
        else{
            peopleRaw.style.border = "2px solid hsl(202, 50%, 97%)";
            billAmountRaw.style.border = "2px solid hsl(202, 50%, 97%)";
            this.button = button;
            let value =  button.innerHTML.slice(0, -1) ;
            let num = Number(value);
            num = num / 100;
            let amount =  billAmountRaw.value/peopleRaw.value;
            let tip = num * amount;
            let total = (amount + tip).toFixed(2);
            tipAmount.textContent = "$" + tip.toFixed(2);
            totalAmount.textContent = "$" + total;
            return num
        }
})};

resetBtn.addEventListener("click", function(){
    billAmountRaw.value = "";
    peopleRaw.value = "";
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
})