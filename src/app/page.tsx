import Image from "next/image";
import Landing from "./sections/Landing";
import Logo from "./designs/Logo";
import Header from "./components/Header";
import Card from "./components/Card";
import Products from "./sections/Products";
import Others from "./sections/Others";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Landing />
      <Products />
      <Others />
      <div className="px-16 min-h-screen">
        <div className="px-8   w-full p-4 flex flex-col gap-y-8 items-center justify-center bg-gray-100 text-black">
          <div>
            <Logo className="text-black" />
          </div>
          <div className="text-center text-3xl w-3/4 font-medium">
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again! Lisa Smith CEO Company
          </div>
        </div>
      </div>
    </main>
  );
}
