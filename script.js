// function toggleMenu() {
//     const navList = document.querySelector('.nav-list');
//     navList.classList.toggle('show');
// }
function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
// JavaScript code to handle the toggle button
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
});
function moveImage() {
    var image = document.getElementById('movingImage');
    var currentPosition = window.getComputedStyle(image).getPropertyValue('transform');

    if (currentPosition === 'none') {
        image.style.transform = 'translateX(50px)';
    } else {
        image.style.transform = '';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');

    submenuTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the click event from reaching the document and closing all submenus

            const isActive = this.classList.toggle('submenu-active');
            closeOtherSubmenus(trigger);

            if (isActive) {
                this.querySelector('.footer-submenu').style.display = 'block';
            } else {
                this.querySelector('.footer-submenu').style.display = 'none';
            }
        });
    });

    document.addEventListener('click', function () {
        closeAllSubmenus();
    });

    function closeOtherSubmenus(currentTrigger) {
        submenuTriggers.forEach(trigger => {
            if (trigger !== currentTrigger) {
                trigger.classList.remove('submenu-active');
                trigger.querySelector('.footer-submenu').style.display = 'none';
            }
        });
    }

    function closeAllSubmenus() {
        submenuTriggers.forEach(trigger => {
            trigger.classList.remove('submenu-active');
            trigger.querySelector('.footer-submenu').style.display = 'none';
        });
    }
});


let dishes = ['fruit', 'make', 'wet', 'get'];
for(let i = 0; i < dishes.length; i++){
    console.log(dishes[i]);
}
