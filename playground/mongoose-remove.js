const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {User} = require('./../server/modules/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({id: '58af816039ba20e6de36e05a'}).thne((todo) => {
    
// });

Todo.findByIdAndRemove('58af816039ba20e6de36e05a').then((todo) => {
    console.log(todo);
});