var cl = console.log;

const accoHeads = [...document.querySelectorAll('.heading')];

function onAccoClick(eve) {
    accoHeads.forEach(h => h.classList.remove('active'));
    eve.currentTarget.classList.add('active');
}

accoHeads.forEach(h => {
    h.addEventListener('click', onAccoClick);
});










