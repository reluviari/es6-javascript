// const p = new Promise((resolve, reject) => {
// 	let a = 1 + 1;
// 	if (a == 3) {
// 		resolve("Success");
// 	} else {
// 		reject("Failed");
// 	}
// });

// p.then(message => {
// 	console.log("This is in the THEN " + message);
// }).catch(err => {
// 	console.log("This is in the CATCH " + err);
// });

const ul = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		console.log(data);

		return data.map(function(user) {
			let li = document.createElement("li");
			li.innerHTML = `${user.name} (${user.username})`;
			ul.appendChild(li);
		});
	})
	.catch(error => {
		console.log("Ooops! " + error);
	});

// PROMISE ALL E PROMISE RACE

/*
let promisseA = Promisse.resolve("a");
let promisseB = Promisse.resolve("b");
let promisseC = Promisse.resolve("c");

// Executa as promessas em sequência, só retorna o THEN quando todas forem executadas:
// Exemplo: 3 serviços de FRETE para Entregas (Correios, DHL, Fedex). Pode-se comparar o preços 
Promisse.all([promisseA, promisseB, promisseC]).then(function(values) {
    ...
});

// Executa as promessas simultaneamente, a primeira que responder só retorna o THEN quando todas forem executadas.
// Exemplo: 3 serviços de consulta de CEP, o primeiro que responder, é retornado ao THEN.
Promisse.race([promisseA, promisseB, promisseC]).then(function(values) {
    ...
});
*/
