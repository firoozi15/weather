const form = document.querySelector("#head form");
const input = document.querySelector("#text");
const msg = document.querySelector("#msg");
const list = document.querySelector("#Show-weader #Show-weader-list");
const apikey = "bb12c11782c6d9aceacb80db95c8d741";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputval = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apikey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            msg.innerText = "";
            try {
                const {main,name,sys,weather} = data;
                let icon = `http://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
                const li = document.createElement("li");
                li.classList.add("card-weather");
                const elementsCardWeather = `
                <div class="countryName">${sys["country"]}</div>
                <div class="cityName">${name}</div>
                <div class="cityTemp">
                    <div class="temp">${main["temp"]}</div>
                    <sup>°C</sup>
                </div>
                <img src="${icon}" alt="weatherIcon">
                <p>${weather[0]["description"]}</p>
                `;
    
                li.innerHTML = elementsCardWeather;
                list.appendChild(li);
                input.value = "";
            } catch{
                msg.innerText = "This value is`t valid";                
            }
        })
})