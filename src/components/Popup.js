class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._cross = this._popup.querySelector('.popup__cross');
    this._closePopupEsc = this._closePopupEsc.bind(this);
  }
  open() {
    this._popup.classList.add('popup_active');

    document.addEventListener('keydown', this._closePopupEsc);
  }
  close() {
    this._popup.classList.remove('popup_active');

    document.removeEventListener('keydown', this._closePopupEsc);
  }
  _closePopupEsc(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    this._cross.addEventListener('click', () => this.close());

    this._popup.addEventListener('click', evt => {
      if(evt.target === this._popup) {
        this.close();
      }
    });
  }
}
