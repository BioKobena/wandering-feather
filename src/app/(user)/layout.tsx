"use client";
import * as React from "react";
import NavBar from "@/components/main/home/topbar";
import Footer from "@/components/main/footer/footer";
export default function RootLayout(
    { children }: Readonly<{ children: React.ReactNode }>,
) {
    return (
        <>
            <NavBar />
            <main className="sm:w-full sm:h-full sm:p-2 sm:pb-4 sm:gap-4 sm:overflow-hidden flex items-center justify-items-center min-h-screen p-4 pb-16 gap-8 overflow-hidden">
                {children}
            </main>
            <Footer />
        </>
    );
}
