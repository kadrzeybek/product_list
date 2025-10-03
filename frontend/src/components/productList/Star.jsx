
const Star = ({ filled, className = "" }) => {
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

export default Star
