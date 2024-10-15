const fs = require('fs');
const readline = require('readline');


// Створюємо інтерфейс для читання файлу построчно
const rl = readline.createInterface({
    input: fs.createReadStream("./UserFile/user_value.txt"),
    output: process.stdout,
    terminal: false
})

//Масив для зберігання рядків
let lines = [];

//Подія на кожен рядок
rl.on('line', (line)=> {
    lines.push(line);
});

//Подія після завершення читання
rl.on('close', () => {
    console.log(lines[3]);
});