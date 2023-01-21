// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
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
    name: 'instructions'
 },
 { 
    type: 'input',
    message: 'Please write any installation instructions nescessary:',
    name: 'instructions'
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
    message: 'Which liscense do you want to add',
    name: 'liscenses',
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
    name: 'userName'
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
    let content = generateMarkdown(data)
    fs.writeFile(fileName, content, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    //Start your inquierer prompt, passing in array of questions
    inquirer.prompt(questions).then(generateMarkdown => {
        writeToFile(fileName, generateMarkdown(data));  
    });

}

// Function call to initialize app
init();
