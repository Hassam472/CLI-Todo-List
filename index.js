#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
let addTask;
while (condition) {
    addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todo list?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Did you want to add more thing in your list?",
            default: "false"
        }
    ]);
    condition = addTask.addMore;
    todos.push(addTask.todo);
}
;
console.log(todos);
setTimeout(() => {
    console.log("Have a Good Day :)");
}, 2000);
