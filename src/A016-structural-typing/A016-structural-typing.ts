/* eslint-disable no-unused-vars */
// structural-typing --> tipagem estruturada --> identidade do tipo não importa muito, apenas
// as restrições, ou seja, ele apenas liga para o que estamos pedindo para restringir

type VerifyUserFn = (user: User, receivedValue: User) => boolean;
type User = { username: string; password: string }; // liga apenas para { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return (
    user.username === receivedValue.username &&
    user.password === receivedValue.password
  );
};

const bdUser = { username: 'Lucas', password: '123456' };
const receivedUser = { username: 'Lucas', password: '123456' };
const loggedIn = verifyUser(bdUser, receivedUser);
console.log(loggedIn);
