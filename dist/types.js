"use strict";
// Compiler le code avec tsc types.ts dans la console
// Puis lancer avec node types.js
console.log("Le programme TypeScript est en cours d'exécution.");
let value = "30";
// Typeof vérifie le type d'une variable
if (typeof value == "number") {
    console.log("Value est un nombre !");
}
// foo appelle fail si x n'est ni un string, ni un number
function foo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("x n'est ni un 'string' ni un 'number'");
}
console.log(foo("number"));
// Type never peu utilisé = signifie "qui n'arrive jamais"
// = fonction qui ne renvoie jamais ou qui renvoie 'throw'
function fail(message) {
    throw new Error(message);
}
//# sourceMappingURL=types.js.map