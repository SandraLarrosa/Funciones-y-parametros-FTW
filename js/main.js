console.log('hola caracola');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const patata = 'patata';

function writeThis(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

writeThis(patata, getRandomNumber(10));
writeThis('Aguacate', getRandomNumber(10));
writeThis('Pizza', getRandomNumber(10));
