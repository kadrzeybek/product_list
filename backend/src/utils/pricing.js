// var myHeaders = new Headers();
// myHeaders.append("x-access-token", "goldapi-1cbghsmg8kagac-io");
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

//fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
//  .then(response => response.text())
//  .then(result => console.log(result))
//  .catch(error => console.log('error', error));



const GOLD_PRICE = 125

// fiyat hesapla
export function calcPrice(p) {
    return (p.popularityScore + 1) * p.weight * GOLD_PRICE;
  }

