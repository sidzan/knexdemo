const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 8000;
const app = express();
const knex = require('./db/knex');
const { Users, Todos } = require("./db/models/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/todos', (req, res) => {
    knex.select().from('todos').then((data) => res.send(data))
})


app.get('/todos/:id', (req, res) => {
    knex
        .select()
        .where({ id: req.params.id })
        .from('todos')
        .then((data) => res.send(data))
})


app.post('/todos', (req, res) => {
    knex('todos')
        .insert(
            req.body
        ).then(() => {
            knex.select().from('todos').then((data) => res.send(data))
        });
})

app.put('/todos/:id', (req, res) => {
    knex('todos')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            knex.select().from('todos').then((data) => res.send(data))
        });
})

app.delete('/todos/:id', (req, res) => {
    knex('todos')
        .where({ id: req.params.id })
        .del()
        .then(() => {
            knex.select().from('todos').then((data) => res.send(data))
        });
})

app.get('/users/:id', (req, res) => {
    console.log("todos-users");
    knex('todos')
        .rightJoin("users", "users.id", "todos.user_id")
        .where({ user_id: req.params.id })
        .then((data) => res.json(data));
})


app.get('/bookshelf_users', async (req, res) => {
    console.log('bookshelf_users')
    const response = await Users.forge().fetchAll({ withRelated: ['todos'] });
    res.json(response);
});

app.get('/bookshelf_users/completed', async (req, res) => {
    console.log('bookshelf_users /completed')
    const response = await Users.forge().fetchAll({ withRelated: ['completed'] });
    res.json(response);
});

app.get('/bookshelf_users/:id', async (req, res) => {
    console.log('bookshelf_users by id')
    const response = await Users.forge().where({ id: req.params.id }).fetchAll({ withRelated: ['todos'] });
    res.json(response);
});

app.get('/bookshelf_users/:id/completed', async (req, res) => {
    console.log('bookshelf_users by id /completed')
    const response = await Users.forge().where({ id: req.params.id }).fetchAll({ withRelated: ['completed'] });
    res.json(response);
});

app.get('/bookshelf_users/:id/incomplete', async (req, res) => {
    console.log('bookshelf_users by id /incomplete')
    const response = await Users.forge().where({ id: req.params.id }).fetchAll({ withRelated: ['incomplete'] });
    res.json(response);
});

app.get('/bookshelf_todos', async (req, res) => {
    console.log('bookshelf_todos')
    const response = await Todos.forge().fetchAll({ withRelated: ['user'] });
    res.json(response);
});

app.get('/bookshelf_todos/:id', async (req, res) => {
    console.log('bookshelf_todos byid')
    const response = await Todos.forge().where({ id: req.params.id }).fetchAll({ withRelated: ['user'] });
    res.json(response);
});


app.listen(port, () => {
    console.log(`Listening to Port ${port}`)
});