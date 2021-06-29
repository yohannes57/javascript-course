
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

let dolphinAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
let koalaAvg = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinAvg > koalaAvg) {
	console.log("dolphin win");
} else if (koalaAvg > dolphinAvg) {
	console.log("koala win");
} else {
	console.log("game is a draw");
}


dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;

koalas1 = 209;
koalas2 = 95;
koalas3 = 123;

dolphinAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
koalaAvg = (koalas1 + koalas2 + koalas3) / 3;

if ((dolphinAvg > koalaAvg) && (dolphinAvg > 100)) {
	console.log("dolphin win");
} else if (koalaAvg > dolphinAvg) && (koalaAvg > 100)) {
	console.log("koala win");
} else {
	console.log("game is a draw");
}