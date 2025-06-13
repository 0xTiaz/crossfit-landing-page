import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contactanos = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message, I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-x-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contactanos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tienes algun proyecto, entrenamiento o evento en mente?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 card-hover p-6">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informacion de contacto
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Email
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telefono</h4>
                  <a
                    href="tel:+XXXXXXXXXXX"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +XXXXXXXXXXX
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Ubicacion</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Conchali, Santiago, Chile
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connecta con nosotros</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Facebook />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shaddow-xs"
            onSubmit={handleSumbit}
          >
            <h3 className="text-2xl font-semibold mb-6">Envianos un mensaje</h3>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="nombre">Tu Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Tu correo
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john.doe@gmail.cl"
                />
              </div>
              <div>
                <label htmlFor="message"></label>
                <textarea
                  name="nessage"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tu pregunta, propuesta, evento o colaboracion"
                ></textarea>
              </div>
              <button
                type="sumbit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
