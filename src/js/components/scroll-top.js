const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалить у кнопки класс btn-up__hide
    this.el.classList.remove('btn-up__hide');
  },
  hide() {
    // добавить к кнопке класс btn-up__hide
    this.el.classList.add('btn-up__hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определить величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 600 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


