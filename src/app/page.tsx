import Image from "next/image";
import Logo from "./designs/Logo";
import Header from "./sections/Header";
import Card from "./components/Card";
import Products from "./sections/Products";
import Others from "./sections/Others";
import getPersonImage from "./util/getPersonImage";
import SectionHeading from "./components/SectionHeading";
import Avatar from "./components/Avatar";
import ImageCard from "./components/ImageCard";
import Footer from "./sections/Footer";
import Callout from "./sections/Callout";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Products />
      <Others />
      <Callout />
      <Footer />
    </main>
  );
}
