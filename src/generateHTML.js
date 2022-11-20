  // Creates a function to generate markdown for README
  function generateHTML(data) {
    return `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.firstName}</h5>
      <h5 class="card-title">${getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Specific to role</li>
    </ul>
  </div>
  `;
  }
  
  //exports the generateMarkdown to be required by other .js files
  module.exports = generateHTML;
  