function randomItem(arr){
  const randomIndex= Math.floor(Math.random() * arr.length);
  console.log(randomIndex);

  const item = arr[randomIndex]
  return item
}

module.exports = randomItem