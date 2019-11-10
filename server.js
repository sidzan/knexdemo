const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 8000;
const app = express();
const knex = require('./db/knex');

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
        .rightJoin("users","users.id","todos.user_id")
        .where({ user_id: req.params.id })
        .then((data) => res.json(data));
})

app.listen(port, () => {
    console.log(`Listening to Port ${port}`)
});