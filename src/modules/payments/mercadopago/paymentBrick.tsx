// PaymentBrick.tsx
import { Payment, initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY || "TU_PUBLIC_KEY_DE_PRUEBA", {locale: 'es-AR'});

export default function PaymentBrick() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    let executed = false;
    if (executed) return; // evita la segunda ejecución
    
    
    // 🔥 Pedir al backend que cree la preferencia
    fetch("http://localhost:3001/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Producto de prueba",
        amount: 100, // mismo valor que le pasás a initialization
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Preference creada:", data);
        setPreferenceId(data.id); // el backend devuelve { id: preferenceId }
      })
      .catch((err) => console.error("Error creando preferencia:", err));
  }, []);

  if (!preferenceId) return <div>Cargando pago...</div>;

  const initialization = {
    amount: 100,
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
  }  as const;

  const onSubmit = async ({ selectedPaymentMethod, formData }: any) => {
    console.log("Formulario enviado", selectedPaymentMethod, formData);
    return new Promise<void>((resolve) => resolve());
  };

  const onError = (error: any) => console.error("Error Brick:", error);
  const onReady = () => console.log("Brick listo");

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={onSubmit}
    onReady={onReady}
    onError={onError}
    />
    </Container>
  );
}
