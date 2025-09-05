document.addEventListener("DOMContentLoaded", () => {
  const currentDateElement = document.getElementById("current-date-element");
  const currentDate = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  currentDateElement.textContent = `Data: ${currentDate}`;
  currentDateElement.datetime = currentDate;

  function handlePreventInvalidCharacter(keydownEvent) {
    const allowedRegex = /^(?:[0-9.]*|)$/;

    const enteredValue = keydownEvent.key;

    if (!allowedRegex.test(enteredValue) && enteredValue !== "Backspace") {
      keydownEvent.preventDefault();
    }

    if (mainCurrencyInsertionField.value === mainCurrencySelectionField.value) {
      keydownEvent.preventDefault();
      mainCurrencyInsertionField.value = mainCurrencySelectionField.value + " ";
    }
  }

  const mainCurrencyInsertionField = document.getElementById(
    "main-currency-insertion-field"
  );

  mainCurrencyInsertionField.addEventListener("keydown", (event) =>
    handlePreventInvalidCharacter(event)
  );

  const mainCurrencySelectionField = document.getElementById(
    "main-currency-selection-field"
  );

  if (!mainCurrencySelectionField.value) {
    mainCurrencyInsertionField.disabled = true;
  }

  function handleMainCurrencySelectionFieldChange(changeEvent) {
    const currencySimbol = changeEvent.target.value;

    mainCurrencyInsertionField.value = currencySimbol + " ";

    if (!currencySimbol) {
      mainCurrencyInsertionField.disabled = true;
      mainCurrencyInsertionField.value = "";
    } else {
      mainCurrencyInsertionField.disabled = false;
    }
  }

  mainCurrencySelectionField.addEventListener("change", (event) =>
    handleMainCurrencySelectionFieldChange(event)
  );
});
