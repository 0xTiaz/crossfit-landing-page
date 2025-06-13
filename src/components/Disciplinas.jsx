import { Check } from "lucide-react";

const disciplinas = [
  { nombre: "Muai Thai", category: "contacto", imagen: "/carousel2.jpg", href: ""},
  { nombre: "Karate", category: "contacto", imagen: "/carousel3.jpg", href: "" },
  { nombre: "Kick Boxing", category: "contacto", imagen: "/carousel4.jpg", href: "" },
];

export const Disciplinas = () => {
  return (
    <section id="disciplines" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Otras <span className="text-primary">Disciplinas</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-sols-3 justify-center gap-2">
          {disciplinas.map((i, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover min-w-auto"
            >
                <a href={i.href}><img src={i.imagen} alt={i.nombre + " Center"} className="p-2" /></a>
              <div className="w-full h-full">
                <span className="flex justify-center items-center text-2xl font-bold">
                  {i.nombre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
