console.log('hola caracola');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function writeThis(word, number) {
    for (let i = 0; i < number; i++) {
      console.log(word);
    }
  }
  
const myWordList = [
  {
    text: 'Pencil',
    total: 6,
  },
  {
    text: 'Thermo',
    total: 2,
  },
  {
    text: 'TV',
    total: 8,
  },
  {
    text: 'Phone',
    total: 4,
  },
];

function writeMyArray(array) {
    for (const element of array) {
        writeThis(element.text, element.total)
    }
}

writeMyArray(myWordList)



