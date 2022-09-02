function leptopNameValidation(inputText) {
  let validation = /^[a-zA-Z0-9!@#$%^&*()_+=]*$/;
  if (validation.test(inputText)) {
    return true;
  }

  return false;
}
export default leptopNameValidation;
