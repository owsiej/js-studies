const yargs = require("yargs");
const readFile = require("./read-data");
const addDataToFile = require("./write-data");

const TODO_FILE_PATH = "./todo.json";

yargs
  .command(
    "dodaj",
    'Add new task to TODO list. Remember to put the entire task between "".',
    (argv) => {
      if (argv.argv._.length === 1) {
        console.error("You did not provide any task to add.");
        process.exit(1);
      } else if (argv.argv._.length > 2) {
        console.error('Put your task between "".');
        process.exit(1);
      }
    },
    async (argv) => {
      let fileContent;
      const task = argv._[1];
      try {
        fileContent = await readFile(TODO_FILE_PATH);
      } catch (error) {
        if (error instanceof TypeError) {
          console.error(`Read data is wrong type. ${error.message}`);
        }
        fileContent = [];
      }
      fileContent.push(task);
      await addDataToFile(TODO_FILE_PATH, JSON.stringify(fileContent));
      console.log("Task successfully added to list.");
    }
  )
  .command(
    "lista",
    "Show all tasks in TODO list.",
    () => {},
    async () => {
      const toDoList = await readFile(TODO_FILE_PATH);
      console.log("File read successfully.\nList of tasks:");
      toDoList.forEach((task) => {
        console.log(task);
      });
    }
  )
  .demandCommand(
    1,
    1,
    "You are obligated to use precisely one command suggested at Commands."
  )
  .help().argv;
