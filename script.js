const year = +prompt(`Який ваш рік народження? Введіть у форматі "1900"`);
const city = prompt(`У якому місті ви живете?`);
const sport = prompt(`Який ваш улюблений вид спорту?`);

if (year && city && sport) {
  let age = new Date().getFullYear() - year;
  let message;
  switch (city.toLowerCase()) {
    case "київ":
      alert(`Ви живете у столиці України.`);
      break;
    case "вашингтон":
      alert(`Ви живете у столиці США.`);
      break;
    case "лондон":
      alert(`Ви живете у столиці Великобританії.`);
      break;
  }
  switch (sport.toLowerCase()) {
    case "футбол":
      alert(`Круто! Хочете стати Неймаром?`);
      break;
    case "баскетбол":
      alert(`Круто! Хочете стати Майклом Джорданом?`);
      break;
    case "теніс":
      alert(`Круто! Хочете стати Еліною Світоліною?`);
      break;
  }
  alert(
    `Вам ${age} років. Ви живете у місті ${city}. Ваш улюблений вид спорту - ${sport}.`
  );
} else {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) інформацію`);
}

