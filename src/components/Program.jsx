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
        <div className="mb-12 overflow-hidden">
          <img
            src="./public/carousel1.jpg"
            alt="Crossfit Bullbox Team"
            className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full h-full p-6 justify-center card-hover">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Clases
          </h3>
          <p className="text-md md:text-xl lg:text-2xl text-justify text-muted-foreground">
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
    </section>
  );
};
