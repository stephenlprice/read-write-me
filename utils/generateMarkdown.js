const badges = require('./badges.js');
let license;
let contributions = "";
let langs = "";

// Write the right license badge from badges.js to the README file
const findLicense = (data) => {
  for (let i = 0; i < badges.licenses.length; i++) {
    if (badges.licenses[i].name === data.licensing){
      license = badges.licenses[i].badge;
    }
  }
};

// Finds matching badges for user selected project languages
const findLang = (data) => {
  for (let i = 0; i < badges.lang.length; i++) {
    if (data.lang.indexOf(badges.lang[i].name) > -1) {
      langs += badges.lang[i].badge;
    }
  } 
  console.log(langs);
};

// Sorts the contributions allow list to display a list in markdown
const listContrib = (data) => {
  data.contributions.forEach(function (contribution) {
    contributions += "<li>" + contribution + "</li>";
  })
}

// function to generate markdown for README
function generateMarkdown(data) {
  findLicense(data);
  findLang(data);
  listContrib(data);

  const markdown = /*md*/`
  # ${data.title}

  ${license} ${langs}

  ## Overview
  ${data.description}
  <hr>
  <br>

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [Code of Conduct](#Code-of-Conduct)
  4. [Testing](#Testing)
  5. [License](#License)
  6. [Questions](#Questions)
  <hr>
  <br>

  ## Installation
  To install this project, please do the following:<br>
  ${data.installation}
  <hr>
  <br>

  ## Usage
  To get started, consider the following:<br>
  ${data.usage}
  <hr>
  <br>

  ## Contributing

  ### Accepted Contributions:
  The following contributions are allowed for this project:<br>
  <ul>
    ${contributions}
  </ul>
  <br>

  ### Guidelines
  To contribute to this project, please abide by the following:<br>
  ${data.contribGuide}
  <hr>
  <br>

  ## Code of Conduct
  All contributers must agree and follow the Code of Conduct:<br>
  ${data.codeConduct}
  <hr>
  <br>

  ## Testing
  Testing is more than welcome. Here are a few instructions on how to perform tests:<br>
  ${data.tests}
  <hr>
  <br>

  ## License
  This project is licensed under the ${data.licensing} license.
  For more information refer to this link: ${license}
  <hr>
  <br>

  ## Questions
  To communicate with the project owner, use the following contact information:<br>
  Created by: ${data.username} <br>
  You can ask me any questions at this address: ${data.email}
  `;

  return markdown;
}

module.exports = generateMarkdown;