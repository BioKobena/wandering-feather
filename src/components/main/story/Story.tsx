import React from "react";
import CardPoems from "../cards/Card";
import { storyData } from "./data";

const Story = () => {
    return (
        <div className="w-full flex flex-row justify-center gap-5 flex-wrap p-4">
            {storyData.map((storyData) => {
                return (
                    <CardPoems
                        key={storyData.id}
                        title={storyData.title}
                        content={storyData.content}
                        img="https://img.freepik.com/free-vector/modern-people-doing-cultural-activities_23-2148607815.jpg?t=st=1743260446~exp=1743264046~hmac=fe23c4a7338b00db951e9821c9fbca820bcdea916fbb38ca613daea3ef85f8d8&w=2000"
                    />
                );
            })}
        </div>
    );
};

export default Story;
