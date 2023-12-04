function manipulatePassword(input) {
  let password = input.shift();

  function isUppercase(char) {
      return char === char.toUpperCase() && char !== char.toLowerCase();
  }

  function isLowercase(char) {
      return char === char.toLowerCase() && char !== char.toUpperCase();
  }

  function isDigit(char) {
      return /\d/.test(char);
  }

  function isValidPassword(password) {
      if (password.length < 8) {
          console.log("Password must be at least 8 characters long!");
          return false;
      }

      if (!/^[a-zA-Z0-9_]+$/.test(password)) {
          console.log("Password must consist only of letters, digits, and _!");
          return false;
      }

      if (!password.split('').some(isUppercase)) {
          console.log("Password must consist at least one uppercase letter!");
          return false;
      }

      if (!password.split('').some(isLowercase)) {
          console.log("Password must consist at least one lowercase letter!");
          return false;
      }

      if (!password.split('').some(isDigit)) {
          console.log("Password must consist at least one digit!");
          return false;
      }

      return true;
  }

  function makeUpper(index) {
      let char = password[index];
      password = password.substring(0, index) + char.toUpperCase() + password.substring(index + 1);
      console.log(password);
  }

  function makeLower(index) {
      let char = password[index];
      password = password.substring(0, index) + char.toLowerCase() + password.substring(index + 1);
      console.log(password);
  }

  function insert(index, char) {
      password = password.substring(0, index) + char + password.substring(index);
      console.log(password);
  }

  function replace(char, value) {
      let charCode = char.charCodeAt(0) + value;
      let newChar = String.fromCharCode(charCode);
      password = password.split(char).join(newChar);
      console.log(password);
  }

  function validatePassword() {
      isValidPassword(password);
  }

  for (const command of input) {
      if (command === 'Complete') {
          break;
      }

      let [action, ...params] = command.split(' ');

      switch (action) {
          case 'Make':
              let caseType = params[0].toLowerCase();
              let index = Number(params[1]);
              caseType === 'upper' ? makeUpper(index) : makeLower(index);
              break;
          case 'Insert':
              let insertIndex = Number(params[0]);
              let insertChar = params[1];
              insert(insertIndex, insertChar);
              break;
          case 'Replace':
              let replaceChar = params[0];
              let replaceValue = Number(params[1]);
              replace(replaceChar, replaceValue);
              break;
          case 'Validation':
              validatePassword();
              break;
          default:
              break;
      }
  }
}

// Example usage:
// let input = [
//   'invalidpassword*',
//   'Add 2 p',
//   'Replace i -50',
//   'Replace * 10',
//   'Make Upper 2',
//   'Validation',
//   'Complete'
// ];
let input = (['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])
manipulatePassword(input);