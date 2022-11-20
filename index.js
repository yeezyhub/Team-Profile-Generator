// Includes packages needed for this application
const inquirer = require('inquirer'); // third-party inquirer package
const fs = require('fs'); // reads/writes the files from/to the computer
const generateHTML = require('./src/generateHTML.js') // helps it to work with other JS files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// const employee1 = new Employee('Yigit', 1, 'asd@gmail.com');

function addManager() {
  return  inquirer.prompt(questions)
  .then(function (userData) {
      writeToFile("index.html", userData);
  });
}


const managerQuestions = [{
  type: "input",
  name: "firstName",
  message: `What is the team manager's name?`,
  //validate checks if the user left the console blank or not
  validate: firstNameInput => {
    if (firstNameInput) {
      return true;
    } else {
      console.log(`Please enter your team manager's name.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "id",
  message: `What is the team manager's id?`,
  //validate checks if the user left the console blank or not
  validate: idInput => {
    if (idInput) {
      return true;
    } else {
      console.log(`Please enter your team manager's id.`);
      return false;
    }
  }
},
{
type: "input",
  name: "email",
  message: `What is the team manager's email?`,
  //validate checks if the user left the console blank or not
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log(`Please enter your team manager's email.`);
      return false;
    }
  }
},
{
  type: "input",
  name: "officeNumber",
  message: "What is the team manager's office number?",
  //validate checks if the user left the console blank or not
  validate: officeNumberInput => {
    if (officeNumberInput) {
      return true;
    } else {
      console.log("Please enter your team manager's office number.");
      return false;
    }
  }
}
]

const addTeamMemberQuestion = [{
  type: 'list',
  name: 'addTeamMember',
  message: 'Which type of team member would you like to add?',
  choices: ['Engineer', 'Intern', 'I do not want to add more team members'], //prompts user to select between options
}]

const engineerQuestions = [{
  type: "input",
  name: "firstName",
  message: `What is the engineer's name?`,
  //validate checks if the user left the console blank or not
  validate: firstNameInput => {
    if (firstNameInput) {
      return true;
    } else {
      console.log(`Please enter your engineer's name.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "id",
  message: `What is the engineer's id?`,
  //validate checks if the user left the console blank or not
  validate: idInput => {
    if (idInput) {
      return true;
    } else {
      console.log(`Please enter your engineer's id.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "email",
  message: `What is the engineer's email?`,
  //validate checks if the user left the console blank or not
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log(`Please enter your engineer's email.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "githubUsername",
  message: "What is the engineer's GitHub username?",
  //validate checks if the user left the console blank or not
  validate: githubUsernameInput => {
    if (githubUsernameInput) {
      return true;
    } else {
      console.log("Please enter your engineer's GitHub username.");
      return false;
    }
  }
},
]

const internQuestions = [{
  type: "input",
  name: "firstName",
  message: `What is the intern's name?`,
  //validate checks if the user left the console blank or not
  validate: firstNameInput => {
    if (firstNameInput) {
      return true;
    } else {
      console.log(`Please enter your intern's name.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "id",
  message: `What is the intern's id?`,
  //validate checks if the user left the console blank or not
  validate: idInput => {
    if (idInput) {
      return true;
    } else {
      console.log(`Please enter your intern's id.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "email",
  message: `What is the intern's email?`,
  //validate checks if the user left the console blank or not
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log(`Please enter your intern's email.`);
      return false;
    }
  }
},

{
  type: "input",
  name: "schoolName",
  message: "What is the intern's school name?",
  //validate checks if the user left the console blank or not
  validate: schoolNameInput => {
    if (schoolNameInput) {
      return true;
    } else {
      console.log("Please enter your intern's school name.");
      return false;
    }
  }
},
]

// Creates a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile("./index.html", generateHTML(data), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html is successfully generated!');
});}

// Creates a function to initialize app
function init() {
  console.log('Welcome to the team generator!');
  console.log("Use 'npm run test' to reset the dist/ folder");
  inquirer.prompt(managerQuestions)
  .then(function (userData) {
      writeToFile("index.html", userData);
  });
}

// Function call to initialize app
init();