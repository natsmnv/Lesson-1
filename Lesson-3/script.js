let userName = prompt("Your name: ");
let surname = prompt("Your surname: ");
let day = +prompt("Day of birth: ");
let month = +prompt("Month of birth: ");
let yearOfBirth = +prompt("Year of birth: ");
const YEAR = 2022;
let age = YEAR - yearOfBirth;

document.open();
document.write('User Bio: ' + userName + ' ' + surname + ', ' + age + ' years old');

if(yearOfBirth % 400 === 0 || (yearOfBirth % 100 !== 0 && yearOfBirth % 4 === 0)) {
    document.write(' (leap year)');
}

document.write(', ');

if((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    document.write('Aquarius ♒');
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    document.write('Pisces ♓');
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    document.write('Aries ♈');
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    document.write('Taurus ♉');
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    document.write('Gemini ♊');
} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    document.write('Cancer ♋');
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    document.write('Leo ♌');
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    document.write('Virgo ♍');
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    document.write('Libra ♎');
} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    document.write('Scorpio ♏');
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    document.write('Sagittarius ♐');
} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    document.write('Capricorn ♑');
}

document.write(';');

document.close();