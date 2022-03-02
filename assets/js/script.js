let share = document.querySelector('.share');
let modal = document.querySelector('.modal');
let shareSvg = document.querySelector('.fillClass');

function showSocials() {
    if (modal.classList.contains('hideModal')) {
        modal.classList.remove('hideModal');
        modal.classList.add('showModal');
        share.classList.add('active');
        shareSvg.classList.add('active');
    } else {
        modal.classList.remove('showModal');
        modal.classList.add('hideModal');
        shareSvg.classList.remove('active');
        share.classList.remove('active');
    }
}