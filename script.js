function alertIncome() {
  const income = document.getElementById("monthly-income").value;
  alert(income);
}

// const income = document.getElementById("monthly-income").innerHTML;

const livingCosts = document.getElementById("living-costs").value;
const food = document.getElementById("food").value;
const transportation = document.getElementById("transportation").value;
const pets = document.getElementById("pets").value;
const others = document.getElementById("others").value;
const hobbies = document.getElementById("hobbies").value;
const privateNeeda = document.getElementById("private-needs").value;
const travel = document.getElementById("travel").value;
const others2 = document.getElementById("others2").value;

function monthlyCosts() {
  const income = document.getElementById("monthly-income").value;
  const livingCosts = document.getElementById("living-costs").value;
  const food = document.getElementById("food").value;
  const transportation = document.getElementById("transportation").value;
  const pets = document.getElementById("pets").value;
  const others = document.getElementById("others").value;
  const hobbies = document.getElementById("hobbies").value;
  const privateNeeds = document.getElementById("private-needs").value;
  const travel = document.getElementById("travel").value;
  const others2 = document.getElementById("others2").value;
  const fixedCosts =
    income -
    livingCosts -
    food -
    transportation -
    pets -
    others -
    hobbies -
    privateNeeds -
    travel -
    others2;
  alert(
    "You have left " +
      fixedCosts +
      " euros left for emergency funds and fun funds"
  );
}

function showEmergencyAmount() {
  const income = document.getElementById("monthly-income").value;
  const livingCosts = document.getElementById("living-costs").value;
  const food = document.getElementById("food").value;
  const transportation = document.getElementById("transportation").value;
  const pets = document.getElementById("pets").value;
  const others = document.getElementById("others").value;
  const hobbies = document.getElementById("hobbies").value;
  const privateNeeds = document.getElementById("private-needs").value;
  const travel = document.getElementById("travel").value;
  const others2 = document.getElementById("others2").value;
  const fixedCosts =
    income -
    livingCosts -
    food -
    transportation -
    pets -
    others -
    hobbies -
    privateNeeds -
    travel -
    others2;

  const emergencyFunds = (fixedCosts / 100) * 70;
  alert("You can save " + emergencyFunds + " euros for black days!");
}

function showFunAmount() {
  const income = document.getElementById("monthly-income").value;
  const livingCosts = document.getElementById("living-costs").value;
  const food = document.getElementById("food").value;
  const transportation = document.getElementById("transportation").value;
  const pets = document.getElementById("pets").value;
  const others = document.getElementById("others").value;
  const hobbies = document.getElementById("hobbies").value;
  const privateNeeds = document.getElementById("private-needs").value;
  const travel = document.getElementById("travel").value;
  const others2 = document.getElementById("others2").value;
  const fixedCosts =
    income -
    livingCosts -
    food -
    transportation -
    pets -
    others -
    hobbies -
    privateNeeds -
    travel -
    others2;

  const funFunds = (fixedCosts / 100) * 30;
  alert("You can spend " + funFunds + " euros for fun!");
}
