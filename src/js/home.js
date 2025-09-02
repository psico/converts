document.addEventListener("DOMContentLoaded", () => {
  const currentDateElement = document.getElementById("current-date-element");
  const currentDate = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  currentDateElement.textContent = `Data: ${currentDate}`;
  currentDateElement.datetime = currentDate;
});
