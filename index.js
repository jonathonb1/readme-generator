const fs = require("fs");
const path = requre("path");
const inquirer = require("inquirer");
const { default: Choice } = require("inquirer/lib/objects/choice");
const createMarkdown = require("./utils/createMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "please write a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?"
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BDS 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        devault: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the usert need to know about contributing to the repo?",
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse) => {
            console.log("Generating README...");
            writeToFile("README.md", createMarkdown({ ...inquirerResponses }));
        })
}

init();