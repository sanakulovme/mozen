// ** (styles.css [main script file])
// *
// ** By: Abbos Sanakulov [©];
// *
// **********************************
// **********************************
// *
// ** abbossana@gmail.com;
// ** github.com/sanakulovme
// ** t.me/abbosjec
// ** instagram.com/abbosjec
// **
// *


let sizer = document.getElementById('sizer'),
	main = document.getElementById('main'),
	modal = document.getElementById('modal'),
	checkboxBtn = document.getElementById('border-checkbox'),
	settingsBtn = document.querySelector('.settings-btn');
	closeBtn = document.querySelector('.close-btn');

let borderBoll = true;

sizer.addEventListener('input', (e) => {
	main.style.transform = `scale(${e.target.value})`
})

settingsBtn.addEventListener('click', () => {
	modal.classList.add('open');
	document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
	modal.classList.remove('open');
	document.body.style.overflow = 'auto';
});

checkboxBtn.addEventListener('click', (e) => {
	if(borderBoll){
		main.classList.add('with-border');
		checkboxBtn.classList.add('open');
		borderBoll = false;
	}else{
		main.classList.remove('with-border');
		checkboxBtn.classList.remove('open');
		borderBoll = true;
	}
})