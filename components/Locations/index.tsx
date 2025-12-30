"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

import location1 from "../../src/assets/location1.png";
import location2 from "../../src/assets/location2.png";
import Button from "../Button";
import { useScroll, useTransform, motion } from "framer-motion";

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
  const containerRef = useRef(null);
  const lengthBlock = data.length;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const images = data.map((item, index) => {
    const clipHeight = useTransform(
      scrollYProgress,
      [index / lengthBlock, (index + 1) / lengthBlock],
      ["0%", "100%"]
    );

    const yOffset = useTransform(
      scrollYProgress,
      [0, 1],
      [`${index * 100}vh`, `${(index - 1) * -100}vh`]
    );

    return (
      <motion.div
        key={item.id}
        style={{
          y: yOffset,
          clipPath: `inset(0 0 ${clipHeight} 0)`,
          zIndex: index - 1,
          position: "absolute",
        }}
      >
        <Image src={item.img} alt={item.title} className={styles.img} />
        <div className="">
          <motion.p>{item.title}</motion.p>
          <motion.div>{item.description}</motion.div>
        </div>
      </motion.div>
    );
  });
  return (
    <section
      ref={containerRef}
      className={styles.section}
      style={{ height: `${lengthBlock * 100}vh` }}
    >
      {images}
    </section>
  );
};

export default Location;
