import { readFile } from "node:fs/promises"

const input = (await readFile("./test.txt", { encoding: "utf8" }))
	.toString()
	.split("\n")
	.filter(Boolean)

//const symbols = ["*", "#", "$", "%","/","@","&", "+", "-", "="];
//let sums = 0;
//const re = /\d+/g;
//for (let i = 0; i < input.length; i++) {
    //const line = input[i];
    ////const ob = {number: 0, fi: 0, li: 0};
//
    //let match;
    //while ((match = re.exec(line!)) !== null) {
        //if(!line) continue
        //const number: string = match[0];
        //const [fi,li]: [number, number] = [match.index, match.index + number.length - 1];
        //const prevChar = line[fi - 1]; 
        //const nextChar = line[li + 1];
        //const bottomLine = input[i+1]?.substring(fi - 1 , li + 2).replaceAll(".","");
        //const upperLine = input[i-1]?.substring(fi - 1, li + 2).replaceAll(".","");
        //if(symbols.includes(prevChar!) ||
        //symbols.includes(nextChar!) ||
        //symbols.includes(bottomLine!) ||
        //symbols.includes(upperLine!)
        //)
    //{
            //sums += parseInt(number);
        //}
        //console.log(bottomLine)
        //console.log(upperLine)
    //}
//}
//
let sums = 0;
const re = /\*/g;
for (let i = 0; i < input.length; i++) {
    const line = input[i];
    //const ob = {number: 0, fi: 0, li: 0};

    let match;
    while ((match = re.exec(line!)) !== null) {
        if(!line) continue
        const fi = match.index;
        const li = match.index + 1;
        console.log(match);
        const prevChar = line[fi - 1]; 
        const nextChar = line[li + 1];
        const bottomLine = input[i+1]?.substring(fi - 1 , li + 2).replaceAll(".","");
        const upperLine = input[i-1]?.substring(fi - 1, li + 2).replaceAll(".","");
    {
            //sums += parseInt(number);
        }
        //console.log(bottomLine)
        //console.log(upperLine)
    }
}


//console.log(sums);
