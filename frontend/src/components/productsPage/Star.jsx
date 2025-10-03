
export function Star  ({ filled, className = "" }) {
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
      <div className="flex items-center gap-1" >
        {Array.from({ length: max }).map((_, i) => {
          const fill = Math.max(0, Math.min(1, clamped - i));
          const fillPct = `${fill * 100}%`;
          return (
            <span key={i} className="relative inline-block align-middle">
              {/* Boş yıldız */}
              <Star filled={false} className="text-gray-300" />
    
              {/* Dolu yıldız */}
              <span className="absolute inset-0 overflow-hidden" style={{ width: fillPct }} >
                  <Star filled={true} className="text-[#f6d5a8]" />
              </span>
             </span>
          );
        })}
      </div>
    );
  }