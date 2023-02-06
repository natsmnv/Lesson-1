let year_birth = prompt("What is your year of birth?");
let user_name = prompt("What is your name?");
let surname = prompt("What is your surname?");
let year_num = +year_birth;
const this_year = +2023;
let age = this_year - year_birth;
alert(`User Bio: ${user_name} ${surname}, ${age} years old`);