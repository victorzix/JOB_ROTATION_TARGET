fibonacciCheck(1);
fibonacciCheck(14);
fibonacciCheck(13);

function fibonacciCheck(inval){
    let n1 = 0, n2 = 1, temp;
    
    for(let i = 0; i <= inval; i++){
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    
        if(temp == inval) return console.log(`${inval} Pertence`)
        else if(temp > inval) return console.log(`${inval} Não Pertence`)
    }
}