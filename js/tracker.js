import {
  incomeBtn,
  expenseBtn,
  okBtn,
  transactionInput,
  transactionDisplay,
  errorMess,
  incomeDisplay,
  summaryDisplay,
  expenseDisplay,
} from "./main.js";

let transactionStatus = "";


let transactionList = JSON.parse(localStorage.getItem("transactionList")) || [];


let calculatedIncome = () => {
  let amount = 0
  transactionList.forEach((value) => {
    if (value.name === "income") {
      amount += value.amount
    }
  })
  incomeDisplay.innerText = `${amount}`
  return amount;
};
calculatedIncome();

let calculatedExpense = () => {
  let amount = 0
  transactionList.forEach((value) => {
    if (value.name === "expense") {
      amount += value.amount
    }
  })
  expenseDisplay.innerText = `${amount}`
  return amount;
};
calculatedExpense();

summaryDisplay.innerText = `${(calculatedIncome() - calculatedExpense())}`

const generateText = (name, amount, styling) => {
  let text = document.createElement("p");
  text.innerHTML = `${name} $${amount}`;
  text.classList.add(styling);
  transactionDisplay.appendChild(text);
};

const renderDisplay = () => {
  transactionDisplay.innerHTML = "";
  transactionList.forEach((value) => {
    if (value.name === "income") {
      generateText(value.name, value.amount, "transaction-list-income");
    } else {
      generateText(value.name, value.amount, "transaction-list-expense");
    }
  });
};

renderDisplay();

const selectBtn = (btn1, btn2, status) => {
  btn1.classList.add("clicked-btn");
  btn2.classList.remove("clicked-btn");
  transactionStatus = status;
};

incomeBtn.addEventListener("click", () => {
  selectBtn(incomeBtn, expenseBtn, "income");
});

expenseBtn.addEventListener("click", () => {
  selectBtn(expenseBtn, incomeBtn, "expense");
});

const updateTransactionList = (name, amount) => {
  transactionList.unshift({
    name: name,
    amount: Number(amount),
  });
  localStorage.setItem("transactionList", JSON.stringify(transactionList))
};

const errorMessage = (message) => {
  errorMess.innerHTML = message;
  setTimeout(() => {
    errorMess.innerHTML = "";
  }, 1000);
  transactionInput.value = "";
};

let performCalc = () => {
  let transactionInputNum = Number(transactionInput.value);
  let incomeDisplayNum = Number(incomeDisplay.innerText);
  let expenseDisplayNum = Number(expenseDisplay.innerText);
  let summaryDisplayNum = Number(summaryDisplay.innerText);

  let incomeCalc;
  let summaryCalc;
  let expenseCalc;

  if (transactionStatus === "income") {
    incomeCalc = transactionInputNum + incomeDisplayNum;
    incomeDisplay.innerText = incomeCalc;
    summaryCalc = summaryDisplayNum + transactionInputNum;
    summaryDisplay.innerText = summaryCalc;
  }
  if (transactionStatus === "expense") {
    expenseCalc = transactionInputNum + expenseDisplayNum;
    expenseDisplay.innerText = expenseCalc;
    summaryCalc = summaryDisplayNum - transactionInputNum;
    summaryDisplay.innerText = summaryCalc;
  }

  transactionInput.value = "";
};

const updateWindow = () => {
  if (Number(transactionInput.value) < 1 || isNaN(transactionInput.value)) {
    errorMessage("enter a valid number");
  } else if (!transactionStatus) {
    errorMessage("income or expense");
  } else {
    updateTransactionList(transactionStatus, transactionInput.value);
    performCalc();
    renderDisplay();
    transactionInput.value = "";
  }
};

okBtn.addEventListener("click", () => {
  updateWindow();
});

transactionInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    updateWindow();
  }
});
