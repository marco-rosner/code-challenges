// Busca em um dicionário de strings e números
// Dado um dicionário com algumas strings e números, escreva um método que recebe um input e 
// retorne as 5 primeiras palavras ou números do dicionário que iniciam com o input recebido. 
// O dicionário está representado pela lista "dict".

const dict = [
    'abacate', 'asa', 'balde', 'carro', 'autêntico', 'aurora', 'acordado',
    'úlcera', 'última', 'ÚLTIMAS', 'ÚTEIS', 'calmaria', 'CAMPAINHA', 'CAMINHÃO',
    'cabrunco', 'car', 'CASA', 'abajur', 'alface', 'amigo', 'água', 'banana',
    'barco', 'cachorro', 'dente', 'dinheiro', 'elefante', 'foguete', 'girafa', 'guitarra',
    'hamburguer', 'helicóptero', 'jabuticaba', 'jornal', 'lanterna', '123ABC', 'lápis', 
    'macaco', 'melancia', 'notebook', 'oculos', 'piano', 'prato', 'quadro', 'raquete', 
    'sorvete', 'tartaruga', 'uva', 'ventilador', 'zebra', 'Word123', 'Teste5', 'Exemplo1234',
    12345, '12ab34', '23cd45', '3efg5', '45hij', 1234567890, '##@@$$%%', '##Hello', 'World##',
    'Random', 'Words', 'In', 'The', 'Dictionary', '1Word', 'TwoWords', '3Words', 'FourWordsHere',
    '5NumbersAndWords', 'A#B#C#D#E#F#G', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta',
    'eta', 'theta', 'iota', 'kappa'
];

const testChar = (str1, str2) => String.fromCharCode(String(str1).charCodeAt(0)) == String.fromCharCode(String(str2).charCodeAt(0))

console.log(testChar('ú', 'u'))
console.log(testChar('ú', 'ú'))

function busca(input) {
    const arrayInput = String(input).split('')
    const result = []
    let count = 0

    for (let i = 0; i < dict.length; i++) {
        let word = String(dict[i]).split('')

        for (let ind = 0; ind < arrayInput.length; ind++) {
            if (testChar(word[ind], arrayInput[ind])) count++
        }

        if (arrayInput.length == count) result.push(dict[i])

        if (result.length == 5) break;

        count = 0
    }

    return result
}

console.log(busca('ú')) // ['úlcera', 'última']
console.log(busca('#')) // ['##@@$$%%', '##Hello']
console.log(busca(3)) // ['3efg5', '3Words']
console.log(busca(4)) // ['45hij']
console.log(busca('A#')) // ['A#B#C#D#E#F#G']
console.log(busca(123)) // ['123ABC', 12345, 1234567890]