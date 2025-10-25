"use client";
import { motion } from 'framer-motion';

const items = [
  'Авторская выпечка',
  'Изысканные ингредиенты',
  'Просторные залы для мероприятий'
];

export default function Features() {
  return (
    <section className="py-20 container">
      <h2 className="font-heading text-3xl mb-8">Особенности</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="p-6 border rounded">
            <h4 className="font-semibold">{t}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
