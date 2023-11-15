// 1. циклус за печатење на секој втор непарен број од 1 до 100

for (let number = 1, count = 1; number <= 100; number++) {
    if (number % 2 == 1) {
        if (count == 2) {
            console.log("%i e neparen broj", number)
            count = 1
        } else {
            count++
        }
    }
}


// 2. циклус за печатење на секој непарен број од 1 до 50

for (let number = 1; number <= 50; number += 2) {
    console.log("%i e neparen broj", number)
}
