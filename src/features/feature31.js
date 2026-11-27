// Funcionalidade 31: Validador de CPF.
// Objetivo: Valida CPF brasileiro considerando dígitos verificadores.
// Exemplo de entrada: { cpf: '529.982.247-25' }
// Implemente conforme as regras e critérios do enunciado fornecido pelo professor.

const implemented = true;

// Desenvolva a regra de negócio e valide todos os dados de entrada.
function execute(input) {
  const {cpf}=input||{}; if(typeof cpf!=='string') throw new Error('CPF deve ser string.'); const n=cpf.replace(/[.\-\s]/g,''); if(!/^\d{11}$/.test(n)||/^([0-9])\1{10}$/.test(n)) return { valido:false };
function digit(base,fator){let soma=0; for(let i=0;i<base.length;i++) soma+=Number(base[i])*(fator-i); const
r=(soma*10)%11; return r===10?0:r;}
const d1=digit(n.slice(0,9),10); const d2=digit(n.slice(0,9)+d1,11); return { valido:
n[9]===String(d1)&&n[10]===String(d2) };

}

// Mantém o contrato de integração utilizado pela API central.
module.exports = {
  id: 31,
  name: "Validador de CPF",
  description: "Valida CPF brasileiro considerando dígitos verificadores.",
  implemented,
  execute
};
