import dotenv from "dotenv";

dotenv.config();

 var myHeaders = new Headers();
 myHeaders.append("x-access-token", process.env.ACCESS_TOKEN);
 myHeaders.append("Content-Type", "application/json");

 var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
};


export const getGoldPrice = async() =>{
  let GOLD_PRICE 
  if (!GOLD_PRICE) {
    const res = await fetch(process.env.ACCESS_URL, requestOptions);
    const data = await res.json();
     GOLD_PRICE = data.price_gram_24k;
    console.log("Yeni fiyat çekildi:", GOLD_PRICE);
    return GOLD_PRICE
  }
  
}
// fiyat hesapla
export async function calcPrice(p,gold_price) {
  return (p.popularityScore + 1) * p.weight * gold_price;
}

