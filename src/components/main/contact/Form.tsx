"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
export function Contacts() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Envoyez");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !phone || !email || !message) {
      toast.error("Veuillez remplir tous les champs 👀");
      return;
    }

    setButtonText("Envoi en cours...");

    const serviceID = "service_vv25bhs";
    const templateID = "template_wdd95lg";

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, "pF-hBpUlU8wM00yaI")
      .then(() => {
        setButtonText("Envoyez");
        toast.success("Votre message a été envoyé avec succès 🥳");
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      })
      .catch((err) => {
        setButtonText("Envoyez");
        toast.error(`Une erreur s'est produite : ${err.text}`);
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 md:p-8 shadow-input z-0 relative bg-gradient-to-br from-[#100000] via-[#100000] to-[#0f172a] text-white rounded-xl">
      <h2 className="font-bold text-3xl font-karla text-center text-neutral-800 dark:text-neutral-200">
        CONTACTEZ-NOUS
      </h2>
      <form
        className="my-4 z-0 p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mb-4">
          <div className="relative w-full">
            <input
              id="firstname"
              name="name"
              type="text"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer px-3 pt-5 pb-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-neutral-900 dark:text-white"
            />
            <label
              htmlFor="firstname"
              className="absolute text-sm text-neutral-400 dark:text-neutral-300 left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 dark:peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-500"
            >
              Nom & Prénoms
            </label>
          </div>

          <div className="relative w-full">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="peer px-3 pt-5 pb-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-neutral-900 dark:text-white"
            />
            <label
              htmlFor="phone"
              className="absolute text-sm text-neutral-400 dark:text-neutral-300 left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 dark:peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-500"
            >
              Numéro de téléphone
            </label>
          </div>
        </div>

        <div className="relative w-full mb-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer px-3 pt-5 pb-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-neutral-900 dark:text-white"
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-neutral-400 dark:text-neutral-300 left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 dark:peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-500"
          >
            Email
          </label>
        </div>
        <div className="relative w-full mb-4">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer px-3 pt-5 pb-2 w-full border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-neutral-900 dark:text-white"
          />
          <label
            htmlFor="message"
            className="absolute text-sm text-neutral-400 dark:text-neutral-300 left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 dark:peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-500"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br cursor-pointer relative group/btn from-black dark:from-white dark:to-zinc-300 to-neutral-600 block dark:bg-zinc-200 w-full text-black dark:text-black rounded-xs h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          {buttonText}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      <ToastContainer />
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);
