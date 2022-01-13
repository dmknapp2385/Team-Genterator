function generateEmployeeCard(personel) {
    const personelHtmlArry = personel.map(({name,role,email,id, ... other}) => {
        console.log(name)
        return `
        <div class="card">
            <div class="card-header">
                <h1>${name}</h1>
                <h2>${role} image</h2>
            </div>
            <div class='card-body'>
                <p>ID: ${id} </p>
                <p> Email: ${email}</p>${getAdditonalInfo(other)}
            </div>
        </div>`
    })
    return `
        ${personelHtmlArry.join('')}`

}

function getAdditonalInfo(other) {
    console.log(other);
    if (other.github) {
        return`
                <p>GitHub: ${other.github} </p>`;
    } else if (other.officeNumber) {
        return`
                <p>Office Number: ${other.officeNumber} </p>`;
    } else if (other.school) {
        return`
                <p>School: ${other.school}</p>`;
    } else {
        return ``;
    }
}

module.exports = personel => {
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
        ${generateEmployeeCard(personel)}
        </section>
        
    </body>
    </html>`
}