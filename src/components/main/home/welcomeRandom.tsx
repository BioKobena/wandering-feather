import React, { Suspense } from "react";
import { RandomizedTextEffect } from "@/ui/text-randomized";
import { useMediaQuery } from "@mui/material";
function Plume() {
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <>
      <div
        className={isMobile ? "py-6 pb-6 rounded-md" : "py-40 pb-10 rounded-md"}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <h1
            className={isMobile
              ? `font-departure  font-(family-name:--font-karla) font-bold text-3xl relative z-1 text-center h-[70px] leading-tight dark:from-[#FFFFFF] dark:to-[#4B4B4B]`
              : "font-departure  font-(family-name:--font-karla) font-bold text-8xl relative z-10 text-center h-[120px] md:h-auto leading-tight dark:from-[#FFFFFF] dark:to-[#4B4B4B]"}
          >
            <RandomizedTextEffect text="La plume vagabonde..." />
          </h1>
        </Suspense>
      </div>
    </>
  );
}

export default Plume;
