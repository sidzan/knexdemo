const knex = require('../knex')
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('bookshelf-virtuals-plugin');

const Todos = bookshelf.model('Todos', {
    tableName: 'todos',
    hasTimestamps: true,

    user() {
        return this.belongsTo('Users')
    },
    virtuals: {
        note() {
            const completed = this.get('completed');
            return completed ? "Is complete" : "Not completed";
        },
    },
    hidden: ['created_at', 'updated_at']
})

const Users = bookshelf.model('Users', {
    tableName: 'users',
    hasTimestamps: true,
    completed() {
        return this.hasMany('Todos').query({ where: { completed: true } })
    },
    incomplete() {
        return this.hasMany('Todos').query({ where: { completed: !true } })
    },
    todos() {
        return this.hasMany('Todos')
    },
    hidden: ['created_at', 'updated_at']
})

module.exports = { Users, Todos };