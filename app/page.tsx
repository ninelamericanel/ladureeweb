"use client";
import Hero from "../components/Hero/Hero";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import Locations from "../components/Locations";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <BannerSlider />
      <Locations />
      <Locations />
      <Locations />
      <Features />
    </>
  );
}
