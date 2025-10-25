"use client";
import { motion } from 'framer-motion';

export default function ModalBooking({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-6 rounded-lg z-10 w-full max-w-md">
        <h3 className="font-semibold">Забронировать столик</h3>
        <form className="mt-4 grid gap-3">
          <input placeholder="Имя" className="border p-2 rounded" />
          <input placeholder="Телефон" className="border p-2 rounded" />
          <button className="px-4 py-2 bg-pinkish rounded">Отправить</button>
        </form>
      </motion.div>
    </div>
  );
}
