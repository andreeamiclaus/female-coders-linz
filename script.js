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

  return fixedCosts;
}

function leftMoney() {
  const final = monthlyCosts();
  alert(
    "You have left " +
      final +
      " euros left for emergency funds, fun funds and investment funds"
  );

  return final;
}

function saveEmergency() {
  const final2 = (monthlyCosts() / 100) * 50;

  alert("You can spend " + final2 + " euros for black days!");
}

function funFund() {
  const final3 = (monthlyCosts() / 100) * 20;

  alert("You can spend " + final3 + " euros for fun !");
}

function investingFund() {
  const final4 = (monthlyCosts() / 100) * 30;

  alert("You can invest " + final4 + " euros  !");
}
