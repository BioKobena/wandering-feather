"use client";
import { Spinner } from "@heroui/react";
export default function Loading() {
    return (
        <div className="w-full h-full absolute top-[50%] left-[50%]">
            <Spinner color="primary" />
        </div>
    );
}
