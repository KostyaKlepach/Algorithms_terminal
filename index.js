const inquirer = require('inquirer');
const colors = require('colors');

const { task86ab, task330} = require('./tasks/Klepach_Kostya_tasks');

const choices = [
  // eslint-disable-next-line no-undef
  { name: 'Kostya Klepach - task 86 a b', value: task86ab },
  { name: 'Kostya Klepach - task 330', value: task330 },
  { name: 'Exit', value: 'exit' }
];

const questions = [
  {
    type: 'list',
    name: 'task',
    message: 'Choose task from list please>',
    choices
  }
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    if (answers.task !== 'exit') {
      answers.task(inquirer).then(res => {
        if (res === 'back') {
          ask();
        }
      });
    }
  });
}

ask();
