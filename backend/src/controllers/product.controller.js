import { promises as fsp } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { calcPrice } from '../utils/pricing.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getProducts = async (req, res) =>{
    try {
        // find where product.json
        const filePath = path.join(__dirname,"../data/products.json");

        //read and parse json data
        const rawDatas = await fsp.readFile(filePath, "utf-8");
        const datas = JSON.parse(rawDatas);

        const {minPrice, maxPrice, minPopularity} = req.query

        const products = datas.map(p => ({
          ...p,
          price: calcPrice(p)
        }));
    
        const filtered = products.filter(p => {
          if (minPrice && p.price < Number(minPrice)) return false;
          if (maxPrice && p.price > Number(maxPrice)) return false;
          if ((minPopularity) && p.popularityScore < Number(minPopularity)*0.2) return false;
          return true;
        });
    
        res.status(200).json({success: true, data: filtered, minPrice:minPrice, maxPrice:maxPrice});
        
    } catch (error) {
        console.error("Error is in getAllProduct controller error", error)
        res.status(500).json({message:"Products not found"})
    }
}
