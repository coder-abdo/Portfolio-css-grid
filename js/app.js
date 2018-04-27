const Toggle = (()=>{
    const _body = document.body;
    const _container = _body.querySelector('.container');
    const _nav = _body.querySelector('nav');
    const _navBtn = _container.querySelector('.menu-button');
    const _portfolioContainer = _container.querySelector('.portfolio-items');

    const toggleNav = () => {
        _container.style.transition = "transform .25s ease-in-out";
        _body.classList.toggle('is-open');
    }
    const showSections = () => {
        _container.style.transition = "0s";
        _body.classList.remove('is-open');
    }
    const toggleModal = e => {
        e.preventDefault();
        const modalToggler = e.target.closest('.portfolio-link');
        const modal = modalToggler.parentNode.nextElementSibling;
        const modalBtn = modal.querySelector('.modal-button');
        if(!modalToggler) return;
            modal.classList.add('is-open');
            modal.style.animation = "modalIn .5s forwards";
            _body.style.overflowY = "hidden";   
       
        const closeModal = () => {
            modal.classList.remove('is-open');
            _body.style.overflowY = "auto";
            modal.removeEventListener('animationend', closeModal);
             
        }
        const actionModal = () => {
            modal.style.animation = "modalOut .5s forwards";
            modal.addEventListener('animationend',closeModal);
            
        }
        modalBtn.addEventListener('click', actionModal);
        document.addEventListener('keyup', e => {
            if(e.keyCode === 27){
                actionModal();
            }
        });
    }
    function init(){
        _navBtn.addEventListener('click', toggleNav);
        _nav.addEventListener('click', showSections);
        _portfolioContainer.addEventListener('click', toggleModal);
    }
    return {
        init: init
    }
})();
document.addEventListener('DOMContentLoaded', Toggle.init);