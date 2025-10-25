"use client";
import Hero from '../components/Hero';
import BannerSlider from '../components/BannerSlider';
import Locations from '../components/Locations';
import Features from '../components/Features';

export default function Home() {
  return (
    <>
      <Hero />
      <BannerSlider />
      <Locations />
      <Features />
    </>
  );
}
