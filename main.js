let urlApi = 'api.openweathermap.org/data/2.5/weather?q=';
let APIkey = ${CLIMA_API_KEY};
//Configuro el botón de ver el clima 
let boton = document.getElementById("boton__clima").addEventListener("click", function () {
    let ciudadConsulta = document.getElementById("ciudad").value;//Ingreso el dato de la ciudad
    //Petición de datos
    fetch(`https://${urlApi}${ciudadConsulta}${APIkey}`)
        .then(response => response.json())
        .then(response => { console.log(response);
            let temperatura = document.getElementById("temperatura");//Esto es el article
            let principal = (response.main.temp - 273.15).toFixed(1) + " °C"; //Mostrar la temperatura en grados Celsius
            //Ojo que lo modifico para probar. Porque la API me da el mismo valor en todas
            let maxima = ((response.main.temp_max - 273.15)+5).toFixed(1) + " °C";
            let minima = ((response.main.temp_min - 273.15)-6).toFixed(1) + " °C";
            let humedad = (response.main.humidity + " %");
            let pais = (response.sys.country);
            let icono = (response.weather[0].icon);
            // let iconoB = document.createElement("img");
            let ruta=`https://openweathermap.org/img/wn/${icono}@2x.png`;
            //Creo todos mis datos
            temperatura.innerHTML = `
                    <h2> Ciudad </h2>
                    <p> ${ciudadConsulta}, ${pais} </p>
                    <h2> Temperatura </h2>
                    <p> Temperatura: <b>${principal}</b> </p>
                    <p> Máxima: <b>${maxima}</b> </p>
                    <p> Mínima: <b>${minima}</b> </p>
                    <p> Sensación termica: <b> ${principal} </b> </p>
                    <p> Humedad: <b> ${humedad} </b> </p>
                    <img src=${ruta} alt="Icono de clima"></img>
                `;
        });
    //Dejo vacío el input
    let input = document.getElementById("ciudad");
    input.value = " ";
});




