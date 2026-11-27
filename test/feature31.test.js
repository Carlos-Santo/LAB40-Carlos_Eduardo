// Testes de referência – Feature 31
// Execute com: node --test test/feature31.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const feature = require('../src/features/feature31');
test('valida CPF de referência com pontuação', () => {
 assert.equal(feature.execute({ cpf: '529.982.247-25' }).valido, true);
});
test('aceita CPF sem pontuação', () => {
 assert.equal(feature.execute({ cpf: '52998224725' }).valido, true);
});
test('rejeita sequência repetida, dígito incorreto e tamanho inválido', () => {
 for (const cpf of ['111. 111.111-11', '529.982.247-24', '123456789', '529.982.247-2a'])
 assert.equal(feature.execute({ cpf }).valido, false);
});
