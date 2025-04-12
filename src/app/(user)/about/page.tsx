import React from 'react';
// import Earth from '@/components/globe';
import { Sparkles } from '@/ui/sparkles';

function index() {
  return (
    <div className='mt-20'>
      <div className='h-screen overflow-hidden bg-black text-white'>
        <article className='grid gap-4 text-center relative z-10 pt-10'>
          <span className='inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]'>
           Génèse
          </span>
          <h1 className='text-4xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
            Concevoir avec une perspective globale
            <br />
            Innover en toute simplicité.
          </h1>
          <p className='text-md text-gray-400 max-w-2xl mx-auto mt-4'>
            Bienvenue sur notre plateforme dédiée à la créativité, à l'innovation et à l'excellence. Nous croyons qu’un design efficace transcende les frontières et relie les idées à travers le monde.
          </p>
        </article>
        <div className='relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]'>
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction='top'
            opacitySpeed={2}
            color='#32A7FF'
            className='absolute inset-x-0 bottom-0 h-full w-full '
          />
        </div>
      </div>

      {/* Section À propos complémentaire */}
      <section className='bg-[#0f1c35] text-white py-20 px-6 md:px-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Notre mission
          </h2>
          <p className='text-lg text-gray-300 leading-relaxed'>
            Nous nous engageons à fournir des outils numériques puissants, accessibles et conçus pour libérer la créativité de chacun. Que vous soyez designer, développeur ou entrepreneur, notre objectif est de vous offrir une plateforme qui vous permet de penser globalement et d’agir localement.
          </p>
          <button className='mt-10 bg-[#3273ff] hover:bg-[#265fcc] text-white font-semibold py-2 px-6 rounded-md transition duration-300'>
            En savoir plus
          </button>
        </div>
      </section>
    </div>
  );
}

export default index;
