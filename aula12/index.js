let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

{
    let varA = varB;
    console.log(varA)
}

{
    let varB = varC;
    console.log(varB)
}

{
    let varC = varA;
    console.log(varC)
}