import { observable, action, makeAutoObservable } from 'mobx';

class Popup {
  @observable searchInput = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action toggleSearchInput() {
    this.searchInput = !this.searchInput;
  }

  get searchInputIsOpen() {
    return this.searchInput;
  }
}

export default new Popup();
