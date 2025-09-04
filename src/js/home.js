document.addEventListener("DOMContentLoaded", () => {
  const currentDateElement = document.getElementById("current-date-element");
  const currentDate = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  currentDateElement.textContent = `Data: ${currentDate}`;
  currentDateElement.datetime = currentDate;

  function formatCurrencyInsertionField(inputEvent) {
    const currencyFieldElement = inputEvent.target;

    currencyFieldElement.value = currencyFieldElement.value.replaceAll(
      /[^\d.,]/g,
      ""
    );
  }

  const currencyInsertionField = document.getElementById(
    "currency-insertion-field"
  );

  currencyInsertionField.addEventListener("input", (event) =>
    formatCurrencyInsertionField(event)
  );
});
