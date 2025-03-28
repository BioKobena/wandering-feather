import React from "react";
import { Avatar, Card, CardBody, CardHeader } from "@heroui/react";

// type Props = {
//     label?: string;
//     theme?: "primary";
//     onPress?: () => void;
// };

// const CardPoems = ({ label, theme, onPress }: Props) => { @BioKobena unsed props for my code, I will come back on it
const CardPoems = () => {
    //const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="max-w-[300px] border">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://heroui.com/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                            Zoey Lang
                        </h4>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure! Frontend developer and UI/UX enthusiast.
                    Join me on this coding adventure! Frontend developer and
                    UI/UX enthusiast. Join me on this coding adventure! Frontend
                    developer and UI/UX enthusiast. Join me on this coding
                    adventure!
                </p>
            </CardBody>
        </Card>
    );
};

export default CardPoems;
