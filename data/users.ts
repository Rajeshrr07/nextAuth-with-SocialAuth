const users =   [
  {
    email:'admin@gmail.com',
    password : 'password',
  },
  {
    email:'admin1@gmail.com',
    password : 'password',
  },
  {
    email:'admin2@gmail.com',
    password : 'password',
  },
  {
    email:'admin3@gmail.com',
    password : 'password',
  },
  {
    email:'admin4@gmail.com',
    password : 'password',
  },
]
export const getUserByEmail = email => {
  const found = users.find(user=>user.email === email);
  return found;
}