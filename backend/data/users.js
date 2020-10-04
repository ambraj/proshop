import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ambuj',
    email: 'ambuj@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rashmi',
    email: 'rashmi@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
export default users;
