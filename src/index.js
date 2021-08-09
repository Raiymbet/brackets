module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets_stack = [];

  for (let bracket of str) {
    let bracket_config = bracketsConfig.find(element => element[0] === bracket || element[1] === bracket),
    opening_bracket = bracket_config[0] === bracket;
    if (bracket_config[0] === bracket_config[1] && brackets_stack.length > 0) {
      opening_bracket = brackets_stack[brackets_stack.length - 1] !== bracket;
    }

    // console.log("Bracket: ", bracket);
    // console.log("Config: ", bracket_config);
    if (opening_bracket) {
      brackets_stack.push(bracket);
    } else {
      if (brackets_stack.pop() !== bracket_config[0]) {
        return false;
      }
    }
    
  }

  // console.log(brackets_stack);
  return brackets_stack.length === 0;
}
