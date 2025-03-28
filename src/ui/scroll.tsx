"use client";
import { motion } from "motion/react";
import { useMediaQuery } from "@mui/material";
import CardPoems from "@/components/main/cards/Card";
const HorizontalScroll = () => {
  const isMobile = useMediaQuery("(max-width: 912px)");

  return (
    <motion.section className="sticky font-semibold top-0 flex flex-col items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      <h1
        className={isMobile
          ? "text-3xl text-center text-white py-4 px-4 font-semibold tracking-tight leading-[120%]"
          : "2xl:text-7xl text-white text-6xl py-8 px-8 font-semibold text-center tracking-tight leading-[120%]"}
      >
        Découvrez le pouvoir <br /> d&apos;une plume en action
      </h1>

      <div className="flex flex-col gap-4">
        <h1
          className={isMobile
            ? `font-departure  font-(family-name:--font-karla) font-bold text-3xl relative z-10 text-center h-[70px] leading-tight text-white`
            : "font-departure  font-(family-name:--font-karla) font-bold text-8xl relative z-10 text-center h-[120px] md:h-auto leading-tight text-white"}
        >
          Les derniers poèmes
        </h1>

        <div className="w-full flex flex-row justify-center gap-5 flex-wrap p-4">
          <CardPoems />
          <CardPoems />
          <CardPoems />
          <CardPoems />
          <CardPoems />
          <CardPoems />
          <CardPoems />
          <CardPoems />
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalScroll;

// const Section2 = () => {

//   return (
//     <motion.section
//       className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
//     >
//       <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
//       <article className='container mx-auto relative z-10 '>
//         <h1 className='text-6xl leading-[100%] py-10 font-semibold  tracking-tight '>
//           Images That doesn't Make any sense <br /> but still in this section
//         </h1>
//         <div className='grid grid-cols-4 gap-4'>
//           <img
//             src='https://images.unsplash.com/photo-1717893777838-4e222311630b?w=1200&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md h-full'
//           />
//           <img
//             src='https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md'
//           />
//           <img
//             src='https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=500&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md h-full'
//           />
//           <img
//             src='https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=500&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md h-full'
//           />
//         </div>
//       </article>
//     </motion.section>
//   );
// };
