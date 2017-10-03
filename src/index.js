const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

//module.exports = 
function check(str, bracketsConfig) {
  let commonBracketArray = [];
  let sizeBracketConfig = bracketsConfig.length;
  let sizeStr = str.length;
  if(sizeStr % 2 != 0)
    return false;
  let count = 0;

  for (let i = 0; i < sizeBracketConfig; i++) {
    for (let j = 0; j < 2; j++) {
      commonBracketArray.push(bracketsConfig[i][j]);
    }
  }


  for (let i = 0; i < sizeStr; i++) {
    if (count == -1)
      break;
    let a = 0;
    checkOpenBracket(str[i], i, commonBracketArray, bracketsConfig);


  }

  if (count == 0)
    return true;
  else
    return false;

}

console.log(check('([{}])', config3));

function checkOpenBracket(symbol, pos, commonBracketArray, bracketsConfig) {

  console.log(commonBracketArray.indexOf(symbol));

}

