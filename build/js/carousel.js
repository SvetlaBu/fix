let list = Array.from(document.body.querySelectorAll('.carousel__item'));

document.body.querySelector('.styling__next').addEventListener ('click', () => {
	let j = list.indexOf(document.body.querySelector('.carousel__item--show'));
	document.body.querySelector('.carousel__item--show').classList.remove('carousel__item--show');
	if ((list.length - 2) >= j) {
	list[j+1].classList.add('carousel__item--show');
	} else {
		list[0].classList.add('carousel__item--show');
	}
});

document.body.querySelector('.styling__prev').addEventListener ('click', () => {
	let j = list.indexOf(document.body.querySelector('.carousel__item--show'));
	document.body.querySelector('.carousel__item--show').classList.remove('carousel__item--show');
	if (j >= 1) {
		list[j-1].classList.add('carousel__item--show');
		} else {
			list[list.length - 1].classList.add('carousel__item--show');
		}
});
