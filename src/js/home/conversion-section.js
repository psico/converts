import validateFormField from "../utils/validate-form-field.js";

document.addEventListener("DOMContentLoaded", () => {
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

  const errorMessagesList = document.querySelectorAll(".form-error-message");

  mainCurrencyInsertionField.addEventListener("keydown", (event) => {
    handlePreventInvalidCharacter(event);
  });

  mainCurrencyInsertionField.addEventListener("input", (event) => {
    validateFormField(errorMessagesList[2], {
      formFieldValue: event.currentTarget.value,
      errorConditions: ["$ ", "$", "R$ ", "R$"],
    });
  });

  const mainCurrencySelectionField = document.getElementById(
    "main-currency-selection-field"
  );

  const secondaryCurrencySelectionField = document.getElementById(
    "secondary-currency-selection-field"
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

  mainCurrencySelectionField.addEventListener("change", (event) => {
    handleMainCurrencySelectionFieldChange(event);

    validateFormField(errorMessagesList[0], {
      formFieldValue: mainCurrencySelectionField.value,
      errorConditions: [""],
    });

    validateFormField(errorMessagesList[2], {
      formFieldValue: event.currentTarget.value,
      errorConditions: ["$ ", "$", "R$ ", "R$"],
    });
  });

  secondaryCurrencySelectionField.addEventListener("change", () => {
    validateFormField(errorMessagesList[1], {
      formFieldValue: secondaryCurrencySelectionField.value,
      errorConditions: [""],
    });
  });

  function handleValidateConversionForm() {
    validateFormField(errorMessagesList[0], {
      formFieldValue: mainCurrencySelectionField.value,
      errorConditions: [""],
    });

    validateFormField(errorMessagesList[1], {
      formFieldValue: secondaryCurrencySelectionField.value,
      errorConditions: [""],
    });

    validateFormField(errorMessagesList[2], {
      formFieldValue: mainCurrencyInsertionField.value,
      errorConditions: ["$", "$ ", "R$", "R$ ", ""],
    });
  }

  const conversionForm = document.getElementById("conversion-form");

  conversionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    handleValidateConversionForm();

    //@TODO fazer validação se não tem erro para em seguida fazer a conversao
    /*
      if (se não tem erros) {
        // fazer a conversao
      }
    */
  });

  function TrocarValores() {
    let inputEsquerdoValorParaConversao = document.getElementById("main-currency-insertion-field").value;

    let inputDireitoDaConversao = document.getElementById("secondary-currency-insertion-field");
    inputDireitoDaConversao.value = Number(inputEsquerdoValorParaConversao.value.split(" ")[1]);
  }

  const swapBtn = document.getElementById("swap-btn");
  if (swapBtn) {
    swapBtn.addEventListener("click", TrocarValores);
  }

  function dataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();

    document.getElementById("data-atual").innerText = `${dia}/${mes}/${ano}`;
  }

  const dataAtualElement = document.getElementById("data-atual");
  if (dataAtualElement) {
    dataAtualElement.addEventListener("click", dataAtual);
  }
});

function dataAtual() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();

  document.getElementById("data-atual").innerText = `${dia}/${mes}/${ano}`;
}
window.onload = dataAtual;
