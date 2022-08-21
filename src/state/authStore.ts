import { observable, action, makeAutoObservable } from 'mobx';

export default class Auth {
  @observable isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action connection() {
    this.isAuth = true;
  }

  @action deconnexion() {
    this.isAuth = false;
    localStorage.removeItem('token');
  }

  get getAuth() {
    return this.isAuth;
  }
}
