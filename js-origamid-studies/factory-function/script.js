debugger;
function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return this; //retorna a propria factory function para que, mesmo escondendo os elementos, ainda possua acesso a eles
    };

    function show(){
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return this;
    };

    function on(onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return this;
    }

    function addClass(className){
        elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    function removeClass(className){
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }

    function toggleClass(className){
        elements.forEach(element => {
            element.classList.toggle(className);
        });
        return this;
    }

    return{
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
        toggleClass,
    }
}

const btns = $$('button');

console.log(btns.hide().show());

function handleCLick(event){
    console.log(event.target);
    btns.toggleClass('active');
}

btns.on('click', handleCLick);