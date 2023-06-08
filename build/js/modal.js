
const formImgUpload = document.querySelector('.form');
const isEscapeKey = (evt) => evt.key === 'Escape';

formImgUpload.addEventListener('submit', () => {
	document.querySelector('.modal-open').classList.remove('visually-hidden');
	document.querySelector('.success').classList.remove('visually-hidden');
	window.addEventListener('click', () => {
		document.querySelector('.modal-open').classList.add('visually-hidden');
		document.querySelector('.success').classList.add('visually-hidden');
	}, {once:true});
	document.addEventListener('keydown', (evt) => {
		if (isEscapeKey(evt)) {
			evt.preventDefault();
			document.querySelector('.modal-open').classList.add('visually-hidden');
			document.querySelector('.success').classList.add('visually-hidden');
		}
	}, {once:true});
}, {once:true});
