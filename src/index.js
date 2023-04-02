import generateJoke from "./generateJoke";
import './style/main.scss';
import arrow from './assets/ic-arrow-orange-up.svg';

const arrowImg = document.getElementById('arrow');
arrowImg.src = arrow;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();