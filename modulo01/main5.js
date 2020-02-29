// Let: Variável de Escopo

function teste(x) {
	let y = 2;
	if (x > 5) {
		console.log(x, y);
	}
}

console.log(y);

teste(10);
