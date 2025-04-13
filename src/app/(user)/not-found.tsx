import React from "react";
import Image from "next/image";
import plumeNot from "@/assets/images/plume_egare.png";
const NotFound = () => {
    return (
        <div>
            <h1 className="text-white">404: Page Not Found</h1>
            <Image
                src={plumeNot}
                alt="Not Found"
                width={500}
                height={500}
                className="object-cover rounded-md"
            />
        </div>
    );
};

export default NotFound;
