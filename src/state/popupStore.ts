import { observable, action, makeAutoObservable } from 'mobx';

export default class Popups {
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
