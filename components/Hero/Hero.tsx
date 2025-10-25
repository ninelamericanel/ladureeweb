"use client";
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import Button from '../Button';
import Image from 'next/image'
import bg from '../../src/assets/mainBg.png'

const data = {
  h1: 'Laduree Russia',
  desc: `Ресторан Ladur&eacute;e &agrave;-la Russe`,
  buttonDesc: 'Перейти в магазин', 
  link: '/shop',
  bg
}

export default function Hero() {
  return (
    <section className={`${styles.section}`}>
      <Image src={data.bg}
        className={styles.bg}
        alt="macarons background"
        width={100}
        height={100}
      	sizes="100vw"/>
      <div className={styles.content}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>{data.h1}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>{data.desc}</motion.p>
      </div>
      <Button theme='light' type='link' href={data.link} desc={data.buttonDesc}></Button>
    </section>
  );
}
