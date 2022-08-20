import { observable, action, makeAutoObservable } from 'mobx';
import { authUserPlaylist, authuser } from '../service/spotify/user';

class Auth {
  @observable authUser = {};
  @observable playlistsAuthUser = [];
  @observable error = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchAuthUser() {
    authuser()
      .then((user) => {
        this.authUser = { toto: 'toto' };
      })
      .then(() => {
        console.log(this.authUser);
      })
      .catch((error) => {
        this.error = 'Une erreur est survenue lors de la requête';

        console.log(error);
      });
  }

  @action fetchPlaylistAuthUser() {
    authUserPlaylist().then((userPlaylist) => console.log(userPlaylist));
  }

  get getAuthUser() {
    return this.authUser;
  }
}

export default new Auth();
