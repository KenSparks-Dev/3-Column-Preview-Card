//column one btn functions
let learnMoreBtnOne = document.querySelector('.open-btn-one');
let sedansCard = document.querySelector('.column-one');
let closeBtnOne = document.querySelector('.close-btn-one');
learnMoreBtnOne.addEventListener('click', expandCardOne);
closeBtnOne.addEventListener('click', closeCardOne);

function expandCardOne() {
  if (window.innerWidth >= 1024) {
    sedansCard.style.transform = 'translateX(100px)';
    sedansCard.style.width = '1000px';
    sedansCard.style.height = '600px';
    sedansCard.style.marginLeft = '620px';
    sedansCard.style.zIndex = '2';
    sedansCard.style.transition = '3s';
    sedansCard.style.borderRadius = '15px';
    closeBtnOne.style.display = 'block';
    closeBtnOne.style.borderRadius = '50%';
    closeBtnOne.style.transitionAll = '2s';
    closeBtnOne.style.top = '580px';
    closeBtnOne.style.left = '980px';
    closeBtnOne.style.opacity = '100%'
    closeBtnOne.style.transform = 'translateX(15px)'
  }
}

function closeCardOne() {
	sedansCard.style.transform = 'translateX(0px)';
	sedansCard.style.width = '320px';
	sedansCard.style.height = 'auto';
	sedansCard.style.marginLeft = '0px';
	sedansCard.style.zIndex = '1';
	sedansCard.style.transition = '3s';
  sedansCard.style.borderRadius = '15px 0px 0px 15px';
  closeBtnOne.style.display = 'none';
}

//column Two btn functions
let learnMoreBtnTwo = document.querySelector('.open-btn-two');
let suvCard = document.querySelector('.column-two');
let closeBtnTwo = document.querySelector('.close-btn-two');
learnMoreBtnTwo.addEventListener('click', expandCardTwo);
closeBtnTwo.addEventListener('click', closeCardTwo);

function expandCardTwo() {
  if (window.innerWidth >= 1024) {
    suvCard.style.transform = 'translateX(0px)';
    suvCard.style.width = '1000px';
    suvCard.style.height = '600px';
    suvCard.style.marginLeft = '0px';
    suvCard.style.zIndex = '2';
    suvCard.style.transition = '3s';
    suvCard.style.borderRadius = '15px';
    closeBtnTwo.style.display = 'block';
    closeBtnTwo.style.borderRadius = '50%';
    closeBtnTwo.style.transitionAll = '2s';
    closeBtnTwo.style.top = '580px';
    closeBtnTwo.style.left = '980px';
    closeBtnTwo.style.opacity = '100%'
    closeBtnTwo.style.transform = 'translateX(15px)'
  }
}

function closeCardTwo() {
	suvCard.style.transform = 'translateX(0px)';
	suvCard.style.width = '320px';
	suvCard.style.height = 'auto';
	suvCard.style.margin = '0px';
	suvCard.style.zIndex = '1';
	suvCard.style.transition = '3s';
  suvCard.style.borderRadius = '0px 0px 0px 0px';
  closeBtnTwo.style.display = 'none';
}

//column three btn functions
let learnMoreBtnThree = document.querySelector('.open-btn-three');
let LuxuryCard = document.querySelector('.column-three');
let closeBtnThree = document.querySelector('.close-btn-three');
learnMoreBtnThree.addEventListener('click', expandCardThree);
closeBtnThree.addEventListener('click', closeCardThree);

function expandCardThree() {
  if (window.innerWidth >= 1024) {
	LuxuryCard.style.transform = 'translateX(100px)';
	LuxuryCard.style.width = '1000px';
	LuxuryCard.style.height = '600px';
	LuxuryCard.style.marginLeft = '-620px';
	LuxuryCard.style.zIndex = '2';
	LuxuryCard.style.transition = '3s';
	LuxuryCard.style.borderRadius = '15px';
	closeBtnThree.style.display = 'block';
	closeBtnThree.style.borderRadius = '50%';
	closeBtnThree.style.transitionAll = '2s';
	closeBtnThree.style.top = '580px';
  closeBtnThree.style.left = '980px';
  closeBtnThree.style.opacity = '100%'
    closeBtnThree.style.transform = 'translateX(15px)'
  }
}

function closeCardThree() {
	LuxuryCard.style.transform = 'translateX(0px)';
	LuxuryCard.style.width = '320px';
	LuxuryCard.style.height = 'auto';
	LuxuryCard.style.marginLeft = '0px';
	LuxuryCard.style.zIndex = '1';
	LuxuryCard.style.transition = '3s';
  LuxuryCard.style.borderRadius = '0px 15px 15px 0px';
  closeBtnThree.style.display = 'none';
}
