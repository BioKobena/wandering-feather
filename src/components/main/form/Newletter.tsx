import * as React from "react";

export default function Newsletter() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState("");

    console.log(emailErrorMessage, nameErrorMessage, nameError, emailError);

    const validateInputs = () => {
        const email = document.getElementById("email") as HTMLInputElement;

        const name = document.getElementById("name") as HTMLInputElement;

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage("Entrez votre email...");
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage("");
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage("Votre nom est requis...");
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage("");
        }

        return isValid;
    };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     if (nameError || emailError) {
    //         event.preventDefault();
    //         return;
    //     }
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         name: data.get("name"),
    //         lastName: data.get("lastName"),
    //         email: data.get("email"),
    //     });
    // };


    return (
        <div className="w-xl flex flex-col justify-center items-center">
           
            <h1 className="font-bold lg:text-4xl text-3xl relative text-center lg:p-1 p-0 lg:h-[80px] xl:h-[70px] h-[50px] md:h-auto leading-tight text-white border-b-2 lg:border-b-4 border-slate-200 lg:w-full m-4 hover:bg-white hover:border-t-2 hover:border-slate-200 hover:text-black rounded-xs transition duration-550">
                Souscrire aux newsletter
            </h1>

            <div className="w-full hover-button relative flex items-center overflow-hidden  text-white hover:text-black md:text-2xl mt-4">
                <form className="z-2 w-full h-full flex flex-col justify-center items-center gap-4">
                    <div className="lg:w-full lg:m-2 sm:m-2">
                        <input
                            color="white"
                            type="email"
                            name="newsletter_email"
                            className="w-full bg-transparent py-3 px-6 border-2 border-white rounded-xs"
                            placeholder="Nom & prénoms"
                        />
                    </div>
                    <div className="lg:w-full lg:m-2 sm:m-2">
                        <input
                            type="email"
                            name="newsletter_email"
                            className="w-full bg-transparent py-3 px-6 border-2 border-white rounded-xs"
                            placeholder="Email"
                        />
                    </div>
                    <div className="text-center mt-1">
                        <button
                            onClick={validateInputs}
                            className="px-6 py-2 w-xs bg-black dark:bg-gray-800 text-white rounded-full hover:bg-gray-500 transition cursor-pointer"
                        >
                            S&apos;inscrire
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
