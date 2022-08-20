export const WAIT = 'wait';

//import auth from '../../state/auth';
//import { client } from './Client';

//export const login = () => {
//  client.login().then((url: string) => {
//    window.location.href = url;
//  });
//};

//export const session = () => {
//  if (localStorage.token && localStorage.length > 0) {
//    client.token = localStorage.token;
//    auth.connection();
//  } else if (window.location.hash.split('&')[0].split('=')[1]) {
//    const token = window.location.hash.split('&')[0].split('=')[1];
//    client.token = token;
//    localStorage.setItem('token', token);
//    auth.connection();
//  }
//};
