let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

console.log(num.indexOf(5)) // mostra a posição do valor 5