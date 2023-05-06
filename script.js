const year = +prompt(`Який ваш рік народження? Введіть у форматі "YYYY"`);
const city = prompt(`У якому місті ви живете?`);
const sport = prompt(`Який ваш улюблений вид спорту?`);

if (
  year === null ||
  isNaN(year) ||
  year <= 0 ||
  year > new Date().getFullYear()
) {
  alert(
    `Шкода, що Ви не захотіли ввести коректно свій рік народження. Ви живете у місті - ${city}. Ваш улюблений вид спорту - ${sport}.`
  );
} else {
  const age = new Date().getFullYear() - year;

  if (city === null || city === "") {
    alert(
      `Шкода, що Ви не захотіли ввести коректно назву міста. Вам ${age} років. Ваш улюблений вид спорту - ${sport}.`
    );
  } else {
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
  }

  if (sport === null || sport === "") {
    alert(
      `Шкода, що Ви не захотіли ввести коректно улюблений вид спорту. Вам ${age} років. Ви живете у місті - ${city}.`
    );
  } else {
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
  }
  
  if (year && city && sport) {
    alert(
      `Вам ${age} років. Ви живете у місті - ${city}. Ваш улюблений вид спорту - ${sport}.`
    );
  }
}
