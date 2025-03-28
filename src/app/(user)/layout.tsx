"use client";
import * as React from "react";
import NavBar from "@/components/main/home/topbar";
import { useMediaQuery } from "@mui/material";
import Footer from "@/components/main/footer/footer";
export default function RootLayout(
    { children }: Readonly<{ children: React.ReactNode }>,
) {
    const isMobile = useMediaQuery("(max-width: 992px)");
    return (
        <>
            <NavBar />
            <main
                className={isMobile
                    ? "w-full h-full flex p-2 pb-4 gap-4 overflow-hidden"
                    : "flex items-center justify-items-center min-h-screen p-4 pb-16 gap-8 overflow-hidden"}
            >
                {children}
            </main>
            <Footer />
        </>
    );
}
