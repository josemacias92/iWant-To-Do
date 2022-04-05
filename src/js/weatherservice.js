import ScreenPrinter from "./printer"

export default function rellenarWidgetTiempo(widget, imagen, descripcion, temperatura, loc) {

    const printer = new ScreenPrinter()

    // fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat', { mode: 'cors' })
    //     .then(function (response) {
    //         console.log("before " + response)

    //         return response.json()
    //     })
    //     .then(function (response) {
    //         console.log("lo tengo " + response)

    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })

    const opcionesDeSolicitud = {
        enableHighAccuracy: false,
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
                widget.classList.remove("ocultar")
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

class Locator {

    getLocation() {
        if ("geolocation" in navigator) {
            return Promise.resolve(navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud));
        } else {
            console.log("Este navegador no soporta el acceso a la ubicación. Usando ubicación de Elche");
            return Promise.resolve(this.defaultLocation)
        }
    }

    onUbicacionConcedida = ubicacion => {
        console.log("Tengo la ubicación: ", ubicacion);
        return ubicacion.coords
    }
}