let mainMenu = ['COMMAND MENU', 'list - List all contacts', 'get # - Get contact with the specified number', 'exit - Exit program'];


for (let i in mainMenu) {
  console.log(mainMenu[i]);
}


const userInput = prompt(alert(mainMenu));