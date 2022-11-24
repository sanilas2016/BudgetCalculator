

var balance=0;
var incamount=0;

function addIncome(){
  if(itext.value=="" || iamount.value==""){
    alert(`Fill the data`)
  }
  else{
  var incometext=itext.value;
  var incomeamount=parseFloat( iamount.value);



  balance=(balance+incomeamount);
  incamount=(incamount+incomeamount);

  income={
    incometext,
    incomeamount,
    incamount,
    balance
  }

  localStorage.setItem(income.balance,JSON.stringify(income));
  

income=JSON.parse(localStorage.getItem(balance));


  incomeresult=parseFloat(income.incamount);
 incomer.innerHTML=incomeresult;
 mainbalance=parseFloat(income.balance);
 bal.innerHTML=mainbalance;



// incomes=localStorage.getItem(intext);


// var addamount=parseFloat(incomes.inamount);
// addtext=incomes.intext;

// balance=(balance+addamount);

// incamount=(incamount+addamount);

//   incomer.innerHTML=incamount;
//   bal.innerHTML=balance;




  var htmldata=`
           
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item" style="color:green;font-size:20px;background-color: #f7f7f7;"><span style="float:left;">${income.incometext}</span>  <span style="float:right;">+${income.incomeamount}</li>
  
  </ul>`
result.innerHTML+=htmldata;




}
}
function getbalance(){
   
}



var expamount=0;

function addExpense(){
//   var expensetext=etext.value;
//   var expenseamount=parseFloat(eamount.value);
//   balance=(balance-expenseamount);
//   expamount=(expamount+expenseamount);
//   expenser.innerHTML=expamount;
//   bal.innerHTML=balance;
if(etext.value=="" || eamount.value==""){
  alert(`Fill the data`)
}
else{


var expensetext=etext.value;
  var expenseamount=parseFloat(eamount.value);



  balance=(balance-expenseamount);
  expamount=(expamount+expenseamount);

  expense={
    expensetext,
    expenseamount,
    expamount,
    balance
  }

  localStorage.setItem(expense.balance,JSON.stringify(expense));
  

expense=JSON.parse(localStorage.getItem(balance));

expenseresult=parseFloat(expense.expamount);
 expenser.innerHTML=expenseresult;

 mainbalance=parseFloat(expense.balance);
 bal.innerHTML=mainbalance;


  var htmldata=`
           
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="color:red;font-size:20px;background-color: #f7f7f7;"><span style="float:left;">${expense.expensetext}</span>  <span style="float:right;">-${expense.expenseamount}</span></li>
  
  </ul>`
result.innerHTML+=htmldata;
 
}
}

