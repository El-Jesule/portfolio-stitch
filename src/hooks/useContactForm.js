import { useState, useCallback, useEffect, useRef } from "react";

const INITIAL_STATE = { name: "", email: "", message: "" };
const STATUS_IDLE = "Esperando tu mensaje...";
const STATUS_SENDING = "Enviando mensaje...";
const STATUS_SUCCESS = "Mensaje enviado correctamente";
const FAKE_SUBMIT_DELAY_MS = 1500;
const RESET_FORM_DELAY_MS = 3000;

// No backend available: the submit is simulated locally with a delay.
export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState(STATUS_IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(STATUS_SENDING);

    await new Promise((resolve) => setTimeout(resolve, FAKE_SUBMIT_DELAY_MS));

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
  }, []);

  return {
    formData,
    status,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  };
}
