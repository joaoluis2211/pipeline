const {
    soma,
    subtracao,
    multiplicacao,
    divisao
} = require("./calculadora");

test("soma", () => {
    const resultado1 = soma(5, 5);
    const resultado2 = soma(-1, 1);

    console.log(`5 + 5 = ${resultado1}`);
    console.log(`-1 + 1 = ${resultado2}`);

    expect(resultado1).toBe(10);
    expect(resultado2).toBe(0);
});

test("subtracao", () => {
    const resultado1 = subtracao(10, 5);
    const resultado2 = subtracao(0, 5);

    console.log(`10 - 5 = ${resultado1}`);
    console.log(`0 - 5 = ${resultado2}`);

    expect(resultado1).toBe(5);
    expect(resultado2).toBe(-5);
});

test("multiplicacao", () => {
    const resultado1 = multiplicacao(3, 5);
    const resultado2 = multiplicacao(4, 0);

    console.log(`3 x 5 = ${resultado1}`);
    console.log(`4 x 0 = ${resultado2}`);

    expect(resultado1).toBe(15);
    expect(resultado2).toBe(0);
});

test("divisao", () => {
    const resultado1 = divisao(10, 2);
    const resultado2 = divisao(5, 2);

    console.log(`10 / 2 = ${resultado1}`);
    console.log(`5 / 2 = ${resultado2}`);

    expect(resultado1).toBe(5);
    expect(resultado2).toBe(2.5);
});

test("divisao por zero", () => {
    console.log("10 / 0 = erro esperado");

    expect(() => divisao(10, 0))
        .toThrow("Divisão por zero não é permitida.");
});