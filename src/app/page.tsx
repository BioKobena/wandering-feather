import Image from "next/image";
import footer from "@/components/main/footer/footer";
import Footer from "@/components/main/footer/footer";
import NavBar from "@/components/main/home/topbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      {/* <about */}
      <Footer />
    </div>
  );
}
