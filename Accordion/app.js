const accordion = document.querySelectorAll('.accordion');


accordion.forEach((accordion) => {
  const icon = accordion.querySelector('.icon');
  const answer = accordion.querySelector('.answer');
  accordion.addEventListener('click', () => {
    answer.classList.toggle('active');
    console.log('clicked');
    icon.classList.toggle('active');
  })
})
