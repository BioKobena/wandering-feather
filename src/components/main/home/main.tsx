import React from "react";
import Image from "next/image";
import feather from "@/assets/images/image.png"
const HomeContent = () => {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="flex gap-4 items-center flex-col sm:flex-row p-4">
                <a
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="dark:invert"
                        src={feather}
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                    />
                    Nos histoires
                </a>
                <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                    rel="noopener noreferrer"
                >
                    Lisez le futur
                </a>
            </div>
        </main>
    );
};

export default HomeContent;
