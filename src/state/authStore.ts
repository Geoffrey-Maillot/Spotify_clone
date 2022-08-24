import { observable, action, makeAutoObservable } from 'mobx';
import { spotifyApi } from '../service/spotify/client';

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
    spotifyApi.setAccessToken('');
  }

  get getAuth() {
    return this.isAuth;
  }
}
