const passwordDisplay = document.getElementById("passwordDisplay");
const passwordLength = document.getElementById("passwordLength");
const generateButton = document.getElementById("generateButton");
const copyIcon = document.getElementById("copyIcon");
const notification = document.getElementById("notification");

const includeUpper = document.getElementById("includeUpper");
const includeLower = document.getElementById("includeLower");
const includeNumber = document.getElementById("includeNumber");
const includeSymbol = document.getElementById("includeSymbol");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";

function generatePassword() {
  let characters = "";
  if (includeUpper.checked) characters += upperCase;
  if (includeLower.checked) characters += lowerCase;
  if (includeNumber.checked) characters += numbers;
  if (includeSymbol.checked) characters += symbols;

  if (characters.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordDisplay.value = password;
}

function copyPassword() {
  const password = passwordDisplay.value;
  if (!password) return;

  navigator.clipboard.writeText(password)
    .then(() => {
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      alert("Failed to copy password: ", err);
    });
}

generateButton.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
