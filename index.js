import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    const operations = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "select option ",
        choices: ["add", "edit", "remove", "view list", "exit"]
    });
    if (operations.action === "add") {
        console.log("welcome");
        const todolist = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "what do you wanna add to your to do list?",
            },
            {
                name: "addmore",
                type: "confirm",
                message: "do you want to add more:",
                default: true
            }
        ]);
        todo.push(todolist.add);
        condition = (todolist.addmore);
        console.log("todolist:", todo);
    }
    else if (operations.action === "edit") {
        const editItem = await inquirer.prompt({
            name: "edit",
            type: "list",
            message: "what do you want to edit in your list?",
            choices: todo
        });
        const index = todo.indexOf(editItem.edit);
        if (editItem.edit !== -1) {
            const newitem = await inquirer.prompt({
                name: "newvalue",
                type: "input",
                message: "add new value",
            });
            todo[index] = newitem.newvalue;
            console.log("Success! Here is your list after editing.", todo);
        }
        ;
    }
    else if (operations.action === "remove") {
        const removeItem = await inquirer.prompt({
            name: "remove",
            type: "list",
            message: ",which value do you want to remove in your list?",
            choices: todo
        });
        const index = todo.indexOf(removeItem.remove);
        if (index !== -1) {
            todo.splice(index, 1);
            console.log("value removed !", todo);
        }
        ;
    }
    else if (operations.action === "view list") {
        console.log("your current list", todo);
        console.log(todo.join("/n"));
    }
    else if (operations.action === "exit") {
        condition = false;
        console.log("exit");
    }
    else {
        console.log("select valid value");
    }
}
