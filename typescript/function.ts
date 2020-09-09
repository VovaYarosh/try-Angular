function logInfo(name: string, age: number): void{
  console.log(`info ${name}, ${age}`)
}

logInfo('Vova',25);

function calc(a: number, b: number | string): number{
    if(typeof b = 'string') b = +b;
    return a + b
}
calc(2,5)