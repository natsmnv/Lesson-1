let email = prompt('Enter your email: ');
let password = prompt('Enter your password');
let tries = 3;
if (email.startsWith('@') || email.endsWith('@') || email.length > 15 || !email.includes('@') || !email.endsWith('.com') 
    || !password.match(/[A-Z]/) || password.length < 4 || password.length > 12) {
    tries--;
    alert(tries);
} 

if (tries <= 0) {
    alert('Sorry, you don`t have more tries');
}

while(email.startsWith('@') || email.endsWith('@') || email.length > 15 || !email.includes('@') || !email.endsWith('.com')
      || !password.match(/[A-Z]/) || password.length < 4 || password.length > 12) {
    email = prompt('Enter your email: ');
    password = prompt('Enter your password');
    if (email.startsWith('@') || email.endsWith('@') || email.length > 15 || !email.includes('@') || !email.endsWith('.com')
      || !password.match(/[A-Z]/) || password.length < 4 || password.length > 12) {
        tries--;
        alert(tries);
    } 
    
    if (tries <= 0) {
        alert('Sorry, you don`t have more tries');
    }
}

alert(`Your account successfully registered!\nEmail: ${email}\nPassword: ${password}`);