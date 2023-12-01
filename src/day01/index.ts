import { readFile } from "node:fs/promises";

const input = (await readFile("./input.txt", { encoding: "utf8" }))
	.toString()
	.split("\n")
	.filter(Boolean)

function partOne(){

const allNums: number[] = [];

input.forEach((line: string) => {
		let left;
		let right;
		for (let i = 0; i < line.length; i++) {
			if(!isNaN(parseInt(line[i]!))){
				left = line[i]!;
				break;
			}
		}
		for (let i = line.length - 1; i >= 0; i--) {
			if(!isNaN(parseInt(line[i]!))){
				right = line[i]!;
				break;
			}
		}
		let sum = left! + right!;
		allNums.push(parseInt(sum));
	})

const part1Answer = allNums.reduce((prev, curr) => prev + curr ,0);

console.log(allNums);
console.log(part1Answer)
}

partOne();

function partTwo(){
	const allNums: number[] = []; 

	const letterToNumMap: {[key:string]: string} = {
	'one': '1',
	'two': '2',
	'three': '3',
	'four': '4',
	'five': '5',
	'six':'6',
	'seven':'7',
	'eight':'8',
	'nine':'9'
	}
	const regexStr = `(${Object.keys(letterToNumMap).join('|')}|${Object.values(letterToNumMap).join('|')})`;
	console.log(regexStr);
	const startRegex = new RegExp(regexStr);
	const endRegex = new RegExp(`.*${regexStr}`);

	input.forEach((line: string) => {
		let left = line.match(startRegex)?.[1];	
		let right = line.match(endRegex)?.[1];
		if(left && isNaN(parseInt(left))){
			left = letterToNumMap[left]!;	
		}
		
		if(right && isNaN(parseInt(right))){
			right = letterToNumMap[right]!;	
		}
		
		let sum = left! + right!;
		allNums.push(parseInt(sum));
	})
	const part2Answer = allNums.reduce((prev, curr) => prev + curr ,0);
	console.log(allNums);
	console.log(part2Answer);
}

partTwo()
