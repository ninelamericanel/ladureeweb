"use client";
import { motion } from 'framer-motion';
import Button from './Button';

const data = {
  h1: 'Laduree Russia',
  desc: 'Ресторан Ladur&eacute;e &agrave;-la Russe',
  buttonDesc: 'Перейти в магазин',
  link: '/shop',
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" style={{ background: 'url(/images/hero.jpg) center/cover no-repeat' }}>
      <div className="container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>{data.h1}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>{data.desc}</motion.p>
        <Button type='link' href={data.link} desc={data.buttonDesc}></Button>
      </div>
    </section>
  );
}
