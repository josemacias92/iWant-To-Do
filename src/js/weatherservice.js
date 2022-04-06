import ScreenPrinter from "./printer"

export default function rellenarWidgetTiempo(widget, imagen, descripcion, temperatura, loc) {

    const printer = new ScreenPrinter()

    const opcionesDeSolicitud = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000
    };

    const defaultLocation = {
        latitude: 38.2653307,
        longitude: -0.6988391
    }

    const getWeather = location => {

        console.log("Tengo la ubicación: ", location);

        const coords = location.coords
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=es&appid=f8530b783acd342e7b8ec3e7f8b4347f`, { mode: 'cors' })
        .then(function (response) {
            console.log("before " + response)
            return response.json()
        }).then(function mostrarWidget(data) {

                // const data = response.json()
                console.log("Tengo el tiempo: ", data);

                imagen.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                descripcion.textContent = data.weather[0].description
                temperatura.textContent = Math.round(data.main.temp) + "°C"
                loc.textContent = data.name
                widget.classList.remove("oculto")
            }, function mostrarError(err) {
                console.log("No se ha podido cargar la información metereológica: " + err)
            })
    }

    const onErrorDeUbicacion = err => {
        console.log("Error obteniendo ubicación: ", err);
        return this.defaultLocation
    }

    navigator.geolocation.getCurrentPosition(getWeather, onErrorDeUbicacion, opcionesDeSolicitud)
}