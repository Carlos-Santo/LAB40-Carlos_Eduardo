
const assert = require('node:assert/strict');

const validator = require('../src/features/feature31'); 

console.log('Iniciando smoke test - Funcionalidade 31: Validador de CPF');

assert.deepEqual(
  validator.execute({ cpf: '529.982.247-25' }),
  { valido: true }
);


assert.deepEqual(
  validator.execute({ cpf: '52998224725' }),
  { valido: true }
);

assert.deepEqual(
  validator.execute({ cpf: '123.456.789-00' }),
  { valido: false }
);

assert.deepEqual(
  validator.execute({ cpf: '111.111.111-11' }),
  { valido: false }
);

assert.deepEqual(
  validator.execute({ cpf: '123456789' }),
  { valido: false }
);

assert.deepEqual(
  validator.execute({ cpf: '529.982.247-AB' }),
  { valido: false }
);

assert.throws(
  () => validator.execute({}),
  /CPF deve ser string/
);

assert.throws(
  () => validator.execute({ cpf: 12345678909 }),
  /CPF deve ser string/
);

console.log('Smoke test concluído com sucesso!');
