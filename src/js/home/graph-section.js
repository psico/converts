import CurrencyService from "../services/currency-service.js";

document.addEventListener("DOMContentLoaded", async () => {
  const currencyService = new CurrencyService();

  const monthlyDollarRateData = await currencyService.getMonthlyDollarRate();

  const dollarRatesDates = Object.keys(monthlyDollarRateData.rates);

  const formattedDollarRatesDates = dollarRatesDates.map((dollarRateDate) => {
    const formattedDollarRateDate = new Date(dollarRateDate).toLocaleString(
      "pt-BR",
      {
        month: "2-digit",
        day: "2-digit",
      }
    );

    return formattedDollarRateDate;
  });

  const dollarRatesValues = Object.values(monthlyDollarRateData.rates);

  const formattedDollarRatesValues = dollarRatesValues.map((dollaRateValue) => {
    const formattedDollarRateValue = Number(dollaRateValue.BRL).toFixed(2);

    return formattedDollarRateValue;
  });

  const canvasGraph = document.getElementById("canvas-graph");

  (async function () {
    new Chart(canvasGraph, {
      type: "bar",
      data: {
        labels: formattedDollarRatesDates,
        datasets: [
          {
            label: "Cotação do Dólar nos últimos 30 dias",
            data: formattedDollarRatesValues,
          },
        ],
      },
    });
  })();
});


function bindFlagToSelect(selectId, imgId) {
  const select = document.getElementById(selectId);
  const img = document.getElementById(imgId);
  if (!select || !img) return;

  function updateFlag() {
    const opt = select.options[select.selectedIndex];
    const flagUrl = opt?.dataset?.flag || "";
    if (flagUrl) {
      img.src = flagUrl;
      img.style.display = "inline-block";
      img.alt = opt.textContent.trim();
    } else {
      img.src = "";
      img.style.display = "none";
      img.alt = "";
    }
  }
  select.addEventListener("change", updateFlag);
    updateFlag();
}
document.addEventListener("DOMContentLoaded", () => {
bindFlagToSelect("main-currency-selection-field", "main-flag");
bindFlagToSelect("secondary-currency-selection-field", "secondary-flag");
}); 