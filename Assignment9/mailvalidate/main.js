import User, { validateEmail } from './user.js';
const user = new User('Harsha');
console.log(user.getInfo());
const email = 'nharsha1621@gmail.com';
console.log(`Is "${email}" a valid email?`, validateEmail(email));