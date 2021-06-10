function solve() {
    const burgerMenuButton = document.querySelector('.burger-menu-img')
    burgerMenuButton.addEventListener('click', () => {
        const hiddenMenu = document.querySelector('.menu');

        hiddenMenu.style.cssText = `
            display:block;
        `;
    });
    const closingButton = document.querySelector('.times-li');
    closingButton.addEventListener('click', () => {
        const hiddenMenu = document.querySelector('.menu');
        hiddenMenu.style.cssText = `
            display:none;
        `;
    });


}
solve();