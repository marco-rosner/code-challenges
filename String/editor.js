// Comandos
// `h` move o cursor para a esquerda
// `l` move o cursor para a direita
// `r<char>` atualiza o carácter na posição atual pelo <char> 

// Repetição dos comandos

// `Nh` move o cursor N caracteres para a esquerda
// `Nl` move o cursor N caracteres para a direita
// `Nr<char>` atualiza N caracteres, começando pela posição do cursor, pelo <char> e move o cursor de posição

const move = (cursor, number, limit, direction) => {
    if (cursor === limit) {
        return limit
    }

    if (direction === 'left') {
        if (number <= limit) {
            return limit
        }

        return cursor - number
    }

    if (direction === 'right') {
        if (number >= limit) {
            return limit
        }

        return cursor + number
    }
}

const editor = (commands, str = "Hello World") => {
    const str_array = commands.split('')
    const end_boundary = str.length-1
    const result = str.split('')
    let cursor = 0
    let number

    for(let i = 0; i < str_array.length; i++){
        switch(str_array[i]) {
            case 'h':
                cursor = move(cursor, 1, 0, 'left')
                break;
            case 'l':
                cursor = move(cursor, 1, end_boundary, 'right')
                break;
            case 'r':
                i++
                result[cursor] = str_array[i]
                break;
            default:
                if (parseInt(str_array[i]) != NaN) {
                    if (number) {
                        number = number + str_array[i]
                    } else {
                        number = str_array[i]
                    }

                    if(str_array[i+1] === 'h') {
                        cursor = move(cursor, parseInt(number), 0, 'left')
                        number = undefined
                        i++
                    }

                    if(str_array[i+1] === 'l') {
                        cursor = move(cursor, parseInt(number), end_boundary, 'right')
                        number = undefined
                        i++
                    }

                    if(str_array[i+1] === 'r') {
                        for(let ind=0; ind <= parseInt(number); ind++) {
                            result[cursor] = str_array[i+2]
                            cursor = cursor >= end_boundary ? end_boundary : cursor + 1
                        }
                        number = undefined
                    }
                }
        }
    };

    console.log(result.join(''), cursor);
}

// Casos de testes
editor("hhllllhlhhl") // Esperado: Hello World 3
editor("rhllllllrgllllllrb") // Esperado: hello gorlb 10
editor("rh6lrg6lrb2h") // Esperado: hello gorldb 10
editor("9999lrO") // Esperado: Hello WorlO 10
editor('21rA') // Esperado: AAAAAAAAAAA 10