import { useId } from "react";

/** Tek yıldız — fraction: 0..1 arası doluluk (ör. 0.7 = %70) */
function Star({ size = 20, fraction = 0 }) {
  const id = useId();                       // her yıldız için benzersiz clipPath
  const w = size;
  const h = size;

  return (
    <svg width={w} height={h} viewBox="0 0 24 24" aria-hidden>
      {/* Gri arka plan yıldız (boş kısım) */}
      <path
        d="M12 17.27l-5.47 3.3 1.64-5.81-4.5-3.78 5.9-.51L12 0l2.43 10.47 5.9.51-4.5 3.78 1.64 5.81z"
        transform="scale(1.2) translate(-2 -1)"
        fill="#e5e7eb"   /* gray-200 */
      />
      {/* Sarı yıldız (dolu kısım), soldan fraction kadar kesilip gösterilir */}
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={`${Math.max(0, Math.min(1, fraction)) * 24}`} height="24" />
        </clipPath>
      </defs>
      <path
        d="M12 17.27l-5.47 3.3 1.64-5.81-4.5-3.78 5.9-.51L12 0l2.43 10.47 5.9.51-4.5 3.78 1.64 5.81z"
        transform="scale(1.2) translate(-2 -1)"
        fill="#f6d5a8"   /* amber-500 */
        clipPath={`url(#${id})`}
      />
    </svg>
  );
}

/** 0..5 skorunu 5 yıldıza dağıtır; her yıldız için fraction=clamp(score - index, 0..1) */
export function Rating({ score = 0, size = 20 }) {
  const safe = Math.max(0, Math.min(5, score));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fraction = Math.max(0, Math.min(1, safe - i)); // 0..1
        return <Star key={i} size={size} fraction={fraction} />;
      })}
      <span className="ml-1 text-sm text-gray-600">{safe.toFixed(1)}/5</span>
    </div>
  );
}
