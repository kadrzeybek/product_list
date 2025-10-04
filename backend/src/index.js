import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001
const __dirname = path.resolve();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}
))

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    
    app.get(/.*/, (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });
  }

app.listen(PORT, () =>{
    console.log("App is running on port: ", PORT)
})

