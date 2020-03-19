/**
 * Transformar os seguintes trechos de
 * código utilizando async/await.
 *  - plugin do Async/Await do Babel configurado
 *  - plugin do babel-polyfill configurado
 *  - Axios instalado
 * */

// Função delay aciona o .then após 1s.

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

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo() {
// 	await delay();
// 	console.log("1s");

// 	await delay();
// 	console.log("2s");

// 	await delay();
// 	console.log("3s");
// }

// umPorSegundo();

/**
 * B
    import axios from 'axios';

    function getUserFromGithub(user) {
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Usuário não existe');
            })
    }
    getUserFromGithub('reluviari');
    getUserFromGithub('reluviariNao');
 */

// import axios from "axios";

// async function getUserFromGithub(user) {
// 	try {
// 		const response = await axios.get(
// 			`https://api.github.com/users/${user}`
// 		);

// 		console.log(response);
// 	} catch (err) {
// 		console.log("USUÁRIO não existe", err);
// 	}
// }

// getUserFromGithub("reluviari");
// getUserFromGithub("reluviariNao");

/**
 * C
    class Github {
        static getRepositories(repo) {
            axios.get(`https://api.github.com/repos/${repo}`)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log('RESPOSITÓRIO não existe');
                })
        }
    }

    Github.getRepositories("reluviari/reluviaris-pwa-rails");
    Github.getRepositories("reluviari/dslkvmskv");
*/

// class Github {
// 	static async getRepositories(repo) {
// 		try {
// 			const response = await axios.get(
// 				`https://api.github.com/repos/${repo}`
// 			);
// 			console.log(response.data);
// 		} catch (err) {
// 			console.log("RESPOSITÓRIO não existe.", err);
// 		}
// 	}
// }
// Github.getRepositories("reluviari/reluviaris-pwa-rails");
// Github.getRepositories("reluviari/dslkvmskv");

/**
 * D
 *  const buscaUsuario = usuario => {
        axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
    }
    buscaUsuario('reluviari');
 * 
 */

import axios from "axios";

const buscaUsuario = async usuario => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${usuario}`
		);

		console.log(response.data);
	} catch (err) {
		console.log("Usuário não existe!");
	}
};

buscaUsuario("reluviari");
