const smallCups = document.querySelectorAll('.small-cup');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters-remaining');
const percentageText = document.querySelector('.text');
const remained = document.getElementById('remained');

function updateBigCup() {
    const fullCups = document.querySelectorAll('.small-cup.full');
    const totalCups = smallCups.length;

    if (fullCups.length === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups.length / totalCups * 330}px`;
        percentageText.textContent = `${fullCups.length / totalCups * 100}%`;
    }

    if (fullCups.length === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.textContent = `${2 - (250 * fullCups.length / 1000)}L`
    }

    console.log(fullCups);
}

function configSmallCups() {
    smallCups.forEach((cup, i) => {
        cup.addEventListener('click', () => {

            if (cup.classList.contains('full')) {
                for (let index = smallCups.length - 1; index >= i; index--) {
                    smallCups[index].classList.remove('full');     
                };
            } else {
                for (let index = 0; index <= i; index++) {
                    smallCups[index].classList.add('full');
                };
            };

            updateBigCup();

        });
    });
    
}

function initScript() {
    configSmallCups();
    updateBigCup();
}

initScript();