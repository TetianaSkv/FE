//  1. У нас есть следующий объект:
// Проверьте, что этот объект не пустой и что в нем есть ключ age.

// let user = {
// name: "John",
// age: 30
// };
// console.log(user);
// console.log('age' in user);





// Создать объект product с названием(productname) и ценой(productprice) 
// продукта и выведите данные в консоль.

// let product = {
//     productname: "Nike",
//     productprice: '30 $'
// };
// console.log(product.productname);
// console.log(product.productprice);




// Добавить в объект product свойства productquantity и productquality.

// let product = {
//     productname: "Nike",
//     productprice: '30 $'
// };
// console.log(product);
// product.productquantity = 3;
// product.productquality = 'leader';






// Удалить свойство product_quality из объекта product.

// let product = {
//     productname: "Nike",
//     productprice: '30 $',
//     productquantity: 3,
//     productquality:'leader'

// };
// console.log(product);
// delete product.productquality;




// Написать код, выполнив задание: если значение объекта является числом (number), 
// то его значение надо увеличить вдвое.
// Пример объекта:

 
// let menu = {
//     width: 200, 
//     height: 300,
//     title: "my menu"
// };


// for (let key in menu) {
//     if (typeof menu[key] == 'number') {
//     menu[key] *= 2;
//     }
//     }
    
//     console.log(menu);

// Результат:


// let menu = {
//     width: 400, 
//     height: 600,
//     title: "my menu"
// };




// Написать функцию, которая принимает 2 числа и возвращает 1, 
// если первое число больше, чем второе; -1, если первое число меньше, 
// чем второе, и 0, если числа равны.


//     let param1 = prompt('Enter the number1');
//     let param2 = prompt('Enter the number2');
// function  param(number1, number2){
//     if(number1 > number2){
//         return 1;
//     }
//     else if (number1 < number2) {
//         return -1;
//     } else  
//         return 0;
//     }


// if (param(param1,param2)==1){
//     console.log('1');
// }
// else if (param(param1,param2) == -1){
//     console.log('-1');
// }
// else {
//     console.log('0');

// }





// Написать функцию, получающую на вход два числа. Если оба числа чётные - 
// функция возвращает их произведение. Если оба числа нечётные - функция возвращает 
// их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает 
// это нечётное число.

let param1 = prompt('Enter the number1');
let param2 = prompt('Enter the number2');
function  param(number1, number2){
    if(number1 % 2 == 0 && number2 % 2 == 0){
        return number1 * number2;
    }
    else if (number1 % 2 !== 0 && number2 % 2 !== 0) {
        return number1 + number2;
    } else  {
        if (number1 % 2 !==0 ){
        return number1 ;
        }
        else{
            return number2;
        }
    }}



    let result = param(Number(param1), Number(param2));

    if (result === Number(param1) * Number(param2)) {
      console.log(Number(param1) * Number(param2));
    } else if (result === Number(param1) + Number(param2)) {
      console.log(Number(param1) + Number(param2));
    } else {
      if (result === Number(param1)) {
        console.log(Number(param1));
      } else {
        console.log(Number(param2));
      }
    }