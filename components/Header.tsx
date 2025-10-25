"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.06)' : 'none' }}
      transition={{ duration: 0.25 }}
      className="fixed w-full z-50 top-0"
    >
      <div className="container flex items-center justify-between py-4">
        <div className="font-heading text-xl">La Durée</div>
        <nav className="hidden md:flex gap-6">
          <a href="/" className="hover:underline">Главная</a>
          <a href="/about" className="hover:underline">О бренде</a>
          <a href="/store" className="hover:underline">Магазин</a>
          <a href="/contacts" className="hover:underline">Контакты</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md bg-pinkish text-sm">RU / EN</button>
        </div>
      </div>
    </motion.header>
  );
}
