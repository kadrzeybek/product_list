// components/FilterPanel.jsx
import { OPTIONS } from "../../constants";
import { useProductStore } from "../../store/product";

const FilterPanel = ({
  valueStars
}) => {


   const {fetchProducts,minPrice, maxPrice, minPopularity, setMinPrice, setMaxPrice, setMinPopularity} = useProductStore();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {};

    if (minPrice !== "" && !Number.isNaN(minPrice)) {
      filters.minPrice = Number(minPrice);
    }
    if (maxPrice !== "" && !Number.isNaN(maxPrice)) {
      filters.maxPrice = Number(maxPrice);
    }
    if (minPopularity !== "" && !Number.isNaN(minPopularity)) {
      filters.minPopularity = Number(minPopularity);
    }
    fetchProducts?.(filters); 
    console.log(minPrice, maxPrice, minPopularity)
  };

  return (
    <form onSubmit={handleSubmit} className="flex md:flex-row md:justify-end flex-col justify-center gap-3 p-3 px-20">
      

      {/* Min fiyat */}
      <div className="flex items-center">
        
        <input
          placeholder="Min Price"
          type="number"
          className="w-full md:w-auto border rounded px-2 py-1"
          value={minPrice ?? ""}
          onChange={(e) => setMinPrice(e.target.value)}
          min="0"
        />
      </div>

      {/* Max fiyat */}
      <div className="flex items-center gap-2">
        
        <input
          placeholder="Max Price"
          type="number"
          className="w-full md:w-auto border rounded px-2 py-1"
          value={maxPrice ?? ""}
          onChange={(e) => setMaxPrice(e.target.value)}
          min="0"
        />
      </div>
      {/* Yıldız seçimi */}
      <div className="flex items-center">
        <select
          value={valueStars}
          onChange={(e) => setMinPopularity(e.target.value)}
          className="w-full md:w-56 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10"
        >
          <option value="">Choose Popularity</option>
          {OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        {/* type="submit" -> onSubmit çalışır, preventDefault var */}
        <button type="submit" className="w-full md:w-auto px-3 py-2 rounded-lg bg-[#878b91] text-white">
          Apply
        </button>
      </div>
    </form>
  );
};

export default FilterPanel;
