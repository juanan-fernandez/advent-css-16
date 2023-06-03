import './style.css';
import './stars.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
  </div>
`;

let stars = '';
for (let i = 0; i < 5; i++) {
	stars += `<div class="star">
    <svg width="152" height="151" viewBox="0 0 152 151" fill="none" xmlns="http://www.w3.org/2000/svg" class="star__logo" data-id=${i}>
      <path d="M116.805 149.588C118.072 150.433 119.534 150.855 120.989 150.855C122.55 150.855 124.11 150.372 125.437 149.407C127.985 147.545 129.101 144.289 128.234 141.251L114.378 92.7403L148.934 58.1838C151.09 56.0354 151.731 52.7863 150.57 49.9669C149.409 47.155 146.65 45.3156 143.605 45.3156H103.04L82.505 4.25334C79.9495 -0.850234 71.5742 -0.850234 69.0186 4.25334L48.4837 45.3156H7.91146C4.86591 45.3156 2.10681 47.155 0.945881 49.9669C-0.215049 52.7863 0.425724 56.0354 2.58174 58.1838L37.1383 92.7403L23.2825 141.251C22.4156 144.289 23.5313 147.545 26.0793 149.407C28.6424 151.277 32.0875 151.337 34.7109 149.588L75.758 122.223L116.805 149.588Z" fill="currentColor" stroke="currentColor"/>
    </svg>
  </div>`;
}

document.querySelector('#stars').innerHTML = `${stars}`;
const theStars = document.querySelectorAll('.star__logo');

const handleMouseOut = s => {
	const timer = setTimeout(() => {
		if (s.dataset.id < 4) {
			let nextStar = Number(s.dataset.id) + 1;
			let nextStarElement = theStars[nextStar];
			if (nextStarElement.classList.contains('star__logo--hovered')) {
				return;
			}
		}
		s.classList.remove('star__logo--hovered');
	}, 500);
};

theStars.forEach(s =>
	s.addEventListener('mouseenter', () => {
		let precedingStar;
		let precedingStarElement;
		if (s.dataset.id > 0) {
			precedingStar = s.dataset.id - 1;
			precedingStarElement = theStars[precedingStar];
			if (!precedingStarElement.classList.contains('star__logo--hovered')) {
				return;
			}
		}
		s.classList.add('star__logo--hovered');
	})
);

theStars.forEach(s => {
	s.addEventListener('mouseleave', () => {
		handleMouseOut(s);
	});
});
