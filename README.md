# DEMO - Culqi Angular + Checkout V4

La demo integra Culqi Angular, Checkout V4 , es compatible con la v2.0 del Culqi API, con esta demo podrás **generar tokens** (tarjeta y Yape) y confirmar órdenes.

## Requisitos

- Angular 16.0+
- Afiliate [aquí](https://afiliate.culqi.com/).
- Si vas a realizar pruebas obtén tus llaves desde [aquí](https://integ-panel.culqi.com/#/registro), si vas a realizar transacciones reales obtén tus llaves desde [aquí](https://mipanel.culqi.com/#/registro).

> Recuerda que para obtener tus llaves debes ingresar a tu CulqiPanel > Desarrollo > ***API Keys***.

![alt tag](http://i.imgur.com/NhE6mS9.png)

> Recuerda que las credenciales son enviadas al correo que registraste en el proceso de afiliación.

* Para encriptar el payload debes generar un id y llave RSA  ingresando a CulqiPanel > Desarrollo  > RSA Keys.

## Instalación

Ejecuta los siguientes comandos:

```bash
npm install
```

## Configurar las pruebas y ejemplos

Configura tus credenciales en `src/assets/js/checkout.js`. Usa tus propias llaves `pk_test_` y `sk_test_` y las credenciales RSA de tu CulqiPanel. Esta demo realiza solicitudes reales a la API; usa credenciales de prueba y no hagas commit de llaves.

```js
var apiKey = "INSERTE_SU_LLAVE_PRIVADA";
Culqi.publicKey = "INSERTE_SU_LLAVE_PUBLICA";
Culqi.settings({
    xculqirsaid: 'INSERTE_SU_RSA_ID',
    rsapublickey: `INSERTE_SU_LLAVE_RSA`,
});
```

## Inicializar la demo
Ejecutar el siguiente comando:

```bash
npm start
```

## Probar la demo

Para poder visualizar el frontend de la demo ingresar a la siguiente URL:

http://localhost:4200/

## Documentación

- [Referencia de Documentación](https://docs.culqi.com/)
- [Referencia de API](https://apidocs.culqi.com/)
