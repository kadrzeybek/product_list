import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {StarRating} from "./Star";
import { COLORS } from "../../constants/index";

function ColorDot ({ colorKey, selected, onClick }) {
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
      style={{ backgroundColor: COLORS[colorKey] }} />
    </button>
  );
  }

    
const MultiCarousel = ( { slides = [] } ) => {

  const [selectedColors, setSelectedColors] = useState(() => slides.map(() => "yellow"));

  useEffect(() => {
    setSelectedColors(slides.map(() => "yellow"));
  }, [slides]);

  const setColor = (index, colorKey) =>
  setSelectedColors((prev) => prev.map((v, i) => (i === index ? colorKey : v)));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="relative w-full mt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ">
        {slides.map((product, idx) => {
          const colorKey = selectedColors[idx];
          const rating = (product.popularityScore) * 5; // Gelen rating 0-1 den 0-5'e çevrildi
          return (
            
             <div key={product.name} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_25%] px-20">
              <div className="aspect-square bg-gray-100 rounded-lg">
                <img src={product.images[colorKey]} alt={product.name} className="object-contain w-full h-full" loading="lazy"/>
              </div>
              <div className="mt-3 flex flex-col gap-1">
                <h2 className="text-[15px] font-montserrat font-medium ">{product.name}</h2>
                <p className="text-[15px] font-montserrat text-gray-500">
                  ${Number(product.price || 0).toFixed(2)} USD
                </p>
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
        <div className="flex gap-3 mt-2">
          <StarRating value={rating} />
          <span className="text-sm text-gray-700 tabular-nums ">
          {rating.toFixed(1)}/5
          </span>
        </div>
      </div>
    );
  })}
        </div>
      </div>

      {/* Prev button */}
      <button onClick={() => emblaApi && emblaApi.scrollPrev()} className="absolute left-2 top-1/3 -translate-y-1/2 text-black rounded-full text-[40px] font-thin p-2">
        ‹
      </button>

      {/* Next button */}
      <button onClick={() => emblaApi && emblaApi.scrollNext()} className="absolute right-2 top-1/3 -translate-y-1/2 text-black rounded-full font-thin text-[40px] p-2">
        ›
      </button>
    </div>
  );
}

export default MultiCarousel
