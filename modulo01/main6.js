// Arrow Function

/**
 * 
    const arr = [1, 3, 4, 5, 6];

    const newArr = arr.map(function(item){
        return item + 2;
    });

    console.log(newArr);
 *  
    a seguir , Arrow Functions : 
 */

const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(item => {
// 	return (item + 2);
// });
const newArr = arr.map(item => item + 2);

console.log(newArr);
