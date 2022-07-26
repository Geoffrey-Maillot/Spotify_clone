import { observable, action, makeAutoObservable } from 'mobx';

class Auth {
  @observable isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action connection() {
    this.isAuth = true;
  }

  @action deconnexion() {
    this.isAuth = false;
  }

  get getAuth() {
    return this.isAuth;
  }
}

export default new Auth();
