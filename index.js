// Includes packages needed for this application
const inquirer = require('inquirer'); // third-party inquirer package
const fs = require('fs'); // reads/writes the files from/to the computer
const generateHTML = require('./src/generateHTML.js') // helps it to work with other JS files

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }

      getName() {
        return this.name;
      }

      getId() {
        return this.id;
      }

      getEmail() {
        return this.email;
      }

      getRole() {
        return 'Employee';
      }
}

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
    super(firstName, id, email);
  }

  getRole() {
    return 'Manager';
  };
}

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
        super(firstName, id, email);
      }

      getGithub() {
        return this.gitHub;
      }
    
      getRole() {
        return 'Engineer';
      };
}

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        super(firstName, id, email);
      }

      getSchool() {
        return this.school;
      }
    
      getRole() {
        return 'Intern';
      };
}

const employee1 = new Employee('Yigit', 1, 'asd@gmail.com');

const questions = [
    {
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
    },
    {
      type: 'list',
      name: 'addTeamMember',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'I do not want to add more team members'], //prompts user to select between options
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
    }
];

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
  inquirer.prompt(questions)
  .then(function (userData) {
      writeToFile("index.html", userData);
  });
}

// Function call to initialize app
init();