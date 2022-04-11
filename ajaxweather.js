$(function () {
    $("form").submit(function (e) {
        e.preventDefault()
        let cities = $("#ciudad").val()
        $("#city").text(cities)
        $.ajax({
            type: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cities},us&&appid=1b7847e54cc6c0038ac3321f86aee9d4`,
            dataType: "json",
            success: function (response) {
                $("#city").text(cities+": "+response.weather[0].main)
                $("#temp").text("Temperature: "+response.main.temp)
                $("#coord").text("Coord: "+response.coord.lon + ", " + response.coord.lat)
            }
        })
    })
})