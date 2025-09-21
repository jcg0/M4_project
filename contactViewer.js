let contacts = [
  "Scott|scott@scotty2hotty.com|1-559-555-5555",
  "Blob|blobber@blobbloblaw.com|1-559-444-4444",
  "Corncob|corncob1990@gmail.com|1-559-333-3333",
  "Chon|pianodrawing@yahoo.com|1-559-222-2222",
];
let mainMenu =
  "COMMAND MENU\n" +
  "list - List all contacts\n" +
  "get # - Get contact with the specified number\n" +
  "exit - Exit program\n";

const userInput = prompt(mainMenu);

if (userInput === "list") {
  let names = "";
  for (let i = 0; i < contacts.length; i++) {
    let contactSections = contacts[i].split("|");
    names += i + 1 + " - " + contactSections[0] + "\n";
  }
  alert(names);
} else if (userInput === "get 1") {
  for (let i = 0; i < ronaldInfo.length; i++) {
    alert(ronaldInfo);
  }
} else if (userInput === "get 2") {
  for (let i = 0; i < mcdonaldInfo.length; i++) {
    alert(mcdonaldInfo);
  }
} else if (userInput === "get 3") {
  for (let i = 0; i < grimaceInfo.length; i++) {
    alert(grimaceInfo);
  }
}
