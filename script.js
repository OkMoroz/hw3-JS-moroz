const year = +prompt(`Який ваш рік народження? Введіть у форматі "YYYY"`);
const city = prompt(`У якому місті ви живете?`);
const sport = prompt(`Який ваш улюблений вид спорту?`);

let ageMessage = null;
let cityMessage = null;
let sportMessage = null;

if (year === null || year <= 0 || year > new Date().getFullYear()) {
  alert(`Шкода, що Ви не захотіли ввести коректно свій рік народження`);
} else {
  const age = new Date().getFullYear() - year;
  ageMessage = `Вам ${age} років.`;
}

if (city === null || city === "") {
  alert(`Шкода, що Ви не захотіли ввести коректно назву міста.`);
} else {
  switch (city.toLowerCase()) {
    case "київ":
      cityMessage = `Ви живете у столиці України.`;
      break;
    case "вашингтон":
      cityMessage = `Ви живете у столиці США.`;
      break;
    case "лондон":
      cityMessage = `Ви живете у столиці Великобританії.`;
      break;
    default:
      cityMessage = `Ви живете у місті ${city}.`;
  }
}

if (sport === null || sport === "") {
  alert(`Шкода, що Ви не захотіли ввести коректно улюблений вид спорту.`);
} else {
  switch (sport.toLowerCase()) {
    case "футбол":
      sportMessage = `Круто! Хочете стати Неймаром?`;
      break;
    case "баскетбол":
      sportMessage = `Круто! Хочете стати Майклом Джорданом?`;
      break;
    case "теніс":
      sportMessage = `Круто! Хочете стати Еліною Світоліною?`;
      break;
    default:
      sportMessage = `Ваш улюблений вид спорту ${sport}.`;
  }
}

if (ageMessage == null && cityMessage == null && sportMessage == null) {
  alert(`Ви нічого не ввели. Спробуйте ще раз, будь ласка.`);
} else {
  let finalMessage = "";
  if (ageMessage !== null) {
    finalMessage += ageMessage;
  }

  if (cityMessage !== null) {
    finalMessage += cityMessage;
  }

  if (sportMessage !== null) {
    finalMessage += sportMessage;
  }

  alert(finalMessage);
}
