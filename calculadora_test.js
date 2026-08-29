const { soma, subtracao, multiplicacao, divisao } = require("./calculadora");

test("soma", () => {
    expect(soma(5, 5)).toBe(10);
    expect(soma(-1, 1)).toBe(0);
});

test("subtracao", () => {
    expect(subtracao(10, 5)).toBe(5);
    expect(subtracao(0, 5)).toBe(-5);
});

test("multiplicacao", () => {
    expect(multiplicacao(3, 5)).toBe(15);
    expect(multiplicacao(4, 0)).toBe(0);
});

test("divisao", () => {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(5, 2)).toBe(2.5);
});

test("divisao por zero", () => {
    expect(() => divisao(10, 0)).toThrow(
        "Divisão por zero não é permitida."
    );
});