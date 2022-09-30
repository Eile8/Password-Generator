// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays for numbers, specials, upper/lower case

//create a password generate function: 
function generatePassword() {
  var passwordLength;
  passwordLength = parseInt(passwordLength)
  console.log(typeof passwordLength);
  while (true) {
    passwordLength=prompt("Choose a number between 8 and 128 for the length of password");
    if (passwordLength>=8 && passwordLength<=128) {
    break;
  } 
  alert ("Try again!");
  }
  alert("Let's move on!");

  var passwordQs ={
    lowerCase: confirm("Do you want to include lowercase?"),
    upperCase: confirm("Do you want to include uppercase?"),
    symbols: confirm("Do you want to include symbols?"),
    numbers: confirm("Do you want to include numbers?") }
  
  if (passwordQs.lowerCase===true) {
    result()
  }

  if (passwordQs.upperCase===true){
    result()
  }

  if (passwordQs.symbols===true){
    result()
  }

  if (passwordQs.numbers===true){
    result()
  }
  
  //based on the response trim, build avaiable pool of characters
  function result() {
  var options=['a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,!, @, #, $, %, &, ?,0, 1, 2, 3, 4, 5, 6, 7, 8, 9']
  var password= options[Math.floor(Math.random() * options.length)];
    for (password; i=0; i<passwordLength, i++); 

  return;
}
}
//generate random int within range of available character length 



//prompt user for length
//check length

//store the response
//based on the resposen trim, build avaiable pool of characters
//build the password: letter-letter or character-character
//generate random int within range of available character length
//add chart to result
//do until length= whatever length desired
//and then return