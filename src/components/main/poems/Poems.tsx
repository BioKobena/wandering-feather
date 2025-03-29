"use client";
import React from "react";
import CardPoems from "../cards/Card";
import { poemsData } from "./data";

const Poems = () => {
    return (
        <div className="w-full flex flex-row justify-center gap-5 flex-wrap p-4">
            {poemsData.map((poemsData) => {
                return (
                    <CardPoems
                        key={poemsData.id}
                        title={poemsData.title}
                        content={poemsData.content}
                        img="https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?t=st=1743259452~exp=1743263052~hmac=f763d23f991ed5586bc70b21e207fe850d9722141b2789d95dc48fd7d5208db9&w=1380"
                    />
                );
            })}
        </div>
    );
};

export default Poems;
