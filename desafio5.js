function reverter(str){
    let input = "";
    for(let i = str.length-1; i >= 0; i--){
      input += str[i];
    }
    return input;
  }
console.log(reverter("victor"))