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
