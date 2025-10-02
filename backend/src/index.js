import express from 'express';
import dotenv from 'dotenv'

import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001

app.use("/api/products", productRoutes);

app.listen(PORT, () =>{
    console.log("App is running on port: ", PORT)
})

