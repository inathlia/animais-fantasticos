export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });
    
    function onMouseOver(event){
        //criar a tooltip
        const tooltipBox = criarTooltipBox(this); //this faz referencia ao item do forEach
    
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);
        
        onMouseLeave.tooltipBox = tooltipBox; //preenche o objeto com a tooltipBox criada
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave); //também é possivel passar objetos pelo addEventListener
    }
    
    const onMouseLeave = {
        handleEvent(){ //tem que ser esse nome!!!
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave); //para remover o event listener -> otimizar o codigo
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }
    
    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY + 20 + 'px'; //define o top (css) com o valor do pageY(posição y do mouse);
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
            // +20 para que a caixa não fique exatamente em cima do mouse e não fique piscando enquanto movimenta o mouse
        }
    }
    
    function criarTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label'); //pega o conteudo do atributo
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox); //adiciona a tooltip no fim do documento
    
        return tooltipBox;
    }
}
