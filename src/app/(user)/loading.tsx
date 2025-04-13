"use client";
import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress color="primary" />
    </div>
  );
}
