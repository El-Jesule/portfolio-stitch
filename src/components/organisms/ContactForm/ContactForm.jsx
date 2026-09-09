import { useContactForm } from "../../../hooks/useContactForm.js";
import { CONTACT_LINKS } from "../../../constants/navigation.js";
import { Button } from "../../atoms/Button/Button.jsx";
import { Card } from "../../atoms/Card/Card.jsx";
import { Input } from "../../atoms/Input/Input.jsx";
import { Textarea } from "../../atoms/Textarea/Textarea.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function ContactForm() {
  const { formData, status, isSubmitting, isSuccess, handleChange, handleSubmit } =
    useContactForm();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Iniciemos una <span className="text-accent light:text-inverse-primary">conversación.</span>
          </h1>
          <p className="text-lg leading-6 text-on-surface-variant max-w-md">
            ¿Tienes un proyecto en mente, una oportunidad de colaboración, o simplemente quieres charlar
            sobre desarrollo web y tecnología? Envíame un mensaje.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-xl font-semibold text-on-surface">Conecta conmigo</h3>
          <div className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-surface-variant hover:text-accent transition-colors group"
              >
                <Icon name={link.icon} />
                <span className="font-mono text-sm group-hover:underline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <Card className="rounded-lg p-6 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-5 light:opacity-[0.08] blur-[100px] pointer-events-none" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10" noValidate>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <Input
                  label="Nombre"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Textarea
              label="Mensaje"
              id="message"
              name="message"
              placeholder="¿En qué puedo ayudarte?"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />

            <div className="pt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-on-surface-variant opacity-50">{status}</span>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={isSuccess ? "bg-emerald-600 hover:bg-emerald-700 border-emerald-600" : ""}
              >
                {isSubmitting ? "Enviando..." : isSuccess ? "Mensaje enviado" : "Enviar mensaje"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
