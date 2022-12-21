const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "0123456789";
const characterset = ".,><';|\*&^%$#@!~`";

const passbox = document.getElementById("pass-box");
const total_char_inp = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const number_input = document.getElementById("numbers");
const char_input = document.getElementById("characters");

const getrandomdata = (dataSet) => {
    return dataSet[Math.floor(Math.random()*dataSet.length)];
 }

const generatepassword = (password="") => {
    if(password.length<total_char_inp.value && upperinput.checked)
    {
        password += getrandomdata(upperset);
    }
    if(password.length<total_char_inp.value && lowerinput.checked)
    {
        password += getrandomdata(lowerset);
    }
    if(password.length<total_char_inp.value && number_input.checked)
    {
        password += getrandomdata(numberset);
    }
    if(password.length<total_char_inp.value && char_input.checked)
    {
        password += getrandomdata(characterset);
    }
    if(password.length<total_char_inp.value)
    {
        return generatepassword(password); 
    }
    passbox.innerText = password;
}
generatepassword();
document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatepassword();
    }
)