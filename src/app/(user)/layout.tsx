"use client";
import * as React from "react";
import NavBar from "@/components/main/home/topbar";

export default function RootLayout(
    { children }: Readonly<{ children: React.ReactNode }>,
) {
    return (
        <>
            <NavBar />
            <main className="flex items-center justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-16 overflow-hidden">
                {children}
            </main>
        </>
    );
}
