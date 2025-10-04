# product_list

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5.x-lightgrey?logo=express)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)


A simple backend-frontend case study built with Node.js, Express, React (Vite), and GoldAPI.
The backend provides a RESTful API that reads product data from a local JSON file, dynamically calculates prices based on gold value and popularity, and supports filtering by price range and popularity score.
The frontend displays products in real-time with interactive filters, color options, and live gold-based price updates.

---

## Features
### Backend
- Read products from `products.json`
- Calculates product prices dynamically using the formula
- Provides fltering:
    - `minPrice /maxPrice`
    - `minPopularity`
- Returns results in JSON format

### Frontend
- Product caurosel with color options
- Real-time price display
- Filter section with:
    - Price range
    - Popularity (start rating)
    - Apply button to fetch filtered results from backend
---

## Tech Stack
- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
- **Frontend** [React-Vite](https://vite.dev/),[Tailwindcss](https://v3.tailwindcss.com/)
- **Data Source** Local JSON file
---

## Installation & Setup

1. Clone the repository  
    `git clone https://github.com/kadrzeybek/product_list.git`

3. Create a .env file in the backend directory
    ```
    PORT=5001

    ACCESS_TOKEN=your_api_token

    ACCESS_URL=https://www.goldapi.io/api/XAU/USD

    NODE_ENV=development
    
    ```
   
4. Start The Server
    `cd backend` `npm run dev`


5. Start The Cliemt
    `cd forntend` `npm run dev`

6. Url
    `http://localhost:5173/`
