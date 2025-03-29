"use client";
import Newsletter from "@/components/main/form/Newletter";
import HomeContent from "@/components/main/home/main";
import Plume from "@/components/main/home/welcomeRandom";
import HorizontalScroll from "@/ui/scroll";
import { useMediaQuery } from "@mui/material";
export default function Home() {
    const isMobile = useMediaQuery("(min-width: 992px)");
    return (
        <div
            className={isMobile
                ? "w-full h-full items-center justify-items-center mt-4 pb-4 gap-4 relative"
                : "w-full h-full items-center justify-items-center mt-20 pb-0 gap-8 relative"}
        >
            <Plume />
            <HomeContent />

            <div>
                <HorizontalScroll />
            </div>
            <div>
                <Newsletter />
            </div>
        </div>
    );
}
