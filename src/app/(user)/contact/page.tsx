import { Contacts } from "@/components/main/contact/Form";
import React from "react";


const ContactPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 gap-8 text-white mt-0">
      <div className="fixed inset-0 -z-10 animate-gradient-fade bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#1e293b] opacity-30 blur-sm" />
      <Contacts />
    </div>
  );
};

export default ContactPage;
