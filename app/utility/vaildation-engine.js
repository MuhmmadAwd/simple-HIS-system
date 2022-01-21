class ValidationEngine {
  init() {}

  ValidateForm() {
    let isValid = true;
    let inputs = $("[data-validation]");
    let summaryErrors = [];
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];

      let inputValue = input.value;
      let inputData = input.dataset.validation;
      let inputDataName = input.dataset.name;
      switch (inputData) {
        case "required":
          if (this.validateRequireField(inputValue)) {
            isValid = false;
            this.showError(input, `${inputDataName} not valid`);
            summaryErrors.push(`${inputDataName} not valid`);
          }
          break;
        case "email":
          if (this.validateEmailField(inputValue)) {
            isValid = false;
            this.showError(input, "email not valid");
            summaryErrors.push("email not valid");
          }
          break;
        case "positiveNumber":
          if (this.validatePositiveNumberField(inputValue)) {
            isValid = false;
            this.showError(input, "age not valid");
            summaryErrors.push("age not valid");
          }
          break;
        default:
          break;
      }
    }
    $(".summary-alerts").text(summaryErrors).show();
    return isValid;
  }

  showError(input, errorName) {
    $(input).closest(".form-group").addClass("has-error");
    $(input).siblings(".error-message").show().text(errorName);
  }

  validateRequireField(inputValue) {
    if (inputValue.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  validatePositiveNumberField(inputValue) {
    if (inputValue < 1) {
      return true;
    } else {
      return false;
    }
  }
  validateEmailField(inputValue) {
    let emailRegex = /^\S+\@[a-z]+\.\w+/;
    let emailControlsData = emailRegex.test(inputValue);
    if (!emailControlsData) {
      return true;
    } else {
      return false;
    }
  }
}
let _ValidationEngine = new ValidationEngine();
