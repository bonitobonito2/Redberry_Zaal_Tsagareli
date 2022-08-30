function onlyNumbersValidation(inputText) {
  let isNumber = true;
  for (var i = 0; i < inputText.length; i++) {
    if (isNaN(inputText[i])) isNumber = false;
  }
  if (inputText.length !== 0 && isNumber) return true;

  return false;
}
export default onlyNumbersValidation;
