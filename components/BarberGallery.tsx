// components/BarberGallery.tsx
import Image from "next/image";

export default function BarberGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="p-6 bg-brand-surface border border-brand-border rounded-xl text-center">
        <p className="text-sm text-brand-text/40 italic">
          No lookbook photos uploaded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative aspect-square bg-brand-surface border border-brand-border rounded-xl overflow-hidden group transition-all duration-300 hover:border-brand-accent/30"
        >
          <Image
            src={src}
            alt="Recent haircut cut lookbook portfolio style"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
