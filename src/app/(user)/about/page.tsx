import React from "react";
import Image from "next/image";
import MorningStar from "./star-morn.jpeg";
import Oeuvres from "@/components/main/about/perspectives";

function Index() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 gap-8 text-white mt-20 xl:mt-32">
      <div className="flex flex-col-reverse xl:flex-row-reverse w-full h-full">
        <div className="w-full xl:w-1/2 flex items-center justify-center px-6 xl:px-20 py-12">
          <article className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-block text-xs sm:text-sm border p-1 px-3 w-fit rounded-full border-[#3273ff] bg-[#0f1c35]">
              Bienvenue sur mon blog
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-tight tracking-tight">
              Gnenema Silue Bertrand Yepiechinnin
            </h1>
            <div className="text-sm sm:text-md text-gray-300 mt-4 space-y-4">
              {[
                "Étudiant en informatique et passionné par les mots, je suis l’auteur de Les perspectives de l’Harmattan, publié chez Hello Editions. J’ai décidé de créer cet espace pour partager mon univers littéraire.",
                "Ici, tu trouveras des poésies, des petites histoires, et parfois d’autres formes d’écritures, portées par mes réflexions, mes émotions et ma vision du monde.",
                "Bonne lecture, et surtout… laisse les mots te porter.",
              ].map((line, idx) => (
                <p
                  key={idx}
                  className="opacity-0 animate-fade-in-up hover:text-white hover:translate-x-1 transition-all duration-300 will-change-transform"
                  style={{
                    animationDelay: `${idx * 150}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </article>
        </div>

        <div className="w-full xl:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-auto ">
          <Image
            src={MorningStar}
            alt="Morning Star"
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-md"
          />
          <span className="pointer-events-none absolute top-0 left-[-75%] h-full w-full transform -rotate-45 bg-white/30 blur-md opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-4">
          Mes œuvres littéraires
        </h2>
        <p className="text-md text-gray-400 text-center mb-8 max-w-2xl">
          Explore mes créations littéraires : poèmes, nouvelles et récits
          inédits, porteurs de pensées profondes et d’émotions sincères.
        </p>
        <Oeuvres />
      </div>
    </div>
  );
}

export default Index;
