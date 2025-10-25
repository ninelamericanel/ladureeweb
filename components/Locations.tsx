"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Locations() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.loc-img');

      items.forEach((el: any) => {
        gsap.fromTo(el, { scale: 1 }, {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
          }
        });
      });

      gsap.fromTo('.loc-card', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 container">
      <h2 className="font-heading text-3xl mb-8">Наши локации</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="loc-card p-4">
          <div className="overflow-hidden rounded-md">
            <img className="loc-img w-full h-64 object-cover" src="/images/location1.jpg" alt="loc1" />
          </div>
          <h3 className="mt-4 font-semibold">La Durée — Champs</h3>
          <div className="mt-2 flex gap-3">
            <button className="px-4 py-2 border rounded">Адрес</button>
            <button className="px-4 py-2 bg-pinkish rounded">Забронировать</button>
          </div>
        </div>

        <div className="loc-card p-4">
          <div className="overflow-hidden rounded-md">
            <img className="loc-img w-full h-64 object-cover" src="/images/location2.jpg" alt="loc2" />
          </div>
          <h3 className="mt-4 font-semibold">La Durée — Montmartre</h3>
          <div className="mt-2 flex gap-3">
            <button className="px-4 py-2 border rounded">Адрес</button>
            <button className="px-4 py-2 bg-pinkish rounded">Забронировать</button>
          </div>
        </div>
      </div>
    </section>
  );
}
