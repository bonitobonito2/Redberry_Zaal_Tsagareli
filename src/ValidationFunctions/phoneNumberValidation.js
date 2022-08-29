function phoneNumberValidation(inputText) {
  let isNumber = true;
  for (var i = 0; i < inputText.length; i++) {
    if (isNaN(inputText[i])) {
      isNumber = false;
    }
  }
  if (!isNumber) return false;
  if (inputText[0] !== "5") return false;
  if (inputText.length !== 9) return false;
  return true;
}

export default phoneNumberValidation;
