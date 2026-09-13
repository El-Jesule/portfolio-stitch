import { useState, useCallback, useEffect, useRef } from "react";

const INITIAL_STATE = { name: "", email: "", message: "" };
const STATUS_IDLE = "Esperando tu mensaje...";
const STATUS_SENDING = "Enviando mensaje...";
const STATUS_SUCCESS = "Mensaje enviado correctamente";
const STATUS_ERROR = "Error al enviar. Inténtalo de nuevo.";
const STATUS_INVALID = "Completa nombre, email válido y mensaje.";
const RESET_FORM_DELAY_MS = 3000;

// Webhook de Make (Custom Webhook -> Google Sheets + Gemini + Gmail).
// Se puede sobreescribir con VITE_MAKE_WEBHOOK_URL en Vercel/.env.
const MAKE_WEBHOOK_URL =
  import.meta.env.VITE_MAKE_WEBHOOK_URL ||
  "https://hook.eu1.make.com/q0wgkyamcsulfac25wce87bahvjsen27";

// No backend available: the submit is simulated locally with a delay.
export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState(STATUS_IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const name = formData.name.trim();
      const email = formData.email.trim();
      const message = formData.message.trim();

      if (!name || !email.includes("@") || message.length < 10) {
        setIsError(true);
        setIsSuccess(false);
        setStatus(STATUS_INVALID);
        return;
      }

      setIsSubmitting(true);
      setIsError(false);
      setStatus(STATUS_SENDING);

      try {
        const response = await fetch(MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        if (!isMountedRef.current) return;
        setIsSubmitting(false);
        setIsSuccess(true);
        setStatus(STATUS_SUCCESS);

        setTimeout(() => {
          if (!isMountedRef.current) return;
          setFormData(INITIAL_STATE);
          setIsSuccess(false);
          setStatus(STATUS_IDLE);
        }, RESET_FORM_DELAY_MS);
      } catch {
        if (!isMountedRef.current) return;
        setIsSubmitting(false);
        setIsSuccess(false);
        setIsError(true);
        setStatus(STATUS_ERROR);
      }
    },
    [formData],
  );

  return {
    formData,
    status,
    isSubmitting,
    isSuccess,
    isError,
    handleChange,
    handleSubmit,
  };
}
