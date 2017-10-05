const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

//module.exports = 
function check(str, bracketsConfig) {
  let commonBracketArray = [];//array of bracketsConfig
  let resultBracketArray = [];
  let sizeBracketConfig = bracketsConfig.length;//size bracketsConfig
  let sizeStr = str.length;//size input string
  let count = 0;//main count. If value this count less zer0 => return false
  let sameBrackets = { countSameSymbols: 0 };//object with property for same brackets and numbers
  //check for odd size of string.
  if (sizeStr % 2 != 0)
    return false;

  for (let i = 0; i < sizeBracketConfig; i++) {
    for (let j = 0; j < 2; j++) {
      commonBracketArray.push(bracketsConfig[i][j]);
    }
  }

  for (let i = 0; i < sizeStr; i++) {
    if (count == -1)
      return false;
    if (checkOpenBracket(str[i], str[i + 1], commonBracketArray, sameBrackets)) {
      resultBracketArray.push(str[i]);
      count++;
    }
    else {
      if ((commonBracketArray.indexOf(str[i]) - 1) == (commonBracketArray.indexOf(str[i - 1]))) {
        resultBracketArray.pop();
        count--;
      } else {
        return false;
      }
    }

  }

  return true;
}

console.log(check('()||', config5));

function checkOpenBracket(symbol, nextSymbol, commonBracketArray) {
  console.log(commonBracketArray.indexOf(symbol));
  if (commonBracketArray.indexOf(symbol) % 2 == 0) {
    if (true) {
      console.log(symbol);
    } else {
      return true;
    }
  }
  else {
    return false;
  }


}

