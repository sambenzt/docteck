
const dropdowns = document.querySelectorAll('[data-dropdown="toggle"]');

dropdowns.forEach(element => {

    element.addEventListener('click', (event) => {
        let target = event.target.parentElement;
        console.log(target);
        
        if(target.tagName == 'LI') {
            target = target.getElementsByTagName('button')[0];
        }
        
        if (target.hasAttribute('data-dropdown')) {
            console.log("El target tiene el atributo 'data-dropdown'.");

            const ul = target.nextElementSibling;

            ul.classList.toggle('hidden');
        }
    })

})