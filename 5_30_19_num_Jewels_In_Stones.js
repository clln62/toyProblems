//Find count for matching instances (amount of jewels in stones)
//If string 2 has 3 matching elements compared to string 1, count should be 3


let string1 = 'aA'
let string2 = 'aAAbbb'
let string3 = 'bZw'
let string4 = 'BbzZZwW' 


function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}




console.log(numJewelsInStones(string1, string2)); //=> 3
console.log(numJewelsInStones(string3, string4)); //=>4