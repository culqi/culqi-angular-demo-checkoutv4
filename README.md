# DEMO - Culqi Angular + Checkout V4

La demo integra Culqi Angular, Checkout V4 , es compatible con la v2.0 del Culqi API, con esta demo podrás generar tokens.

## Requisitos

- Angular 16.0+
- Afiliate [aquí](https://afiliate.culqi.com/).
- Si vas a realizar pruebas obtén tus llaves desde [aquí](https://integ-panel.culqi.com/#/registro), si vas a realizar transacciones reales obtén tus llaves desde [aquí](https://mipanel.culqi.com/#/registro).

> Recuerda que para obtener tus llaves debes ingresar a tu CulqiPanel > Desarrollo > ***API Keys***.

![alt tag](http://i.imgur.com/NhE6mS9.png)

> Recuerda que las credenciales son enviadas al correo que registraste en el proceso de afiliación.


## Instalación

Ejecuta los siguientes comandos:

```bash
npm install
```

## Configuración frontend
Para configurar los datos del cargo, pk y sk de del cliente se tiene que modificar en el archivo `assets/js/checkout.js`.

```js

 const apiKey = "sk_test_1573b0e8079863ff";
 Culqi.publicKey = "pk_test_90667d0a57d45c48";
        Culqi.settings({
            currency: "PEN",
            amount:50000,
            title: "lorum ipsum dolor sit amet lorem ipsum dolor sit ameta lorem ipsum dolor sit amet",
            order: data.id,
            culqiclient: "prestashop",
            culqiclientversion: "1.1.0"
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
