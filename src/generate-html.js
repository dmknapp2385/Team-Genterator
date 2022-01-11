function generateEmployeeCard(personelArray) {
    personelArray.foreach(person => {
        return `
        <div class="card">
        <div class="card-header">
            <h1>${person.name}</h1>
            <h2>${person.role} image</h2>
        </div>
        <div class='card-body'>
            <p>ID: ${person.id} </p>
            <p> Email: ${person.email}</p>
            ${getAdditonalInfo(person)}
        </div>
    </div>`
    })
}

function getAdditonalInfo(person) {
    if (person.github){
        return`
        <p>GitHub: ${person.github} </p>`;
    } else if (person.officeNumber) {
        return`
        <p>Office Number: ${person.officeNumber} </p>`;
    } else if (person.school) {
        return`
        <p>School: </p>`;
    } else {
        return ``;
    }
}


return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team Members</h1>
    </header>
    
    <section>
        <div class="card">
            ${generateEmployeeCard(personelArray)}
            <div class="card-header">
                <h1>Employee Name</h1>
                <h2>Employee Role image</h2>
            </div>
            <div class='card-body'>
                <p>ID: </p>
                <p> email: </p>
            </div>
        
        </div>
       
        <div class="card">
            <div class="card-header">
                <h1>Employee Name</h1>
                <h2>Employee Role image</h2>
            </div>
            <div class='card-body'>
                <p>ID: </p>
                <p> email: </p>
            </div>
        
        </div>
        <div class="card">
            <div class="card-header">
                <h1>Employee Name</h1>
                <h2>Employee Role image</h2>
            </div>
            <div class='card-body'>
                <p>ID: </p>
                <p> email: </p>
            </div>
        
        </div>
    </section>
    
    
</body>
</html>`