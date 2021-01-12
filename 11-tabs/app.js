const btns = document.querySelectorAll('.tab-btn');
const about  = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
  const id = e.target.dataset.id; // only buttons have data-id
  if(id){
    // remove active from other buttons
    btns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    // remove active from other contents
    articles.forEach(article => article.classList.remove('active'));
    const element = document.getElementById(id);
    element.classList.add('active');
  }
})