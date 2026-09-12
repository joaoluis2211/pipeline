import js from "@eslint/js";
import globals from "globals";

export default [
  // Aplica as regras recomendadas do JavaScript para o projeto
  js.configs.recommended,
  
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // Permite o uso de require() e module.exports na sua calculadora
      globals: {
        ...globals.node,  // Ativa globais do Node (require, module, process)
        ...globals.jest,  // Ativa globais do Jest (test, expect, describe)
      },
    },
    rules: {
      "no-console": "off", // Permite o uso de console.log nos testes
    },
  },
];