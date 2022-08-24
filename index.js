function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(specialChar = "*") {
  return function(defaultArg = "special") {
    return `You are ${specialChar}${defaultArg}${specialChar}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },

  subtract: function(num1, num2) {
    return num1 - num2;
  },

  multiply: function(num1, num2) {
    return num1 * num2;
  },

  divide: function(num1, num2) {
    return num1 / num2;
  }
}

const actionApplyer = function(initValue, functionsArr) {
  let result = initValue;

  for (let i = 0; i < functionsArr.length; i++ ){
    result = functionsArr[i](result);
  }

  return result;
}