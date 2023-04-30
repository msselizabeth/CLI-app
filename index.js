
const { program } = require("commander");
const contacts = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const listContact = await contacts.listContacts();
            return console.table(listContact);
        case "get":
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case "remove":
            const removeContact = await contacts.removeContact(id);
            return console.log(removeContact);
        case "add":
            const addContact = await contacts.addContact(name, email, phone);
            return console.log(addContact);
        default:
            return console.log("Uknown Action");
    }
}

program
    .option("-a,  --action, <type>")
    .option("-i, --id, <type>")
    .option("-n, --name, <type>")
    .option("-e, --email, <type>")
    .option("-p, --phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options);