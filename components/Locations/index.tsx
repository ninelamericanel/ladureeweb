"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
import styles from './index.module.scss';

import location1 from '../../src/assets/location1.png';
import location2 from '../../src/assets/location2.png';

const data = [
  {
    id: 'block1', title: 'Ресторан Ladurée à-la Russe на Никольской', description: 'Интерьер La Durée вдохновлён театральной эстетикой «Русских сезонов» Сергея Дягилева и эскизами Льва Бакста. Французская лёгкость и русское вдохновение сплетаются здесь в пространстве, где каждый десерт — маленькое представление.', img: location1
  },
  {id: 'block2', title: 'Бутик на Малой Бронной', description: '', img: location2}
]

export default function Locations() {
  const block2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const block2 = block2Ref.current;
    gsap.to(block2, {
      scrollTrigger: {
        trigger: block2,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: '-100%',
      duration: 1,
      ease: 'none',
    });

  }, []);


  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const items = gsap.utils.toArray('.img');

  //     items.forEach((el: any) => {
  //       gsap.fromTo(el, { scale: 1 }, {
  //         scale: 1.15,
  //         ease: 'none',
  //         scrollTrigger: {
  //           trigger: el,
  //           start: 'top 80%',
  //           end: 'bottom 20%',
  //           scrub: true
  //         }
  //       });
  //     });

  //     gsap.fromTo('.loc-card', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } });
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);


  useEffect(() => {}, [])

  const content = data.map((item) => {
    return (
      <div className={styles.containerBg} ref={item.id === 'block2' ? block2Ref : undefined}>
<Image src={item.img}
        className={`${styles.bg} ${styles[item.id]}`}
        alt="macarons background"
        width={100}
        height={100}
        sizes="100vw" />
      </div>
)
  })

  return (
    <section className={styles.sections}>
      <div className={styles.container}>
      {content}
      </div>
    </section>
  );
}
