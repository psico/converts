class CurrencyService {
  _baseFrankfurterApiUrl = "https://api.frankfurter.dev/v1";

  _getMonthlyDate() {
    let finalDate = new Date();
    let initialDate = new Date();
    initialDate.setDate(finalDate.getDate() - 30);

    finalDate = finalDate.toISOString().slice(0, 10);
    initialDate = initialDate.toISOString().slice(0, 10);

    return { finalDate, initialDate };
  }

  async getMonthlyDollarRate() {
    const { finalDate, initialDate } = this._getMonthlyDate();

    const request = await fetch(
      `${this._baseFrankfurterApiUrl}/${initialDate}..${finalDate}?base=USD&symbols=BRL`
    );

    const response = await request.json();

    return response;
  }
}

export default CurrencyService;
