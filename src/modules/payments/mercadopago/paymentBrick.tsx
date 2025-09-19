// PaymentBrick.tsx
import { Payment, initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY || "TU_PUBLIC_KEY_DE_PRUEBA", {locale: 'es-AR'});
type PaymentBrickProps = {
  title: string;
  amount: number;
};

export default function PaymentBrick({ title, amount }: PaymentBrickProps) {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    // Crear preferencia con los datos del producto
    fetch("http://localhost:3001/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Preference creada:", data);
        setPreferenceId(data.id);
      })
      .catch((err) => console.error("Error creando preferencia:", err));
  }, [title, amount]); // importante: se vuelve a ejecutar si cambia el producto

  if (!preferenceId) return <div>Cargando pago...</div>;

  const initialization = {
    amount,
    preferenceId,
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      creditCard: "all",
      prepaidCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  } as const;

  const onSubmit = async ({ selectedPaymentMethod, formData }: any) => {
    console.log("Formulario enviado", selectedPaymentMethod, formData);
    return Promise.resolve();
  };
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={onSubmit}
        onReady={() => console.log("Brick listo")}
        onError={(error) => console.error("Error Brick:", error)}
    />
    </Container>
  );
}
