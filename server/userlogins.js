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
    return new Promise((resolve, reject) => {
        const insertQuery = {
            text: 'INSERT INTO public.userlogins(username, password) VALUES($1, $2)',
            values: [username, password],
        };

        client.query(insertQuery, (err, res) => {
            if (err) {
                console.log(err.stack);
                reject(err); // Reject the promise if there's an error
            } else {
                resolve(); // Resolve the promise if the query is successful
            }
        });
    });
};

const deleteUser = (username, password) => {
    return new Promise((resolve, reject) => {
        const deleteQuery = {
            text: 'DELETE FROM public.userlogins WHERE username = $1 AND password = $2',
            values: [username, password],
        };

        client.query(deleteQuery, (err, res) => {
            if (err) {
                console.log(err.stack);
                reject(err); // Reject the promise if there's an error
            } else {
                resolve(); // Resolve the promise if the query is successful
            }
        });
    });
};

const changeUsername = (currentUsername, password, newUsername) => {
    return new Promise((resolve, reject) => {
        const updateQuery = {
            text: 'UPDATE public.userlogins SET username = $1 WHERE username = $2 AND password = $3',
            values: [newUsername, currentUsername, password],
        };

        client.query(updateQuery, (err, res) => {
            if (err) {
                console.log(err.stack);
                reject(err); // Reject the promise if there's an error
            } else {
                resolve(); // Resolve the promise if the query is successful
            }
        });
    });
};

const updatePassword = (username, currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
        const updateQuery = {
            text: 'UPDATE public.userlogins SET password = $1 WHERE username = $2 AND password = $3',
            values: [newPassword, username, currentPassword],
        };

        client.query(updateQuery, (err, res) => {
            if (err) {
                console.log(err.stack);
                reject(err); // Reject the promise if there's an error
            } else {
                resolve(); // Resolve the promise if the query is successful
            }
        });
    });
};

module.exports = {
    createUser,
    deleteUser,
    changeUsername,
    updatePassword
};
