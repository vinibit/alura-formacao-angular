type TokenType = string | number

function processaToken(token: TokenType) {
    
    let tokenAsString: string = typeof(token) == 'string' ? token : token.toFixed();
    // muda o dígito 2 por X!    
    return tokenAsString.replace(/2/g,'X');   
}

const tokenProcessado1 = processaToken('1234');
const tokenProcessado2 = processaToken(1234);

console.log(tokenProcessado1);
console.log(tokenProcessado2);