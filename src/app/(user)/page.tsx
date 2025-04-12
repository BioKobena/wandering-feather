"use client";
import Newsletter from "@/components/main/form/Newletter";
import HomeContent from "@/components/main/home/main";
import Plume from "@/components/main/home/welcomeRandom";
import HorizontalScroll from "@/ui/scroll";
export default function Home() {
    return (
        <div className="w-full h-full items-center justify-items-center mt-20 pb-0 gap-8 relative 
             sm:mt-4 sm:pb-4 sm:gap-4">
            <Plume />
            <HomeContent />
            <HorizontalScroll />
            <Newsletter />
        </div>
    );
}
