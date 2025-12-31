"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

import location1 from "../../src/assets/location1.png";
import location2 from "../../src/assets/location2.png";
import Button from "../Button";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const data = [
  {
    id: "block1",
    title: "Ресторан Ladurée à-la Russe на Никольской",
    description:
      "Интерьер La Durée вдохновлён театральной эстетикой «Русских сезонов» Сергея Дягилева и эскизами Льва Бакста. Французская лёгкость и русское вдохновение сплетаются здесь в пространстве, где каждый десерт — маленькое представление.",
    img: location1,
  },
  { id: "block2", title: "Бутик на Малой Бронной", description: "", img: location2 },
];

const Location = () => {
  return (
    <section className={styles.section}>
      <Image src={data[0].img} alt={data[0].title} fill objectFit="cover" />
      <div className={styles.content}>
        <motion.p>{data[0].description}</motion.p>
        <motion.p>{data[0].title}</motion.p>
      </div>
    </section>
  );
};

export default Location;
