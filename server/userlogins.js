const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dmit',
    password: 'password',
    port: 5432,
});

client.connect();

const createUser = (username, password) => {

    const insertQuery = {
        text: 'INSERT INTO public.userlogins(username, password) VALUES($1, $2)',
        values: [username, password],
    };

    client.query(insertQuery, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
    });
};
