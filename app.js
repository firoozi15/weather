const form = document.querySelector("#head form");
const input = document.querySelector("#text");
const msg = document.querySelector("#msg");
const list = document.querySelector("#Show-weader #Show-weader-list");

const apikey = "bb12c11782c6d9aceacb80db95c8d741";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputval = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apikey}&units=metric`;
    console.log(url);
})