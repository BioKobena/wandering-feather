import React, { Suspense } from "react";
import { RandomizedTextEffect } from "@/ui/text-randomized";
import { Skeleton } from "@mui/material";
function Plume() {
  return (
    <>
      <div className="py-6 pb-6 sm:py-8 sm:pb-8 md:py-16 md:pb-16 lg:py-40 lg:pb-10 rounded-md">
        <h1
          className={`
    font-departure 
    font-karla 
    font-bold 
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 
    relative z-1
    text-center 
    h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] md:h-auto 
    leading-tight 
    dark:from-[#FFFFFF] dark:to-[#4B4B4B]
  `}
        >
          <Suspense
            fallback={
              <Skeleton
                variant="text"
                width="100%"
                height={20}
                sx={{ bgcolor: "grey.700" }}
              />
            }
          >
            <RandomizedTextEffect text="La plume vagabonde..." />
          </Suspense>
        </h1>
      </div>
    </>
  );
}

export default Plume;
