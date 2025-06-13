import { useEffect, useState } from "react";

export const BackEffects = () => {
  const [backGround, setBackground] = useState([]);

  useEffect(() => {
    generateBackground();
  }, []);

  const generateBackground = () => {
    const numberOfItems = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newBackground = [];

    for (let i = 0; i < numberOfItems; i++) {
      if (i / 2 === 0) {
        newBackground.push({
          id: i,
          size: 24,
          image: "/dumbbell.png",
          css: "rotate-45 w-[24px] h-[24px] bg-background-body",
        });
      }
    }
    setBackground(newBackground);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pinter-events-none z-0">
      {backGround.map((back) => (
        <div key={back.id} className={back.css}/>
      ))}
    </div>
  );
};
