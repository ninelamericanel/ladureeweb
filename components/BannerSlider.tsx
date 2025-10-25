"use client";
export default function BannerSlider() {
  return (
    <section className="py-12 container">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="h-48 rounded-lg bg-pinkish flex items-center justify-center">Баннер 1</div>
        <div className="h-48 rounded-lg bg-pinkish flex items-center justify-center">Баннер 2</div>
        <div className="h-48 rounded-lg bg-pinkish flex items-center justify-center">Баннер 3</div>
      </div>
    </section>
  );
}
