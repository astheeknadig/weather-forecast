function fetchdata(){
    var city = document.querySelector('#search').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d78bb19274d9db42f93a3ef5c77f7b4a`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var x = Number(data["main"]["temp"]);
        var y = Number(data["main"]["temp_max"]);
        var z = Number(data["main"]["temp_min"]);
        x = ((x - 32) * 0.5556)
        y = ((y - 32) * 0.5556)
        z = ((z - 32) * 0.5556)
        console.log(data)
        document.querySelector('.temp').innerHTML = x.toFixed(2) + ' °C';
        document.querySelector('.hi-low').innerHTML = y.toFixed(2) + ' °C /' + z.toFixed(2) + ' °C';
    })
    .catch(err => console.log(err))
}