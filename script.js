function headerAnimation() {
  let headerDiv = document.querySelector(".header");

  setTimeout(function() {
    headerDiv.style.animation = "fade 2s";
    headerDiv.style.opacity = "1"
  },500);
}

headerAnimation();


async function weatherMd(city) {
  city = "Chișinău";

  let input = document.querySelector(".search_bar").value;
  if(input) {
    city = input;
  }

  apiKey = "258bee7f3953ba15de9b4029a575275c";

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city 
  + "&units=metric&appid="
  + apiKey)
  .then((response) => response.json())
  .then((datamd) => {

    const parseData = datamd;

    const name = parseData.name;
    const temp = parseData.main.temp;
    const icon = parseData.weather[0].icon; 
    const speed = parseData.wind.speed;
    const humidity = parseData.main.humidity;

    document.querySelector(".city").innerHTML = name;
    document.querySelector(".temp").innerHTML = temp + " \u00B0" + "C";
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
    document.querySelector(".wind").innerHTML = "wind: " + speed + " m/s";
    document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%";

  });

}

weatherMd();

document.querySelector(".search_button").addEventListener("click", weatherMd);