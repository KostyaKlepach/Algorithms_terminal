/* eslint-disable prefer-const */
const typewriter = require('node-typewriter');
const colors = require('colors');

module.exports = {
  // 86a,b
  task86ab: function task86ab(inq){
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Klepach Kostya: Task 86 a b\n> Given a natural number greater than 1'
              .green +
            '\n> How many digits is in the number and what their sum?'
              .green +
            '\n? Type a number greater than 1 in console. Please dont try anything except numbers'
              .yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            let number = Number(value);
            if (!Number.isNaN(number) && number > 1){
              let numberLength = number.toString().length;
              let numberSum = number.toString().split('').reduce((sum,dig) => sum + +dig,0);
              console.log(
                `Digits in the number: ${numberLength}   Sum of digits is: ${numberSum}`
                .underline.bold
              );
              setTimeout(() => {
                resolve('back');
              }, 2000);
            } else {
              typewriter(
                '\nEnter number pls not letters'.green +
                '\nCan you please next time try 1234'.yellow
              ).then(function() {
                typewriter('\nor any NUMBER greater than 1'.red.bold, 4000).then(
                  function() {
                    console.log(
                      '\nP.S. You can type exit to finish the whole program'
                        .green +
                        '\nOr you can type back to return on tasks menu\n\n'
                          .green
                    );
                    setTimeout(() => {
                      resolve(task86ab(inq));
                    }, 3000);
                  }
                );
              });
            } 
          }        
        }) 
    })
  },
  // 330
  task330: function task330(inq){
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'A natural number is called perfect if it is equal to the sum of all its divisors except for itself. 6=1+2+3'
              .green +
            '\n>Klepach Kostya: Task 330\n> Get all perfect numbers less than given number'
              .green +
            '\n? Type a number greater than 6 in console. Please dont try anything except numbers'
              .yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            // eslint-disable-next-line no-lonely-if
            let number = Number(value);
            if (!Number.isNaN (number) && number > 1){
              let max = Number(value);
              const result = [];
              for (let i = 3; i <= max; i++) {
                let num = 1;
                for (let j = 2; j <= i / 2; j++) {
                  if (i % j === 0) num += j;
                }
                if (i === num) result.push(i);
              }
              console.log(
                `Perfect numbers less than given number: ${result}`
                .underline.bold.blue
              );
              setTimeout(() => {
                resolve('back');
              }, 2000);
            } else {
              typewriter(
                '\nEnter number pls'.green +
                '\nCan you please next time try 1234'.yellow,
              ).then(function() {
                typewriter('\nor any NUMBER greater than 6'.red.bold, 4000).then(
                  function() {
                    console.log(
                      '\nP.S. You can type exit to finish the whole program'
                        .green +
                        '\nOr you can type back to return on tasks menu\n\n'
                          .green
                    );
                    setTimeout(() => {
                      resolve(task330(inq));
                    }, 3000);
                  }
                );
              });
            }
          } 
        })   
    });
  }
};
