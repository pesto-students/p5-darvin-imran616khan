function sharesInvestment(prices, invest) {
  const bestDayToBuyShare = prices.indexOf(Math.min(...prices)) + 1;
  let temp = [];
  temp = prices.slice(bestDayToBuyShare);
  temp = Math.max(...temp);
  if (invest && temp > prices[bestDayToBuyShare - 1]) {
    console.log(
      `Best day to buy share is ${bestDayToBuyShare} and value is ${
        prices[bestDayToBuyShare - 1]
      }`
    );
    console.log(
      `Best day to sell share is ${
        prices.indexOf(temp) + 1
      } and value is ${temp}`
    );
    console.log(`Profit gained is ${temp - prices[bestDayToBuyShare - 1]}`);
    return temp - prices[bestDayToBuyShare - 1];
  } else if (invest && temp < prices[bestDayToBuyShare - 1]) {
    console.log("Can't sell as shares price are down");
    return 0;
  } else if (!invest) {
    console.log("No profit as there is no investment");
    return 0;
  } else {
    console.log("Invalid input");
    return -1;
  }
}
console.log(sharesInvestment([7, 1, 5, 3, 6, 4], true));
