import React from "react";
import { Avatar, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
// import iconPoems from "@/assets/icons/icon-poems.png";
interface PostProps {
    title: string;
    content: string;
    img?: string;
}

// Avoid to let unsed code because during the pnpm build you will be hungry 😂 @BioKobena remind it

const CardPoems = ({ title, content, img }: PostProps) => {
    //@BioKobena unsed props for my code, I will come back on it
    // const CardPoems = () => {
    //const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="max-w-[300px] border">
            <CardHeader className="justify-between">
                <div className="flex gap-5  p-1">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src={img}
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                            {title}
                        </h4>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {content}
                </p>
            </CardBody>
            <CardFooter className="justify-center p-3">
                <div className="text-center mt-5">
                    <button className="px-6 py-2 bg-black dark:bg-gray-800 text-white rounded-full hover:bg-gray-500 transition cursor-pointer">
                        Voir plus
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CardPoems;
