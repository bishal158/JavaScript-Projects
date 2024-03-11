const display = document.getElementById("display");
const resultDisplay = document.getElementById("result");

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
  
};

function calculate() {
  let result;
  let value = display.value;
  console.log(value);
  result = eval(value);
  resultDisplay.value = result;
  console.log(result);
  clearDisplay();
  
}

// theme

const setDark = () => {
  document.querySelector('body').setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
}
const setLight = () => {
  document.querySelector('body').setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
}
const selectedTheme = localStorage.getItem('theme')
selectedTheme === 'light' ? setLight() : setDark();
const toggleMode = () => {
  const theme = document.querySelector('body').getAttribute('data-theme');
  theme === 'dark' ? setLight() : setDark();
}
