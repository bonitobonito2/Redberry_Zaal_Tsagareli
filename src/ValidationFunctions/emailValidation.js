function validateEmail(inputText) {
  let tester = "@redberry.ge";
  let indexof = inputText.split("").findIndex((char) => char === "@");
  let redberEmail = inputText.slice(indexof);
  if (redberEmail === tester && inputText.length > tester.length) return true;
  return false;
}

export default validateEmail;
