const menuButton = document.getElementById("menu-button");
const menuList = document.querySelector('#menu-list');
const menuLinks = document.querySelectorAll('#menu-list a');
const arrowDown = menuButton.querySelector('.arrow-down');
const overlay = document.querySelector('.overlay');
var isMenuButtonActive = false;

const openMenu = () => {
    arrowDown && arrowDown.classList.add('rotate')
    if (overlay) overlay.style.display = 'block';
    if (menuList) menuList.style.display = 'block';
    isMenuButtonActive = true;
}

const closeMenu = () => {
    arrowDown && arrowDown.classList.remove('rotate');
    if (overlay) overlay.style.display = 'none';
    if (menuList) menuList.style.display = 'none';
    isMenuButtonActive = false;
}

const toggleMenu = () => {
    isMenuButtonActive ? closeMenu() : openMenu();
}

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
});

if (menuLinks.length > 0) {
    for (let index = 0; index < menuLinks.length; index++) {
        menuLinks[index].addEventListener('click', () => {
            closeMenu();
        })
    }
}

document.addEventListener('click', (e) => {
    const element = e.target;
    if (isMenuButtonActive && (element != menuList || element != menuButton)) {
        closeMenu();
    }
});

const isMobile = () => {
    const screenWidth = window.innerWidth;
    const validation = screenWidth && screenWidth >= 320 && screenWidth <= 480;

    if (validation) {
        return true;
    }
    return false;
}

const setMargin = (dir, ref, el) => {
    const reference = document.getElementById(ref);
    const element = document.getElementById(el);

    const referenceHeight = reference.offsetHeight;
    if (element && referenceHeight) {
        switch (dir) {
            case 'top':
                element.style.marginTop = referenceHeight + 'px';
                break;
            case 'bottom':
                element.style.marginBottom = referenceHeight + 'px';
                break;
            default:
                break;
        }
    }
}

const resetMargin = (dir, el) => {
    const element = document.getElementById(el);

    if (element) {
        switch (dir) {
            case 'top':
                element.style.marginTop = '0px';
                break;
            case 'bottom':
                element.style.marginBottom = '0px';
                break;
            default:
                break;
        }
    }
}

window.addEventListener('load', () => {    
    const mobileCheck = isMobile();

    setMargin('top', 'navbar', 'main');
    if (mobileCheck) setMargin('bottom', 'bottom-bar', 'footer');
});

window.addEventListener('resize', () => {
    const mobileCheck = isMobile();

    setMargin('top', 'navbar', 'main');
    if (mobileCheck) {
        setMargin('bottom', 'bottom-bar', 'footer');
    } else {
        resetMargin('bottom', 'footer');
    }
});

