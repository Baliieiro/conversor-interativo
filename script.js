const selectConvertTo = document.querySelector(".convert-to");
const selectConvertFrom = document.querySelector(".convert-from");
const buttonConvert = document.querySelector(".button-convert");

const realToday = 1;

const convertCurrency = async () => {
  const inputValue = document.querySelector(".convert-value").value;
  const valueToBeConverted = document.querySelector(".value-to-be-converted");
  const valueConverted = document.querySelector(".value-converted");
  if (inputValue === "") {
    return alert("Insira um valor válido!");
  }
  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((res) => res.json());

  const dolarToday = data.USDBRL.high;
  const euroToday = data.EURBRL.high;
  const bitcoinToday = data.BTCBRL.high;

  console.log(dolarToday);

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
};

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
  if (selectConvertTo.value === "bitcoin") {
    updateUI("Bitcoin", "./assets/bitcoin.png");
  }

  convertCurrency();
}

selectConvertFrom.addEventListener("change", changeCurrency);
selectConvertTo.addEventListener("change", changeCurrency);
buttonConvert.addEventListener("click", convertCurrency);
