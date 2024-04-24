const menuButton = document.getElementById("menu-button");
var isMenuButtonActive = false;

menuButton.addEventListener('click', () => {
    const arrowDown = menuButton.querySelector('.arrow-down');
    const overlay = document.querySelector('.overlay');
    const menuList = document.querySelector('#menu-list');

    if (!isMenuButtonActive) {
        arrowDown && arrowDown.classList.add('rotate')
        if (overlay) overlay.style.display = 'block';
        if (menuList) menuList.style.display = 'block';
        
    } else {
        arrowDown && arrowDown.classList.remove('rotate');
        if (overlay) overlay.style.display = 'none';
        if (menuList) menuList.style.display = 'none';
    }
    isMenuButtonActive = !isMenuButtonActive;
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

