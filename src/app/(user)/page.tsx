"use client";
import HomeContent from "@/components/main/home/main";
import Plume from "@/components/main/home/welcomeRandom";
import HorizontalScroll from "@/ui/scroll";
export default function Home() {

    return (
        <div className="w-full h-full items-center justify-items-center mt-16 pb-20 gap-8">
            <Plume />
            <HomeContent />
            <HorizontalScroll />
        </div>
    );
}
