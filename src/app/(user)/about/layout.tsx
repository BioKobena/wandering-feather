import React from "react";
import About from "./page";

export default function RootLayout(
    { children }: Readonly<{ children: React.ReactNode }>,
) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-8">
            {children}
        </div>
    );
}
