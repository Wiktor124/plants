function renderImageRecomendation(recomendation) {
	document.querySelector('#plant').innerHTML = recomendation
		.map(({ image }) => {
			return `<img src="${image}" alt="">`;
		})
		.join('');
}

export default renderImageRecomendation;
