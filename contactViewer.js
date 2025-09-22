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

while (true) { 
  if (userInput.toLowerCase() === "exit") {
    break;
  } 
  else if (userInput.toLowerCase() === "list") {
    let names = "";
    for (let i = 0; i < contacts.length; i++) {
      let contactSections = contacts[i].split("|");
      names += i + 1 + " - " + contactSections[0] + "\n";
    }

    alert(names);
  } 
  else if (userInput.toLowerCase().startsWith("get ")) {
    let input = userInput.substring(4).trim();

    if (!isNaN(input)) {
      let index = parseInt(input, 10) - 1;
      if (index >= 0 && index < contacts.length) {
        let contactSections = contacts[index].split("|");
        alert(
          "Name: " + contactSections[0] + "\n" +
          "Email: " + contactSections[1] + "\n" +
          "Phone: " + contactSections[2]
        );
      } else {
        alert(`No data for #${input}`);
      }
    }
    else {
      alert("Invalid command");
    }
  }
  break;
}

