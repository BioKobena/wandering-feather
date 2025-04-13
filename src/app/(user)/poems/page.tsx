"use client";
import React from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";

const PoemsPage = () => {
  const [poems, setPoems] = React.useState<[]>([]);

  React.useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await axios.get("/api/poems");
        setPoems(response.data);
      } catch (error) {
        console.error("Error fetching poems:", error);
      }
    };

    fetchPoems();
  }, []);

  const skeletonCount = 5 - poems.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md">

        {poems.length < 5 &&
          [...Array(skeletonCount)].map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="p-4 bg-gray-900 rounded-md m-2 w-full"
            >
              <Skeleton
                variant="text"
                width="60%"
                height={30}
                sx={{ bgcolor: "grey.800" }}
              />
              <Skeleton
                variant="text"
                width="40%"
                height={20}
                sx={{ bgcolor: "grey.700" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PoemsPage;
