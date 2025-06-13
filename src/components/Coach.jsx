export const Coach = () => {
  const coach = [
    {
      nombre: "Michael",
      apellido: "Belmar",
      apodo: "michel",
      edad: "",
      posicion: "",
      objetivo: "",
      perfil: "./public/static/images/coachmichel.jpg",
    },
    {
      nombre: "Reynaldo",
      apellido: "Garces",
      apodo: "reyna",
      edad: "",
      posicion: "",
      objetivo: "",
      perfil: "./public/static/images/coachreyna.jpg",
    },
    {
      nombre: "Guillermo",
      apellido: "A",
      apodo: "memeiro",
      edad: "",
      posicion: "",
      objetivo: "",
      perfil: "./public/static/images/coachmemo.jpg",
    },
  ];
  return (
    <section id="coach" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text=3xl md:text-4xl font-bold mb-4 text-center">
          Nuestros <span className="text-primary">Profesores</span>
        </h2>
        <div className="flex justify-center gap-2">
          {coach.map((coach, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover min-w-auto"
            >
              <img src={coach.perfil} alt="crossfit coach" />
              <p className="text-secondary font-medium">
                Mi nombre es {coach.nombre}{" "}
                <span className="text-primary">{coach.apellido}</span>, "
                {coach.apodo}", tengo {coach.edad}, con {coach.experiencia} en
                crossfit,
                {coach.objetivo}. Asi que te invito a participar de una clase
                prueba.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
