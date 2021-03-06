//All columns
let cards = document.querySelector('.column');

//column one btn functions
let learnMoreBtnOne = document.querySelector('.open-btn-one');
let sedansCard = document.querySelector('.column-one');
let closeBtnOne = document.querySelector('.close-btn-one');
let benefitsListSedan = document.querySelector('.benefits-list-sedan');
// onclick events
learnMoreBtnOne.onclick = function () {
	if (window.innerWidth < 1024) {
		benefitsListSedan.style.display = 'block';
		learnMoreBtnOne.style.display = 'none';
		closeBtnOne.style.display = 'block';
		closeBtnOne.style.borderRadius = '50%';
		closeBtnOne.style.transitionAll = '2s';
	}
	if (window.innerWidth >= 1024) {
		sedansCard.style.transform = 'translateX(100px)';
		sedansCard.style.width = '1000px';
		sedansCard.style.marginLeft = '620px';
		sedansCard.style.zIndex = '2';
		sedansCard.style.transition = '1s';
		sedansCard.style.borderRadius = '15px';
		closeBtnOne.style.display = 'block';
		closeBtnOne.style.borderRadius = '50%';
		closeBtnOne.style.transitionAll = '2s';
		closeBtnOne.style.top = '580px';
		closeBtnOne.style.left = '980px';
		closeBtnOne.style.opacity = '100%';
		learnMoreBtnOne.style.display = 'none';
		setTimeout(() => {
			benefitsListSedan.style.display = 'block';
			benefitsListSedan.style.width = '410px';
			close;
		}, 1000);
	}
};
closeBtnOne.onclick = function () {
	if (window.innerWidth < 1024) {
		closeBtnOne.style.display = 'none';
		learnMoreBtnOne.style.display = 'block';
		benefitsListSedan.style.display = 'none';
	}
	if (window.innerWidth >= 1024) {
		sedansCard.style.transform = 'translateX(0px)';
		sedansCard.style.width = '320px';
		sedansCard.style.marginLeft = '0px';
		sedansCard.style.zIndex = '1';
		sedansCard.style.transition = '1s';
		sedansCard.style.borderRadius = '15px 0px 0px 15px';
		closeBtnOne.style.display = 'none';
		learnMoreBtnOne.style.display = 'block';
		benefitsListSedan.style.display = 'none';
	}
};

//column Two btn functions
let learnMoreBtnTwo = document.querySelector('.open-btn-two');
let suvCard = document.querySelector('.column-two');
let closeBtnTwo = document.querySelector('.close-btn-two');
let benefitsListSuv = document.querySelector('.benefits-list-suv');
//On click Events
learnMoreBtnTwo.onclick = function () {
	if (window.innerWidth < 1024) {
		benefitsListSuv.style.display = 'block';
		learnMoreBtnTwo.style.display = 'none';
		closeBtnTwo.style.display = 'block';
		closeBtnTwo.style.borderRadius = '50%';
		closeBtnTwo.style.transitionAll = '2s';
	}
	if (window.innerWidth >= 1024) {
		suvCard.style.transform = 'translateX(0px)';
		suvCard.style.width = '1000px';
		suvCard.style.marginLeft = '0px';
		suvCard.style.zIndex = '2';
		suvCard.style.transition = '1s';
		suvCard.style.borderRadius = '15px';
		closeBtnTwo.style.display = 'block';
		closeBtnTwo.style.borderRadius = '50%';
		closeBtnTwo.style.transitionAll = '2s';
		closeBtnTwo.style.top = '580px';
		closeBtnTwo.style.left = '980px';
		closeBtnTwo.style.height = 'auto';
		closeBtnTwo.style.opacity = '100%';
		learnMoreBtnTwo.style.display = 'none';
		setTimeout(() => {
			benefitsListSuv.style.display = 'block';
			benefitsListSuv.style.width = '410px';
			close;
		}, 1000);
	}
};
closeBtnTwo.onclick = function () {
	if (window.innerWidth < 1024) {
		closeBtnTwo.style.display = 'none';
		learnMoreBtnTwo.style.display = 'block';
		benefitsListSuv.style.display = 'none';
	}
	if (window.innerWidth >= 1024) {
		suvCard.style.transform = 'translateX(0px)';
		suvCard.style.width = '320px';
		suvCard.style.margin = '0px';
		suvCard.style.zIndex = '1';
		suvCard.style.transition = '1s';
		suvCard.style.borderRadius = '0px 0px 0px 0px';
		closeBtnTwo.style.display = 'none';
		learnMoreBtnTwo.style.display = 'block';
		benefitsListSuv.style.display = 'none';
		closeBtnTwo.style.position = 'static';
	}
};

//column three btn functions
let learnMoreBtnThree = document.querySelector('.open-btn-three');
let LuxuryCard = document.querySelector('.column-three');
let closeBtnThree = document.querySelector('.close-btn-three');
let benefitsListLuxury = document.querySelector('.benefits-list-luxury');
//onclick events
learnMoreBtnThree.onclick = function () {
	if (window.innerWidth < 1024) {
		benefitsListLuxury.style.display = 'block';
		learnMoreBtnThree.style.display = 'none';
		closeBtnThree.style.display = 'block';
		closeBtnThree.style.borderRadius = '50%';
		closeBtnThree.style.transitionAll = '2s';
	}
	if (window.innerWidth >= 1024) {
		LuxuryCard.style.transform = 'translateX(100px)';
		LuxuryCard.style.width = '1000px';
		LuxuryCard.style.marginLeft = '-620px';
		LuxuryCard.style.zIndex = '2';
		LuxuryCard.style.transition = '1s';
		LuxuryCard.style.borderRadius = '15px';
		closeBtnThree.style.display = 'block';
		closeBtnThree.style.borderRadius = '50%';
		closeBtnThree.style.transitionAll = '2s';
		closeBtnThree.style.top = '580px';
		closeBtnThree.style.left = '980px';
		closeBtnThree.style.opacity = '100%';
		learnMoreBtnThree.style.display = 'none';
		setTimeout(() => {
			benefitsListLuxury.style.display = 'block';
			benefitsListLuxury.style.width = '410px';
			close;
		}, 1000);
	}
};

closeBtnThree.onclick = function () {
	if (window.innerWidth < 1024) {
		closeBtnThree.style.display = 'none';
		learnMoreBtnThree.style.display = 'block';
		benefitsListLuxury.style.display = 'none';
	}
	if (window.innerWidth >= 1024) {
		LuxuryCard.style.transform = 'translateX(0px)';
		LuxuryCard.style.width = '320px';
		LuxuryCard.style.marginLeft = '0px';
		LuxuryCard.style.zIndex = '1';
		LuxuryCard.style.transition = '1s';
		LuxuryCard.style.borderRadius = '0px 15px 15px 0px';
		closeBtnThree.style.display = 'none';
		learnMoreBtnThree.style.display = 'block';
		benefitsListLuxury.style.display = 'none';
	}
};
