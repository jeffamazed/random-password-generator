// RANDOM PASSWORD GENERATOR

const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pwLength = parseInt(document.getElementById("pw-length").value);
  const includeLowerCase = document.getElementById("lower-case").checked;
  const includeUpperCase = document.getElementById("upper-case").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const pw = generatePw(
    pwLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );

  output.style.display = "block";
  output.textContent = `Generated password: ${pw}`;
});

function generatePw(
  pwLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "01234567890";
  const symbolChars = "!@#$%^&*()_+-=`~;:'|<>.,";

  let allowedChars = "";
  let pw = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (pwLength <= 0 || !pwLength) return "(password length must be at least 1)";
  if (allowedChars.length === 0)
    return "(At least 1 set of character must be selected)";

  for (let i = 0; i < pwLength; i++) {
    const randIndex = Math.floor(Math.random() * allowedChars.length);
    pw += allowedChars[randIndex];
  }
  return pw;
}
