function changeCity() {
  let cityName = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");
  if (temperature > 0) {
    document.querySelector("h1").innerHTML = (` 😄 ` +
      ` Currently ${temperature} in ${cityName}`);
  } else {
    document.querySelector("h1").innerHTML = (` ☹ ` +
      `Currently ${temperature} in ${cityName}`);
  }
}
let button = document.querySelector("button");
button.addEventListener("click", changeCity)