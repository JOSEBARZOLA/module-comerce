import { type Request, type Response } from "express";
import { MercadoPagoConfig, Preference, Payment } from "mercadopago";
import dotenv from "dotenv";

dotenv.config();

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN as string,
});
console.log("Access token backend:", process.env.MP_ACCESS_TOKEN);

const preferenceClient = new Preference(client);
const paymentClient = new Payment(client);

// Crear preferencia
export const createPreference = async (req: Request, res: Response) => {
  try {
    const { title, amount } = req.body;

    const preference = {
      items: [
        {
          id: "1234",
          title: title ?? "Producto prueba",
          quantity: 1,
          unit_price: Number(amount) || 100,
        },
      ],
    };

    const response = await preferenceClient.create({ body: preference });
    const preferenceId = response.id;

    if (!preferenceId) {
      return res.status(201).json({ raw: response });
    }

    res.json({ id: preferenceId });
  } catch (error: any) {
    console.error("Error creando preferencia:", error);
    res.status(500).json({ error: error.message ?? error });
  }
};

// Procesar pago
export const processPayment = async (req: Request, res: Response) => {
  console.log("FormData recibido:", req.body);
  try {
    const paymentData = req.body; // acá llega lo que manda el Brick en formData
    const response = await paymentClient.create({ body: paymentData });

    console.log("Payment response:", response);

    res.json(response);
  } catch (error: any) {
    console.error("Error procesando pago:", error);
    res.status(500).json({ error: error.message ?? error });
  }
};
