const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {   
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe the project?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install the project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is the project used?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "How can people contribute to the project?",
        name: "contributions",
        choices: ['creating issues', 'pull requests', 'suggesting enhancements', 'reporting bugs', 'documentation']
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contrib-guide'
    },
    {
        type: 'input',
        message: 'What test instructions can you provide?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What licensing will apply to this project?',
        name: 'licensing',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'GNU GPLv3', 'GNU GPLv2', 'Mozilla 2.0', 'Unlicense', 'wtfpl']
    },
    {
        type: 'input',
        message: 'Please provide a Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please provide an email for questions',
        name: 'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(data).then((response) => 
            fs.writeFile(fileName, JSON.stringify(response), (err) => 
            err ? console.error(err) : console.log('Success!')
            )
        );
}

// function to initialize program
function init() {
    writeToFile('README.md', questions);
}

// function call to initialize program
init();
