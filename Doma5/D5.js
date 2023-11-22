// - напиши 5 функции кои враќаат promise
// - повикај ги со then/catch
// - повикај ги со async/await во try/catch блок

//1. then/catch
async function getCurrentDate(godina) {
    if (godina == 2023) {
        return new Date()
    } else {
        throw new Error("godinata ne e tocna")
    }
}
getCurrentDate(2023).then(datum => console.log(datum)).catch(error => console.log(error))
getCurrentDate(2022).then(datum => console.log(datum)).catch(error => console.log("Problem: " + error))


//2. then/catch
async function getUserAgent(browser) {
    if (browser == "Chrome") {
        return navigator.userAgent
    } else {
        throw new Error("pogresen prebaruvac")
    }
}
getUserAgent("Chrome").then(agent => console.log(agent)).catch(error => console.log(error))
getUserAgent("Mozilla").then(agent => console.log(agent)).catch(error => console.log("Problem: " + error))


//3. async/await во try/catch блок
async function getNumberSquared(broj) {
    if ((broj % 2) == 0) {
        return broj * broj
    } else {
        throw new Error("neparen broj, nema presmetka")
    }
}
async function squareNumber(broj) {
    try {
        const brojNaKvadrat = await getNumberSquared(broj)
        console.log(brojNaKvadrat)
    } catch (error) {
        console.log("Greska: " + error)
    }
}
squareNumber(2)
squareNumber(1)


//4. async/await во try/catch блок
async function getColour(boja) {
    if (boja == 1) {
        return "crna boja"
    } else {
        throw new Error("nepostoecka vrednost za boja")
    }
}
async function colourNumber(boja) {
    try {
        const tipBoja = await getColour(boja)
        console.log(tipBoja)
    } catch (error) {
        console.log("Greska: " + error)
    }
}
colourNumber(1)
colourNumber(2)


//5. async/await во try/catch блок
async function getCar(avtomobil) {
    switch (avtomobil) {
        case 1:
            return "BMW"
        case 2:
            return "Opel"
        case 3:
            return "Toyota"
        case 4:
            return "Audi"
        default:
            throw new Error("Nepostoecka vrednost za avtomobil. Odberete broj od 1 do 4")
    }
}
async function carNumber(avtomobil) {
    try {
        const tipAvtomobil = await getCar(avtomobil)
        console.log(tipAvtomobil)
    } catch (error) {
        console.log("Greska: " + error)
    }
}
carNumber(1)
carNumber(5)


