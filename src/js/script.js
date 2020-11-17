const btn = document.querySelectorAll('.btn'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
  modal.classList.remove('visible');
});

[].forEach.call(btn, function (el) {
  el.onclick = function (e) {
    modal.classList.add('visible');
  };
});