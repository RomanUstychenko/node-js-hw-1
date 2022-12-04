const {program} = require("commander")
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

  program.parse(process.argv);

const argv = program.opts();
const contacts = require("./contacts")

const invokeAction = async ({action, id, name, email, phone }) => {
    switch (action) {
            case "list":
                const listContacts = await contacts.listContacts();
                console.log(listContacts);
                break;
            case "get":
                const idContact = await contacts.getContactById(id);
                console.log(idContact);
                break;
            case "remove":
                const delContact = await contacts.removeContact(id);
                console.log(delContact);
                break;
            case "add":
                const addContact = await contacts.addContact(name, email, phone);
                console.log(addContact);
                break;  

            default:
                    console.log("Unknown action")
    }
}
invokeAction(argv);