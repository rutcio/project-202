const btnUp = {
  elem: document.querySelector('.btns__up'),
  show() {
    this.elem.classList.remove('btns__up_hide');
  },
  hide () {
    this.elem.classList.add('btns__up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      scrollY > 80 ? this.show() : this.hide();
    });
    
    document.querySelector('.btns__up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  },
}

btnUp.addEventListener();