import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Joe Doe',
        email: 'joedoe@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Joana Doe',
        email: 'joana@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    } 
];

export default users;