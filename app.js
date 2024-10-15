const fs = require('fs');
const readline = require('readline');


//Асинхронна функція для читання файла построчно
async function readLines(filePath) {
    const fileStream = fs.createReadStream(filePath);
 
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const lines = [];

//Обробляємо кожен рядок асинхронно
    for await (const line of rl) {
        lines.push(line);
    }

    return lines;
}

// функція вибору тексту між маркерами
function extractBetween(text, startMarker, endMarker) {
    const startIndex = text.indexOf(startMarker);
    const endIndex = text.indexOf(endMarker, startIndex + startMarker.length);

    if (startIndex !== -1 && endIndex !== -1) {
        return text.substring(startIndex + startMarker.length, endIndex);
    }
    return null;
} 

//const text = "Це текст між [початок] і [кінець]";
//const result = extractBetween(text, "Це текст між", "[кінець]")
//console.log(result);



readLines("./UserFile/user_value.txt")
    .then(lines => {
        const result = extractBetween(lines[1000], '<option value="', '">№');
        const result1 = extractBetween(lines[1000], '">№ ', ' - ');
        console.log(result);
        console.log(result1);
    }  
    )
    .catch(err => console.error('Error reading file:', err));

