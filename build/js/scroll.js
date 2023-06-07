
document.body.querySelector('.info__button').onclick = () => {
	document.body.querySelector('.form').scrollIntoView({behavior: "smooth"});
};

document.body.querySelector('.nav__contacts').onclick = () => {
	document.body.querySelector('.contacts').scrollIntoView({behavior: "smooth"});
};

document.body.querySelector('.scrool-down').onclick = () => {
	document.body.querySelector('.contacts').scrollIntoView({bottom: 0, behavior: "smooth"});
};
