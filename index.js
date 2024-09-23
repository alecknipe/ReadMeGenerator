// index.js
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this project used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to run tests for the project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to generate the README content
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
\`\`\`
${answers.tests}
\`\`\`

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions, please open an issue or contact me through GitHub [${answers.github}](https://github.com/${answers.github}) or via email at [${answers.email}](mailto:${answers.email}).
  `;
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.error(err) : console.log('Successfully created README.md!')
    );
  });
}

// Call the init function to start the application
init();
