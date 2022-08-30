function phoneNumberValidation(inputText) {
  let isNumber = true;
  for (var i = 0; i < inputText.length; i++) {
    if (i === 0) continue;
    if (isNaN(inputText[i])) isNumber = false;
  }
  if (!isNumber) return false;
  if (inputText[0] !== "+") return false;
  if (inputText[1] !== "9") return false;
  if (inputText[2] !== "9") return false;
  if (inputText[3] !== "5") return false;
  if (inputText[4] !== "5") return false;
  if (inputText.length !== 13) return false;
  return true;
}

export default phoneNumberValidation;
