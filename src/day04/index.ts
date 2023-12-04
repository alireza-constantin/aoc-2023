import { readFile } from "node:fs/promises"

const input = (await readFile("./input.txt", { encoding: "utf8" }))
	.toString()
	.split("\n")
	.filter(Boolean)
    .map(i => transformStringToCardObject(i));


let sum = 0;
input.forEach((obj, _) => {
    const win = obj['win'];
    const nums = obj['nums'];
    let much = 0;

    nums?.forEach((num) => {
        if(win?.includes(num)) much++
    })

    sum += much === 0 ?  0 :  Math.pow(2, (much - 1));
})
console.log(sum);

function transformStringToCardObject(cardString: string) {
  const cardArray = cardString.split('|').map(segment => segment.trim().split(' ').filter(Boolean));
  
  return {
    'win': cardArray[0],
    'nums': cardArray[1]
  };
}
