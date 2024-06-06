const calculateResult = (unitsPln, currency) => {
  const rateEUR = 4.25;
  const rateUSD = 4.1;
  const rateGBP = 5.15;

  switch (currency) {
    case "EUR":
      return unitsPln / rateEUR;

    case "USD":
      return unitsPln / rateUSD;

    case "GBP":
      return unitsPln / rateGBP;
  }
};

{
  const resultReset = () => {
    resultElement.innerHTML = "N/A";
  };
  const formElement = document.querySelector(".js-form");
  const resultElement = document.querySelector(".js-result");
  formElement.addEventListener("reset", resultReset);

  const onCalculateClick = () => {
    buttonElement.innerHTML = "Calculate";
  };
  const buttonElement = document.querySelector(".js-button");
  buttonElement.addEventListener("click", onCalculateClick);

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const unitsPlnElement = document.querySelector(".js-unitsPln");
    const currencyElement = document.querySelector(".js-currency");

    const buttonResetElement = document.querySelector(".js-buttonReset");

    const unitsPln = +unitsPlnElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(unitsPln, currency);

    resultElement.innerHTML = `<strong>${result.toFixed(2)} ${currency}<strong>`;  
  });
}
