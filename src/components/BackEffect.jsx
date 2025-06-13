import { useEffect, useState } from "react";

export const BackEffects = () => {
  const [backgroundPattern, setBackgroundPattern] = useState([]);

  useEffect(() => {
    generateBackgroundPattern();

    const handleResize = () => {
      generateBackgroundPattern();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateBackgroundPattern = () => {
    const numberOfImg = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newPattern = [];
    for (let i = 0; i < numberOfImg; i++) {
      //if (i % 2 === 0) {
        newPattern.push({
          id: i,
          imgUrl: "./public/img/dumbbell.png",
          size: 24,
        });
      //} else {
        // newPattern.push({
        //   id: i,
        //   img: "./public/img/logo.png",
        //   size: 2,
        // });
    //}
    }
    setBackgroundPattern(newPattern)
  };

  return (
    <div className="fixed inset-0 overflow-hidden pinter-events-none z-0">
        {backgroundPattern.map((img) => (
            <div key={img.id} className="star animate-pulse-subtle" style={{
                width: `${img.size}px`,
                height: `${img.size}px`,
                backgroundImage: img.imgUrl
            }}/>
        ))}
    </div>
  );
};
