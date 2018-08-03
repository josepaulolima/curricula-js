<<<<<<< HEAD:02-basic-programming/02-arrays/06-practice/16-convert-score-to-grade/solution/convertScoreToGrade.js
function convertScoreToGrade(score) {
  var str = 'PONTUAÇÃO INVÁLIDA';
=======
const convertScoreToGrade = (score) => {
  let str;
>>>>>>> upstream/master:topics/javascript/04-arrays/06-practice/16-convert-score-to-grade/solution/convertScoreToGrade.js

  switch (true) {
    case ((score <= 100) && (score >= 90)):
      str = 'A';
      break;
    case ((score <= 89) && (score >= 80)):
      str = 'B';
      break;
    case ((score <= 79) && (score >= 70)):
      str = 'C';
      break;
    case ((score <= 69) && (score >= 60)):
      str = 'D';
      break;
    case ((score <= 59) && (score >= 0)):
      str = 'F';
      break;
    default:
      str = 'PUNTUACION INVALIDA';
      break;
  }
  return str;
};

module.exports = convertScoreToGrade;
