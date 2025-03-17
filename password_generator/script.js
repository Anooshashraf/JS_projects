const passwordBox = document.getElementById("password");
const length = 8;
const passwordButton = document.getElementById("btn");
// const image =  document.getElementById("btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = " 0123456789";
const specialCharacters = "@#/$%&*(){}[]<>-~_+";

const allChars = upperCase + LowerCase + number + specialCharacters;
function GeneratePassword(){
    let password = "";
    password+= upperCase[Math.floor(Math.random() * upperCase.length)];
    password+= LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password+= number[Math.floor(Math.random() * number.length)];
    password+= specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    };
    passwordBox.value = password;

};

passwordButton.addEventListener("click",GeneratePassword);

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy");
// }

// image.addEventListener("onclick",copyPassword);