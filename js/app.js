const Toggle = (()=>{
    const _navBtn = document.querySelector('.menu-button');
    const _body = document.body;
    const _container = document.querySelector('.container');
    const _nav = document.querySelector('nav');
    const toggleNav = () => {
        _container.style.transition = "transform .25s ease-in-out";
        _body.classList.toggle('is-open');
    }
    const showSections = () => {
        _container.style.transition = "0s";
        _body.classList.remove('is-open');
    }
    function init(){
        _navBtn.addEventListener('click', toggleNav);
        _nav.addEventListener('click', showSections);
    }
    return {
        init: init
    }
})();
document.addEventListener('DOMContentLoaded', Toggle.init);