// 1. Анализа на низа градови

var cities = [
    { name: "Bitola", population: 50000 },
    { name: "Skopje", population: 800000 },
    { name: "Ohrid", population: 40000 },
    { name: "Atlanta", population: 1500000 },
    { name: "New York", population: 8500000 },
    { name: "Amsterdam", population: 1100000 }
]


// 2. Подреди по популација (најголем кон најмал)

var citiesSorted = cities.sort((city1, city2) => city2.population - city1.population)
console.log(citiesSorted)


// 3. Кои се трите најнаселени градови

console.log("tri najnaseleni gradovi :")
citiesSorted.slice(0, 3).map(city => city.name).forEach(cityName => console.log(cityName))


// 4. Сите градови што почнуваат на А и имаат над милион жители

console.log("Gradovi sto pocnuvaat na A i imaat na milion ziteli :")
cities.filter(city => city.name.startsWith("A") && city.population > 1000000).forEach(city => console.log(city))


// 5. Просек од вкупен број на жители од сите градови

var prosek = cities.reduce((sum, current) => sum + current.population, 0) / cities.length
console.log("Prosek na vkupen broj na ziteli od site gradovi : " + prosek)