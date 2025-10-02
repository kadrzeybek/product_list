import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";


const COLORS = {
  yellow: "#E6CA97",
  rose: "#D9D9D9",
  white: "#E1A4A9",
  };

  function ColorDot({ colorKey, selected, onClick }) {
    return (
    <button
    type="button"
    onClick={onClick}
    className={`relative w-6 h-6 rounded-full ring-2 transition focus:outline-none focus:ring-blue-500 focus:ring-offset-2 ${
    selected ? "ring-blue-500 ring-offset-2" : "ring-transparent"
    }`}
    >
    <span
    className="absolute inset-0 rounded-full"
    style={{ backgroundColor: COLORS[colorKey] }}
    />
    </button>
    
    );
    }

    // --- Star UI ---
    function Star({ filled, className = "" }) {
      return (
        <svg
          viewBox="0 0 24 24"
          className={`block w-5 h-5 ${className}`}
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.166L12 18.897l-7.335 3.866 1.401-8.166L.132 9.21l8.2-1.192z" />
        </svg>
      );
    }
    
    export function StarRating({ value = 0, max = 5 }) {
      const clamped = Math.max(0, Math.min(max, value));
    
      return (
        <div
          className="inline-flex items-center gap-1 leading-none"
          aria-label={`${clamped.toFixed(1)} / ${max} yıldız`}
        >
          {Array.from({ length: max }).map((_, i) => {
            // Bu yıldızın doluluk oranı: 0..1
            const fill = Math.max(0, Math.min(1, clamped - i));
            const fillPct = `${fill * 100}%`;
    
            return (
              <span key={i} className="relative inline-block align-middle">
                {/* Boş yıldız (gri kontur) */}
                <Star filled={false} className="text-gray-300" />
    
                {/* Dolu yıldız üst katmanı (sadece gereken yüzde kadar görünür) */}
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: fillPct }}
                >
                  <Star filled={true} className="text-yellow-500" />
                </span>
              </span>
            );
          })}
        </div>
      );
    }
    




export default function MultiCarousel( { slides = [] } ) {

  const [selectedColors, setSelectedColors] = useState(() => slides.map(() => "yellow"));

  useEffect(() => {
    setSelectedColors(slides.map(() => "yellow"));
  }, [slides]);


  const setColor = (index, colorKey) =>
  setSelectedColors((prev) => prev.map((v, i) => (i === index ? colorKey : v)));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
        {slides.map((product, idx) => {
          const colorKey = selectedColors[idx];
          const rating5 = (product.popularityScore || 0) * 5; // 10 üzerinden 5'e indirgeme
          return (
             <div key={product.name} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_25%] px-20">
              <div className="aspect-square bg-gray-100 rounded-lg">
                <img src={product.images[colorKey]} alt={product.name} className="object-contain w-full h-full" loading="lazy"/>
              </div>
              <div className="mt-3 flex flex-col gap-1">
                <h2 className="text-[15px] font-montserrat font-medium ">{product.name}</h2>
                <p className="text-[15px] font-montserrat text-gray-500">$19.99 USD</p>
              </div>
              <div className="flex gap-2 mt-2">
                {Object.keys(product.images).map((c) => (
                  <ColorDot
                    key={c}
                    colorKey={c}
                    selected={c === colorKey}
                    onClick={() => setColor(idx, c)}
                  />
                ))}
              </div>

        <p className="mt-2 font-avenir text-[12px] capitalize">
          {colorKey} gold
        </p>
        <div>
          <StarRating value={rating5} />
          <span className="text-sm text-gray-700 tabular-nums">
          {rating5.toFixed(1)} / 5
          </span>
        </div>
      </div>
    );
  })}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canPrev}
        className="absolute left-2 top-1/3 -translate-y-1/2 text-black rounded-full shadow p-2 disabled:opacity-40"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canNext}
        className="absolute right-2 top-1/3 -translate-y-1/2 text-black rounded-full shadow p-2 disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}
