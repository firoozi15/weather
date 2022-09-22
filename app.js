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
            const {main,name,sys,weather} = data;
            let icon = `http://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
            const li = document.createElement("li");
            li.classList.add("card-weather");
        })
})