//Doma1 - uslovi (if/else)

// 1.
var number 
if (number == undefined) {
    console.log("Varijablata ne e inicijalizirana")
} else {
    console.log("Varijablata e inicijalizirana")
}

// 2.
var modul = 10
if (modul % 9 == 0) {
    console.log("Brojot e deliv so 9")
} else {
    console.log("Brojot ne e deliv so 9")
}

// 3.
var i = 1
if (i++ == 2) {
    console.log("Brojot e ednakov na 2")
} else {
    console.log("Brojot ne e ednakov na 2")
}

// 4.
var d = 1
if (++d == 2) {
    console.log("Brojot e ednakov na 2")
} else {
    console.log("Brojot ne e ednakov na 2")
}

// 5.
var likesCocaCola = true
var likesSprite = true
if (likesCocaCola && likesSprite) {
    console.log("Korisnikot gi saka dvata proizvodi")
} else {
    console.log("Korisnikot ne gi saka dvata proizvodi")
}

// 6.
var likesCocaCola = true
var likesSprite = true
if (likesCocaCola || likesSprite) {
    console.log("Korisnikot saka barem eden proizvod")
} else {
    console.log("Korisnikot ne gi saka dvata proizvodi")
}

// 7.
var c = 1
if (c += 3 == 3) {
    console.log("Brojot e ednakov na 3")
} else {
    console.log("Brojot ne e ednakov na 3")
}
console.log("c = " + c)

// 8.
var b = true
if (++b == 2) {
    console.log("Brojot e ednakov na 2")
} else {
    console.log("Brojot ne e ednakov na 2")
}
console.log("b = " + b)

// 9.
var f = false
if (++f == 2) {
    console.log("Brojot e ednakov na 2")
} else {
    console.log("Brojot ne e ednakov na 2")
}
console.log("f = " + f)

// 10.
var array = [1, 2, 3]
if (array[1] == 2) {
    console.log("Elementot e ednakov na 2")
} else {
    console.log("Elementot ne e ednakov na 2")
}
console.log("array[1] = " + array[1])