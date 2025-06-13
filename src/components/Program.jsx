import { Dot, DotIcon, Dumbbell } from "lucide-react";

export const Program = () => {
  const routines = [
    { nombre: "Cardio", categoria: "Cardio" },
    { nombre: "RM", categoria: "Peso" },
    { nombre: "Tecnica", categoria: "Habilidad" },
    { nombre: "Core", categoria: "Core" },
  ];

  return (
    <section id="program" className="py-2 px-4 relative bg-background/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Nuestro <span className="text-primary">Programa</span>
        </h2>
        <div className="p-8 flex card-hover space-y-4 space-x-4 justify-around">
          <div className="overflow-hidden">
            <img
              src="./public/carousel1.jpg"
              alt="Crossfit Bullbox Team"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col w-100 justify-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Clases
            </h3>
            <p className="text-lg w-100 text-justify">
              Nuestras clases estan compuestas de bloques especificos para cada
              rutina, dentro de las cuales nos preparamos fisicamente antes de
              ejecutar el ejercicio.
            </p>
            {routines.map((clases) => (
              <div className="mt-4">
                <p className="flex text-xl">
                  <Dot /> {clases.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
