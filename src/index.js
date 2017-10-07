module.exports = function check(str, bracketsConfig) {
  let commonBracketArray = [];//array of bracketsConfig
  let resultBracketArray = [];
  let sizeBracketConfig = bracketsConfig.length;//size bracketsConfig
  let sizeStr = str.length;//size input string
  let count = 0;//main count. If value this count less zer0 => return false
  let sameBrackets = { isSame: false };//object with property for same brackets and numbers
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
    if (checkOpenBracket(str[i], commonBracketArray, sameBrackets)) {
      if (sameBrackets.isSame && (str[i] == resultBracketArray[resultBracketArray.length - 1])) {
        resultBracketArray.pop();
        count--;
        sameBrackets.isSame = false;
      }
      else {
        resultBracketArray.push(str[i]);
        count++;
        sameBrackets.isSame = false;
      }
    } else {
      if (commonBracketArray.indexOf(str[i]) - 1 ==
        commonBracketArray.indexOf(resultBracketArray[resultBracketArray.length - 1])) {
        resultBracketArray.pop();
        count--
      } else {
        return false;
      }
    }
  }
  return true;
}

//console.log(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6));

function checkOpenBracket(symbol, commonBracketArray, sameBrackets) {
  let index = commonBracketArray.indexOf(symbol);
  if (commonBracketArray.indexOf(symbol) % 2 == 0) {
    if (symbol == commonBracketArray[index + 1]) {
      sameBrackets.isSame = true;
      return true;
    } else {
      return true;
    }
  }
  else {
    return false;
  }  
}