import './index.css';
import numeral from 'numeral';
import {getUsers} from './api/userApi';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} from this awesome course!`);

// Populate table of users
getUsers().then(result => {
    let usersBody = "";
    result.forEach(user => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
    });
    global.document.getElementById('users').innerHTML = usersBody;
});