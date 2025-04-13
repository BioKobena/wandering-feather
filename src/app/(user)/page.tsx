"use client";
import Newsletter from "@/components/main/form/Newletter";
import HomeContent from "@/components/main/home/main";
import Plume from "@/components/main/home/welcomeRandom";
import HorizontalScroll from "@/ui/scroll";
export default function Home() {
    return (
        <div className="w-full h-full items-center justify-items-center mt-20 pb-0 gap-8 relative 
             sm:mt-4 sm:pb-4 sm:gap-4">
            <div className="fixed inset-0 -z-10 animate-gradient-fade bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#1e293b] opacity-30 blur-sm" />

            <Plume />
            <HomeContent />
            <HorizontalScroll />
            <Newsletter />
        </div>
    );
}
