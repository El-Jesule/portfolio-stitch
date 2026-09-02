import { useState, useCallback } from "react";

const INITIAL_STATE = { name: "", email: "", message: "" };
const STATUS_IDLE = "Esperando input...";

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState(STATUS_IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFocus = useCallback((fieldName) => {
    setStatus(`Escribiendo en ${fieldName}...`);
  }, []);

  const handleBlur = useCallback(() => {
    setStatus(STATUS_IDLE);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setStatus("Procesando...");

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSuccess(true);
      setStatus("Status: 200 OK");

      setTimeout(() => {
        setFormData(INITIAL_STATE);
        setIsSuccess(false);
        setStatus(STATUS_IDLE);
      }, 3000);
    },
    []
  );

  return {
    formData,
    status,
    isSubmitting,
    isSuccess,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  };
}
