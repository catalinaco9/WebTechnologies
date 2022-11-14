function addTokens(input, tokens){
    if(typeof(input)!=='string'){
        throw `Invalid input`; //i saw that in the app.test, the error message is different and if i use the one from the todo, it doesn't work
    }
    
    if(input.length<6){
        throw `Input should have at least 6 characters`;
    }

    tokens.forEach(token => {
        let key = Object.keys(token);
        if (key.length !== 1)
        {
            throw `Invalid array format`;
        }
        else if (key[0] != 'tokenName')
        {
            throw `Invalid array format`;
        }

        if (typeof(token.tokenName) !== 'string')
        {
            throw `Invalid array format`;
        }
    });

    if((input.match('[.]{3}')|| []).length<1){
        return input;
    }

    tokens.forEach(token=>{
        input = input.replace("...", `$\{${token.tokenName}\}`);
      
    });
    return input; 

}

const app = {
    addTokens: addTokens
}

module.exports = app;