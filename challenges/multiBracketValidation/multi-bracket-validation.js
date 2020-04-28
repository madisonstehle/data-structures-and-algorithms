'use strict';

const multiBracketValidation = (str) => {
  let strArray = str.split('');
  
  let finalCount = strArray.reduce((acc, currentVal) => {
    if(currentVal === '(' || currentVal === '{' || currentVal === '['){
      return ++acc;
    } else if(currentVal === ')' || currentVal === '}' || currentVal === ']') {
      return --acc;
    }
    return acc;
  }, 0);

  return finalCount === 0;
}

module.exports = multiBracketValidation;