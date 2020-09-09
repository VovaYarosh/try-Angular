function logInfo(name, age) {
    console.log("info " + name + ", " + age);
}
logInfo('Vova', 25);
function calc(a, b) {
    if (typeof b == 'string')
        b = +b;
    return a + b;
}
calc(2, 5);
