const selectConvertTo = document.querySelector(".convert-to");
const selectConvertFrom = document.querySelector(".convert-from");
const buttonConvert = document.querySelector(".button-convert");

const dolarToday = 4.92;
const euroToday = 5.36;
const bitcoinToday = 185805.34;
const libraToday = 6.22;
const realToday = 1;

function convertCurrency() {
  const inputValue = parseFloat(document.querySelector(".convert-value").value);
  const valueToBeConverted = document.querySelector(".value-to-be-converted");
  const valueConverted = document.querySelector(".value-converted");

  valueToBeConverted.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  if (selectConvertTo.value === "dolar") {
    valueConverted.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }
  if (selectConvertTo.value === "euro") {
    valueConverted.textContent = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }
  if (selectConvertTo.value === "real") {
    valueConverted.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / realToday);
  }
  if (selectConvertTo.value === "bitcoin") {
    valueConverted.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    }).format(inputValue / bitcoinToday);
  }
  if (selectConvertTo.value === "pounds") {
    valueConverted.textContent = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(inputValue / libraToday);
  }
}

function changeCurrency() {
  const imgCurrencyToConvert = document.querySelector(
    ".img-currency-to-be-converted"
  );
  const nameCurrencyToConvert = document.querySelector(
    ".name-currency-to-be-converted"
  );
  const imgCurrency = document.querySelector(".img-currency-converted");
  const nameCurrency = document.querySelector(".name-currency-converted");

  function updateUI(name, src) {
    nameCurrency.textContent = name;
    imgCurrency.src = src;
  }

  // MUDA O VALOR E A IMAGEM DA MOEDA A SER CONVERTIDA
  if (selectConvertFrom.value === "dolar") {
    nameCurrencyToConvert.textContent = "Dólar Americano";
    imgCurrencyToConvert.src = "./assets/estados-unidos.png";
  }
  if (selectConvertFrom.value === "euro") {
    nameCurrencyToConvert.textContent = "Euro";
    imgCurrencyToConvert.src = "./assets/euro.png";
  }
  if (selectConvertFrom.value === "Real") {
    nameCurrencyToConvert.textContent = "Real";
    imgCurrencyToConvert.src = "./assets/brasil.png";
  }
  if (selectConvertFrom.value === "pounds") {
    nameCurrencyToConvert.textContent = "Libra";
    imgCurrencyToConvert.src = "./assets/libra.png";
  }
  if (selectConvertFrom.value === "bitcoin") {
    nameCurrencyToConvert.textContent = "Bitcoin";
    imgCurrencyToConvert.src = "./assets/bitcoin.png";
  }

  // MUDA O VALOR E A IMAGEM DA MOEDA QUE FOI CONVERTIDA
  if (selectConvertTo.value === "dolar") {
    updateUI("Dólar Americano", "./assets/estados-unidos.png");
  }
  if (selectConvertTo.value === "euro") {
    updateUI("Euro", "./assets/euro.png");
  }
  if (selectConvertTo.value === "real") {
    updateUI("Real Brasileiro", "./assets/brasil.png");
  }
  if (selectConvertTo.value === "pounds") {
    updateUI("Libra", "./assets/libra.png");
  }
  if (selectConvertTo.value === "bitcoin") {
    updateUI("Bitcoin", "./assets/bitcoin.png");
  }

  convertCurrency();
}

selectConvertFrom.addEventListener("change", changeCurrency);
selectConvertTo.addEventListener("change", changeCurrency);
buttonConvert.addEventListener("click", convertCurrency);
