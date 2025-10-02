import { promises as fsp } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getAllProduct = async (req, res) =>{
    try {
        // find where product.json
        const filePath = path.join(__dirname,"../data/products.json");

        //read and parse json data
        const datas = await fsp.readFile(filePath, "utf-8");
        const products = JSON.parse(datas);

        res.status(200).json({success: true, data: products});
        
    } catch (error) {
        console.error("Error is in getAllProduct controller error", error)
        res.status(500).json({message:"Products not found"})
    }
}