function validateFormField(erroMessageElement, formFieldConfig) {
  const { formFieldValue, errorConditions } = formFieldConfig;

  const hasInvalidValue = errorConditions.includes(formFieldValue);

  erroMessageElement.style.display = hasInvalidValue ? "inline" : "none";
}

export default validateFormField;
