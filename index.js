// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
 { 
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
 },
 { 
    type: 'input',
    message: 'Please write a short description of your project:',
    name: 'description'
 },
 { 
    type: 'input',
    message: 'Please write any installation instructions nescessary:',
    name: 'install'
 },
 { 
    type: 'input',
    message: 'Please provide instructions on how to use the project:',
    name: 'usage'
 },
 { 
    type: 'input',
    message: 'Include who help contribute to this project:',
    name: 'credit'
 },
 { 
    type: 'input',
    message: 'Please describe and show how to run tests with code examples:',
    name: 'tests'
 },
 { 
    type: 'list',
    message: 'Which license do you want to add',
    name: 'license',
    choices: [
        'None',
        'MIT',
        'GPL',
        'Apache',
        'BSD',
    ]
 },
 { 
    type: 'input',
    message: 'What is your Github username?',
    name: 'username'
 },
 { 
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
 },

];

// TODO: Create a function to write README file
const fileName = 'README.md';

function writeToFile(fileName, data) {
 //use fs to write a new file with the data returend from your generateMarkdown function
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    //Start your inquierer prompt, passing in array of questions
    inquirer.prompt(questions).then((data) => {
        writeToFile(fileName, data);  
    });

}

// Function call to initialize app
init();
