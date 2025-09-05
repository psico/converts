document.addEventListener("DOMContentLoaded", () => {
  const currentDateElement = document.getElementById("current-date-element");
  const currentDate = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  currentDateElement.textContent = `Data: ${currentDate}`;
  currentDateElement.datetime = currentDate;

  function formatMainCurrencyInsertionField(inputEvent) {
    const currencyFieldElement = inputEvent.target;

    currencyFieldElement.value = currencyFieldElement.value.replaceAll(
      /[^\d.,]/g,
      ""
    );

    currencyFieldElement.value = currencyFieldElement.value.replaceAll(
      mainCurrencySelectionField.value,
      ""
    );

    currencyFieldElement.value =
      mainCurrencySelectionField.value + " " + currencyFieldElement.value;
  }

  const mainCurrencyInsertionField = document.getElementById(
    "main-currency-insertion-field"
  );

  mainCurrencyInsertionField.addEventListener("input", (event) =>
    formatMainCurrencyInsertionField(event)
  );

  const mainCurrencySelectionField = document.getElementById(
    "main-currency-selection-field"
  );

  mainCurrencySelectionField.addEventListener("change", (event) => {
    mainCurrencyInsertionField.value = event.target.value;
  });
});
