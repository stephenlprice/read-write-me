// function to generate markdown for README
function generateMarkdown(data) {
  const contributions = data.contributions;
  for (item in contributions) {
    
  }

  const markdown = /*md*/`
  # ${data.title}

  ## Overview
  ${data.description}
  <hr>
  <br>
  
  ## Table of Contents
  <hr>
  <br>
  
  ## Installation
  ${data.installation}
  <hr>
  <br>
  
  ## Usage
  ${data.usage}
  <hr>
  <br>
  
  ## Contributing
  
  ### Accepted Contributions:
  -${data.contributions}
  <br>
  
  ### Guidelines
  ${data.contribGuide}
  <hr>
  <br>
  
  ## Testing
  ${data.tests}
  <hr>
  <br>
  
  ## License
  ${data.licensing}
  <hr>
  <br>
  
  ## Questions
  Created by: ${data.username}<br>
  You can ask me any questions at this address: ${data.email}
  `;

  return markdown;
}

module.exports = generateMarkdown;