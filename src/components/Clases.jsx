import { ChevronFirstIcon, CircleChevronRight } from "lucide-react";

export const Clases = () => {
  return (
    <section id="plans" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Planes y <span className="text-primary"> Horarios</span>
        </h2>
        <div className="flex p-4 space-x-8 gap-6 justify-around">
          <div className="p-4 w-100 h-100 justify-center card-hover rounded-lg">
            <h3 className="text-3xl md:text-4xl">Horarios</h3>
            <ul className="h-full flex flex-col justify-center">
              <li>Lunes a Viernes - 6:30 hrs.</li>
              <li>Lunes a Viernes - 19:00 y 20:00 hrs.</li>
            </ul>
          </div>
          <div className=" p-4 w-100 h-100 justify-center card-hover bg-primary rounded-lg">
            <h3 className="text-3xl md:text-4xl">Planes</h3>
            <ul className="h-full flex flex-col justify-center text-white">
                <li className="flex text-center">
                    <CircleChevronRight /> 12 clases a la semana - $73.000
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
