function generarNumeroAleatorio() {
  // Generar un número decimal aleatorio entre 0 y 1
  const numeroDecimal = Math.random();

  // Multiplicar por 10^9 y redondear para obtener un número entero
  const numeroEntero = Math.floor(numeroDecimal * Math.pow(10, 9));

  // Asegurarse de que tenga exactamente 9 dígitos
  let numeroAleatorio = String(numeroEntero).padStart(9, '0');

  return numeroAleatorio;
}
numeroAleatorio = generarNumeroAleatorio();

function obtenerEpochDeFechaActual() {
  // Obtener la fecha actual en segundos desde el 1 de enero de 1970 (epoch)
  const fechaActualEnSegundos = Math.floor(Date.now() / 1000);

  // Sumar un día en segundos (86400 segundos) al timestamp actual
  const epochConUnDiaMas = fechaActualEnSegundos + 86400;

  return epochConUnDiaMas;
}
// Llamar a la función y mostrar el resultado
const epochDeFechaActual = obtenerEpochDeFechaActual();
console.log("Epoch de fecha actual:", epochDeFechaActual);

// Configura los datos para la solicitud a la API de Culqi
const apiUrl = "https://api.culqi.com/v2/orders";
const apiKey = "sk_test_c2267b5b262745f0";
const requestData = {
    amount: 600,
    currency_code: "PEN",
    description: "Venta de prueba",
    order_number: numeroAleatorio,
    client_details: {
        first_name: "Fernando",
        last_name: "Chullo",
        email: "review158984@culqi.com",
        phone_number: "945737476"
    },
    expiration_date: epochDeFechaActual
};

// Configura la solicitud a la API
const requestOptions = {
    method: "POST",
    headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
};

// Realiza la solicitud a la API
fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        // Imprime la respuesta de la API (puedes hacer más con esta respuesta si es necesario)
        console.log("Respuesta de la API:", data);
        console.log("Order Number:", data.id);

     
        // Luego de obtener la respuesta, configura la ventana de pago de Culqi
        Culqi.publicKey = "pk_test_e94078b9b248675d";
        Culqi.settings({
            currency: "PEN",
            amount: 60000,
            title: "lorum ipsum dolor sit amet lorem ipsum dolor sit ameta lorem ipsum dolor sit amet",
            order: data.id,         
            xculqirsaid: 'de35e120-e297-4b96-97ef-10a43423ddec',
            rsapublickey: `-----BEGIN PUBLIC KEY-----
            MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDswQycch0x/7GZ0oFojkWCYv+g
            r5CyfBKXc3Izq+btIEMCrkDrIsz4Lnl5E3FSD7/htFn1oE84SaDKl5DgbNoev3pM
            C7MDDgdCFrHODOp7aXwjG8NaiCbiymyBglXyEN28hLvgHpvZmAn6KFo0lMGuKnz8
            HiuTfpBl6HpD6+02SQIDAQAB
            -----END PUBLIC KEY-----`,    
        });
        Culqi.options({
            lang: "auto",
            paymentMethods: {
                tarjeta: true,
                yape: true,
                billetera: true,
                bancaMovil: true,
                agente: true,
                cuotealo: true,
            },
            installments: true,
            logo: "https://static.culqi.com/v2/v2/static/img/logo.png"
        });
        Culqi.open();
    })
    .catch(error => {
        console.error("Error en la solicitud a la API:", error);
    });