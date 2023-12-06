// - Табела за приказ на податоци од StarWars API

let personList = []; 

async function getPeople() {
    try {
        personList.splice(0, personList.length);
        displayPersons();

        const response = await fetch("https://swapi.dev/api/people/")
        const data = await response.json()

        const result = data.results
        result.forEach((el) => {
            const person = { name: el.name, birth_year: el.birth_year, height: el.height, mass: el.mass, url: el.url };
            personList.push(person);
        })

        displayPersons();
    } catch (error) {
        alert("Error while getting data: " + error)
    }
}

function displayPersons() {
    const tableBody = document.getElementById('peopleList');

    tableBody.innerHTML = '';

    personList.forEach((person) => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.textContent = person.name;
        cell2.textContent = person.birth_year;
        cell3.textContent = person.height;
        cell4.textContent = person.mass;
        cell5.textContent = person.url;
    });
}

