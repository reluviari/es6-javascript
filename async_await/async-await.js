const fs = require("fs");

// const returnFilePromisse = function(promisse){
//     return new Promise(...)
// }

const readFilePromisse = (filename) =>
	new Promise((resolve, reject) => {
		fs.readFile(filename, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});

// Sem Async/Await - Utilizando apenas o THEN
// readFilePromisse("bundle.js").then(data => console.log(data.toString()));

async function read() {
	try {
		const contents = await readFilePromisse("arquivo.js");
		console.log(contents.toString());
	} catch (e) {
		console.log("Deu Erro", e);
	}
}

read();
