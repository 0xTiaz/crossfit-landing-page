import { ArrowDown } from "lucide-react";

export const Banner = () => {

  return (
    <section id="cross" className="relative min-h-screen flex items-center">
      <div className="container h-150 flex items-center p-6">
        <div className="max-w-screen flex justify-around">
          <div className="flex justify-center overflow-hidden w-100 h-100">
            <img
              src="./public/static/images/logo.png"
              alt=""
              className="shaddow-xs object-cover transition-transform duration-500 group-hover:scale-110 opacity-0 animate-fade-in"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-start opacity-0 animate-fade-in-delay-1">
            Somos
            <span className="text-primary font-bold"> Bullbox 365</span>
          </h1>
          <p className="text-secondary fond-normal text-2xl text-start opacity-0 animate-fade-in-delay-2">
            Un centro de crossfit, en donde utilizamos las tecnicas optimas de
            aprendizaje para la mecanizacion de diferentes ejercicios.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

// relative min-h-screen flex items-center justify-center px-4
// bg-linear-to-br from-primary to-secondary
