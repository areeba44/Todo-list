import inquirer from "inquirer";
//todolist app
//array done
//operation done
// function  done
let todo = ["ali", "hafsa"];
let condition = true;
async function createdtodo(todo) {
    do {
        let welcome = console.log("welcome areeba to todo list");
        let operation = await inquirer.prompt({
            name: "operator",
            type: "list",
            message: "what you want todo?",
            choices: ["Add", "View", "Updates", "Delete"]
        });
        if (operation.operator === "Add") {
            let add = await inquirer.prompt({
                name: "additems",
                type: "input",
                message: "please add items"
            });
            todo.push(add.additems);
            console.log(todo);
        }
        if (operation.operator === "View") {
            console.log(todo);
        }
        if (operation.operator === "Updates") {
            let update = await inquirer.prompt({
                name: "Updateditem",
                type: "list",
                message: "select item to update",
                choices: todo
            });
            let update2 = await inquirer.prompt({
                name: "updateditem2",
                type: "input",
                message: "updated item"
            });
            let newtodo = todo.filter(val => val != update.Updateditem);
            todo = [...newtodo, update2.updateditem2];
            console.log(todo);
        }
        if (operation.operator === "Delete") {
            let remove = await inquirer.prompt({
                name: "removeitem",
                type: "list",
                message: "select item to delete",
                choices: todo
            });
        }
        else if (operation.select === "exist")
            condition = false;
    } while (true);
}
createdtodo(todo);
