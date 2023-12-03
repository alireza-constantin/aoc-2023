import { readFile } from 'node:fs/promises'

let sum = 0;
// --- part 1
/* (await readFile("./input.txt", { encoding: "utf8" }))
	.toString()
	.split("\n")
	.filter(Boolean)
    .map((j) => j.split(":"))
    .forEach((k) => {
    const gameNum = parseInt(k[0]?.split(" ")[1]!);
    const game = k[1]?.split(";");
            let isPossible = true;
        game?.forEach(g => {
            const round = g.split(",");
            round.forEach(r => {
                let [_,num,color]=r.split(' ');
                let numb = parseInt(num!);
                if(color === 'green' && numb > 13) isPossible = false;
                if(color === 'red' && numb > 12) isPossible = false;
                if(color === 'blue' && numb > 14) isPossible = false;
            })
        })
        if(isPossible) sum += gameNum;
}) */


// part 2
(await readFile("./input.txt", { encoding: "utf8" }))
	.toString()
	.split("\n")
	.filter(Boolean)
    .map((j) => j.split(":"))
    .forEach((k) => {
    const gameNum = parseInt(k[0]?.split(" ")[1]!);
    const game = k[1]?.split(";");
        const colors = {
            red: 0,
            green: 0,
            blue: 0
        }
        game?.forEach(g => {
            const round = g.split(",");
            round.forEach(r => {
                let [_,num,color]=r.split(' ');
                if(!num || !color) return;
                let numb = parseInt(num!);
                if(colors[color] < numb){
                    colors[color] = numb
                }
            })
        })

        const sumofColor = colors.red * colors.green * colors.blue;
        sum += sumofColor;
})

console.log(sum)
