/**
 * Identifica a bandeira de um cartão de crédito com base em seu número.
 * @param {string} numeroCartao - O número do cartão de crédito a ser verificado.
 * @returns {string} O nome da bandeira do cartão ou "Bandeira desconhecida".
 */
function identificarBandeira(numeroCartao) {
  // Remove caracteres não numéricos para garantir uma verificação limpa.
  const numeroLimpo = numeroCartao.replace(/\D/g, '');

  // Visa: Começa sempre com o número 4.
  if (numeroLimpo.startsWith('4')) {
    return 'Visa';
  }

  // American Express: Inicia com 34 ou 37.
  if (numeroLimpo.startsWith('34') || numeroLimpo.startsWith('37')) {
    return 'American Express';
  }

  // MasterCard: Começa com dígitos entre 51 e 55, ou entre 2221 e 2720.
  const doisPrimeirosDigitos = parseInt(numeroLimpo.substring(0, 2), 10);
  if (doisPrimeirosDigitos >= 51 && doisPrimeirosDigitos <= 55) {
    return 'MasterCard';
  }
  const quatroPrimeirosDigitos = parseInt(numeroLimpo.substring(0, 4), 10);
  if (quatroPrimeirosDigitos >= 2221 && quatroPrimeirosDigitos <= 2720) {
    return 'MasterCard';
  }

  // Discover: Começa com 6011, 65, ou com a faixa de 644 a 649.
  if (numeroLimpo.startsWith('6011') || numeroLimpo.startsWith('65')) {
    return 'Discover';
  }
  const tresPrimeirosDigitos = parseInt(numeroLimpo.substring(0, 3), 10);
  if (tresPrimeirosDigitos >= 644 && tresPrimeirosDigitos <= 649) {
    return 'Discover';
  }

  // Hipercard: Geralmente começa com 6062.
  if (numeroLimpo.startsWith('6062')) {
    return 'Hipercard';
  }
  
  // Elo: Pode começar com vários intervalos, como 4011, 4312, 4389, entre outros.
  // Adicionando alguns dos prefixos mais comuns para maior precisão.
  const prefixosElo = ['4011', '4312', '4389', '4514', '4576', '5041', '5067', '5090', '6278', '6362', '6363', '650', '6516', '6550'];
  if (prefixosElo.some(prefixo => numeroLimpo.startsWith(prefixo))) {
      return 'Elo';
  }

  // Se nenhuma das regras acima corresponder.
  return 'Bandeira desconhecida';
}

// --- Exemplos de Uso ---

// Simulação de números de cartão para teste
const cartaoVisaCurto = '4999999999999'; // Visa também pode ter 13 dígitos
const cartaoVisa16Digitos = '4123456789012345'; // << NOVO EXEMPLO ADICIONADO
const cartaoMaster = '5212345678901234';
const cartaoMaster2 = '2225123456789012';
const cartaoAmex = '371234567890123';
const cartaoDiscover = '6011123456789012';
const cartaoDiscover2 = '6450123456789012';
const cartaoHipercard = '6062821234567890';
const cartaoElo = '5067123456789012';
const cartaoInvalido = '9876543210987654';

console.log(`Cartão ${cartaoVisaCurto} -> Bandeira: ${identificarBandeira(cartaoVisaCurto)}`);
console.log(`Cartão ${cartaoVisa16Digitos} -> Bandeira: ${identificarBandeira(cartaoVisa16Digitos)}`); // << NOVO TESTE
console.log(`Cartão ${cartaoMaster} -> Bandeira: ${identificarBandeira(cartaoMaster)}`);
console.log(`Cartão ${cartaoMaster2} -> Bandeira: ${identificarBandeira(cartaoMaster2)}`);
console.log(`Cartão ${cartaoAmex} -> Bandeira: ${identificarBandeira(cartaoAmex)}`);
console.log(`Cartão ${cartaoDiscover} -> Bandeira: ${identificarBandeira(cartaoDiscover)}`);
console.log(`Cartão ${cartaoDiscover2} -> Bandeira: ${identificarBandeira(cartaoDiscover2)}`);
console.log(`Cartão ${cartaoHipercard} -> Bandeira: ${identificarBandeira(cartaoHipercard)}`);
console.log(`Cartão ${cartaoElo} -> Bandeira: ${identificarBandeira(cartaoElo)}`);
console.log(`Cartão ${cartaoInvalido} -> Bandeira: ${identificarBandeira(cartaoInvalido)}`);
