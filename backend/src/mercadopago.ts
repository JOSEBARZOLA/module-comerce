import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MercadoPagoConfig, Preference } from 'mercadopago'; // <- import nombrado


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// 1) Crear el cliente/config
const client = new MercadoPagoConfig({
  accessToken: process.env.VITE_MP_ACCESS_TOKEN as string,
  // options: { timeout: 5000 } // opcional
});
// 2) Instanciar el cliente de Preference
const preferenceClient = new Preference(client);
// Ruta para crear preferencias
app.post('/create_preference', async (req: Request, res: Response) => {
  try {
    const { title, amount } = req.body;

    // Asegurate de pasar números para unit_price
    const preference = {
      items: [
        {
          id: '1234',
          title: title ?? 'Producto prueba',
          quantity: 1,
          unit_price: Number(amount) || 100,
        },
      ],
    };
    // IMPORTANTE: pasar el objeto envuelto en { body: ... }
    const response = await preferenceClient.create({ body: preference });
    // según versión, el id puede venir como response.id o response.body.id
    const preferenceId = response.id;
    // logueá la response completa si querés ver estructura exacta
    console.log('create preference response:', response);
    if (!preferenceId) {
      // devuelve la response completa para debug si no hay id
      return res.status(201).json({ raw: response });
    }
    res.json({ id: preferenceId });
  } catch (error: any) {
    console.error('Error creando preferencia:', error);
    res.status(500).json({ error: error.message ?? error });
  }
});
// test
app.get('/', (_req, res) => res.send('Backend de Mercado Pago corriendo'));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
