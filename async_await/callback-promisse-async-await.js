const fs = require("fs");

// ############### CALLBACK - FUNÇÃO ASSÍNCRONA ###############
console.log(1);

// FUNÇÃO TRADICIONAL

/*
	function callback(err, contents) {
		console.log(err, String(contents));
	}
*/

// ARROW FUNCTION

/*
const callback = (err, contents) => {
	console.log(err, String(contents));
};

fs.readFile("bundle.js", callback);
*/

// CASO FOR UTILIZAR APENAS UMA VEZ, O CALLBACK PODE SER CHAMADO DENTRO DO MÉTODO

/*
	fs.readFile("bundle.js", (err, contents) => {
		console.log(err, String(contents));
	});
*/

// PROBLEMA AO MANIPULAR DIVERSOS EVENTOS ASSÍNCRONO

/*
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

    function umPorSegundo() {
        delay().then(() => {
            console.log('1s');
            delay().then(() => {
                console.log('2s');
                    delay().then(() => {
                    	console.log('3s');
                });
            })
        });
    }
    umPorSegundo();
*/

/*
	fs.readFile("bundle.js", (err, contents) => {
		fs.readFile("main.js", (err, contents2) => {
			console.log(err, String(contents));
			console.log(err, String(contents2));
		});
	});
*/

// UTILIZANDO PROMISSE

// const readFile = file =>
// 	new Promise((resolve, reject) => {
// 		fs.readFile(file, (err, contents) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(contents);
// 			}
// 		});
// 	});

// readFile("bundle.js")
// 	.then(contents => {
// 		console.log(String(contents));
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// UTILIZANDO PROMISSE COM ASYNC /WAIT

const readFile = (file) =>
	new Promise((resolve, reject) => {
		fs.readFile(file, (err, contents) => {
			if (err) {
				reject(err);
			} else {
				resolve(contents);
			}
		});
	});

const executeAsyncReadFile = async () => {
	try {
		contents = await readFile("bundle.js");
		contents2 = await readFile("index.html");
		return String(contents) + "\n" + String(contents2);
	} catch (err) {
		console.log(err);
	}
};

executeAsyncReadFile().then((contents) => {
	console.log(String(contents));
});

console.log(2);

console.log(3);
