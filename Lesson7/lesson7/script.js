// const os = require('os');
// const moment = require('moment');
// const { foo } = require('./func');
// const foo = require('./func/');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!!!');
        res.end();
    }
    if (req.url === '/api/users/') {
        fs.readFile('db.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(5555);
server.on('connection', (socket) => {
    console.log('New connection');
});

// const users = [{name: 'Ann', age: 25}];
//
// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const users = JSON.parse(data);
//         users.push({name: 'John', age: 30});
//
//         fs.writeFile('db.json', JSON.stringify(users), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });

// console.log(foo(10));
// console.log(moment());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
