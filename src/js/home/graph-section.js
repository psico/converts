import CurrencyService from "../services/currency-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const currencyService = new CurrencyService();

  currencyService.getMonthlyDollarRate();
});
