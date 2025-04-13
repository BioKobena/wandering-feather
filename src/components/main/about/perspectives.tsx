import Image from "next/image";
import React from "react";
import PerspectivesHarmattan from "./harmattan.png";
import Link from "next/link";
import fnac from "./fnac.png";
import pointLire from "./point-lire.png"
function Oeuvres() {
    return (
        <section className="w-full px-4 py-4 flex justify-center">
            <div className="max-w-7xl w-full flex flex-col-reverse xl:flex-row-reverse items-center gap-12">
                <div className="w-full xl:w-1/2 max-w-[500px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
                    <div className="relative text-center px-0 py-16 rounded-2xl bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] h-1/3 mx-auto">
                        <Image
                            src={PerspectivesHarmattan}
                            alt="Les perspectives de l’harmattan"
                            width={100}
                            height={100}
                            className="mx-auto w-[85%]"
                        />
                        <h1 className="text-xl font-karla tracking-tight text-white mt-4">
                            Les perspectives de l&apos;harmattan
                        </h1>
                        <div className="flex justify-items-center mt-4 text-start items-center gap-8 mx-8 text-base pt-2  text-gray-300 capitalize">
                            Disponible sur :
                            <Link
                                target="_blank"
                                href="https://www.fnac.com/a20736306/Gnenema-Yepiechinnin-Bertrand-Silue-Les-perspectives-de-l-harmattan"
                            >
                                <Image
                                    className="mx-auto"
                                    alt="Fnac Les perspectives de l’harmattan"
                                    src={fnac}
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <Link
                                target="_blank"
                                href="https://www.pointlire.fr/livre/9782384623617-les-perspectives-de-l-harmattan-gnenema-yepiechinnin-bertrand-silue/"
                            >
                                <Image
                                    className="mx-auto"
                                    alt="Fnac Les perspectives de l’harmattan"
                                    src={pointLire}
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full xl:w-1/2 text-white space-y-4">
                    <h2
                        className="text-2xl sm:text-3xl font-bold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent opacity-0 animate-fade-in-up"
                        style={{
                            animationDelay: "200ms",
                            animationFillMode: "forwards",
                        }}
                    >
                        Un voyage poétique captivant
                    </h2>

                    <p
                        className="text-sm sm:text-base text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{
                            animationDelay: "400ms",
                            animationFillMode: "forwards",
                        }}
                    >
                        À travers des vers poignants, ce recueil de poésie
                        transporte le lecteur dans un monde d&apos;émotions, de
                        questionnements et de réflexions profondes. Du doux
                        murmure de l&apos;amour à la mélancolie des adieux, en
                        passant par les défis de la vie quotidienne et les
                        critiques sociales, l&apos;auteur explore une palette
                        variée de thèmes universels.
                    </p>

                    <p
                        className="text-sm sm:text-base text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
                        style={{
                            animationDelay: "600ms",
                            animationFillMode: "forwards",
                        }}
                    >
                        Les poèmes, empreints de sensibilité et
                        d&apos;authenticité, témoignent d&apos;une introspection
                        profonde et offrent une vision intime du vécu. Un voyage
                        poétique captivant qui célèbre la complexité de
                        l&apos;existence et invite le lecteur à se perdre dans
                        les méandres de l&apos;âme humaine.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Oeuvres;
