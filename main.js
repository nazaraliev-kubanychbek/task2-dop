

let count = prompt('Введите число');

// Основное
for(let i = 0; i < count; i++){
if(i % 2 == 0) continue
document.write('<h1>' + i + '</h1>');
}
