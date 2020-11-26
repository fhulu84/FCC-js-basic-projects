// init counter
let counter = 0;

const value = document.querySelector('#value');

function setCounter(event){
  if(event.target.tagName === "BUTTON"){
    switch(event.target.innerText){
      case 'RESET':
        counter = 0;
        break;
      case 'DECREASE':
        counter--;
        break;
      case 'INCREASE':
        counter++;
        break;
    }

    value.textContent = counter;
    value.style.color = counter < 0 ? 'red'
                      : counter > 0 ? 'green'
                      : getComputedStyle(document.documentElement).getPropertyValue('--clr-grey-1');
  }
}

document.querySelector('.button-container').addEventListener('click', setCounter);