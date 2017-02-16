const ObjectID = require('mongodb').ObjectID;

const mongoose = require('./../server/db/mongoose').mongoose;
const Todo = require('./../server/modules/todo.js').Todo;
const User = require('./../server/modules/user.js').User;

// var id = '58a3ab50b4808a367fb00d6d11';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todos);
// }).catch((e) => console.log(e));

User.findById('589d0c4d0ecbcf2b4ae950cc').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});