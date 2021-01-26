const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown.js');

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
        type: "checkbox",
        message: "What languages are used in this project?",
        name: "lang",
        choices: ['JavaScript', 'Node.js', 'Python', 'R', 'HTML5', 'CSS3', 'Markdown']
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
        name: 'contribGuide'
    },
    {
        type: 'input',
        message: 'What is the code of conduct for this project?',
        name: 'codeConduct'
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
        choices: ['MIT', 'ISC', 'Apache 2.0', 'GNU GPLv3', 'GNU GPLv2', 'Mozilla 2.0', 'Unlicense', 'WTFPL']
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
        .prompt(data).then((response) => {
            // call on the generateMarkdown function with template literal parsing the response object
            const markdown = genMD(response);
            // Write the template literal to the specified markdown file
            fs.writeFile(fileName, markdown, 'utf8', (err) => 
            err ? console.error(err) : console.log('Success! README.md is available in root...')
            )
        });
}

// function to initialize program
function init() {
    // Name the file and specify what questions to ask
    writeToFile('README.md', questions);
}

// function call to initialize program
init();
