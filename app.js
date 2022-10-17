const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  searchInput.classList.toggle('search__input_active');
})


const postsButtons = document.querySelector('.posts__buttons-wrapper');

postsButtons.addEventListener('click', e => {
  let btn = e.target;
  const postsButtonActive = document.querySelector('.posts__button_active');

  if (!btn.classList.contains('posts__button')) return;

  if (btn === postsButtonActive) return;

  if (btn.id === 'next') {
    btn = postsButtonActive.nextElementSibling;
    if (btn.id === 'next') {
      const prevBtn = document.querySelector('#prev');
      btn = prevBtn.nextElementSibling;
    }
  }

  if (btn.id === 'prev') {
    btn = postsButtonActive.previousElementSibling;
    if (btn.id === 'prev') {
      const nextBtn = document.querySelector('#next');
      btn = nextBtn.previousElementSibling;
    }
  }

  postsButtonActive.classList.remove('posts__button_active');

  btn.classList.add('posts__button_active');
})
